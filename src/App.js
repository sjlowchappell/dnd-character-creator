import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import CharacterCustomizer from './components/CharacterCustomizer';
import Abilities from './components/Abilities';
import Description from './components/Description';
// const url = 'http://dnd5eapi.co/api/';

const races = [
	{
		name: 'Dwarf',
		url: 'http://www.dnd5eapi.co/api/races/1',
	},
	{
		name: 'Elf',
		url: 'http://www.dnd5eapi.co/api/races/2',
	},
	{
		name: 'Halfling',
		url: 'http://www.dnd5eapi.co/api/races/3',
	},
	{
		name: 'Human',
		url: 'http://www.dnd5eapi.co/api/races/4',
	},
	{
		name: 'Dragonborn',
		url: 'http://www.dnd5eapi.co/api/races/5',
	},
	{
		name: 'Gnome',
		url: 'http://www.dnd5eapi.co/api/races/6',
	},
	{
		name: 'Half-Elf',
		url: 'http://www.dnd5eapi.co/api/races/7',
	},
	{
		name: 'Half-Orc',
		url: 'http://www.dnd5eapi.co/api/races/8',
	},
	{
		name: 'Tiefling',
		url: 'http://www.dnd5eapi.co/api/races/9',
	},
];
const classes = [
	{
		name: 'Barbarian',
		url: 'http://www.dnd5eapi.co/api/classes/1',
	},
	{
		name: 'Bard',
		url: 'http://www.dnd5eapi.co/api/classes/2',
	},
	{
		name: 'Cleric',
		url: 'http://www.dnd5eapi.co/api/classes/3',
	},
	{
		name: 'Druid',
		url: 'http://www.dnd5eapi.co/api/classes/4',
	},
	{
		name: 'Fighter',
		url: 'http://www.dnd5eapi.co/api/classes/5',
	},
	{
		name: 'Monk',
		url: 'http://www.dnd5eapi.co/api/classes/6',
	},
	{
		name: 'Paladin',
		url: 'http://www.dnd5eapi.co/api/classes/7',
	},
	{
		name: 'Ranger',
		url: 'http://www.dnd5eapi.co/api/classes/8',
	},
	{
		name: 'Rogue',
		url: 'http://www.dnd5eapi.co/api/classes/9',
	},
	{
		name: 'Sorcerer',
		url: 'http://www.dnd5eapi.co/api/classes/10',
	},
	{
		name: 'Warlock',
		url: 'http://www.dnd5eapi.co/api/classes/11',
	},
	{
		name: 'Wizard',
		url: 'http://www.dnd5eapi.co/api/classes/12',
	},
];

class App extends Component {
	constructor() {
		super();
		this.state = {
			class: {
				name: '',
				url: '',
				// Includes:
				/* 
					name
					index
					hit_die
					proficiency_choices
					proficiencies
					saving_throws
					starting_equipment -> url to look up equipment
					class_levels
					spellcasting
					url
				*/
				// Add a level option (dropdown, choose 1 - 20)
				// Make a call to get features based on paladin level, filter out unique objects
			},
			race: {
				name: '',
				url: '',
				// Includes:
				/* 
					name
					index
					speed
					ability_bonuses
					alignment description
					age description
					size
					size description
					starting_proficiencies
					starting_proficiency_options
					languages
					language_desc
					traits
					subraces
					url
				*/
			},
			description: [
				{ descriptor: 'name', value: '' },
				{ descriptor: 'age', value: '' }, // desc. comes with Race
				{ descriptor: 'eyes', value: '' },
				{ descriptor: 'height', value: '' }, // desc. comes with Race
				{ descriptor: 'weight', value: '' },
				{ descriptor: 'hair', value: '' },
				{ descriptor: 'alignment', value: '' }, // desc. comes with Race
				{ descriptor: 'background', value: '' },
				{ descriptor: 'traits', value: '' },
				{ descriptor: 'ideals', value: '' },
				{ descriptor: 'bonds', value: '' },
				{ descriptor: 'flaws', value: '' },
				{ descriptor: 'gender', value: '' },
			],
			abilities: {
				initialRolls: [],
				totalScores: [
					{ name: 'strength', value: 0 },
					{ name: 'dexterity', value: 0 },
					{ name: 'constitution', value: 0 },
					{ name: 'intelligence', value: 0 },
					{ name: 'wisdom', value: 0 },
					{ name: 'charisma', value: 0 },
				],
				skills: [],
			},
			proficiencies: {
				// Combine proficiencies from race and class, and ones selected from proficiency options
			},
			equipment: {
				//url from class can be used to look this up and give user choices
				equipped: {
					armor: '',
					weapons: [],
				},
				inventory: {},
			},
			hp: 0,
			xp: 0,
			insp: false,
		};
	}
	handleClick = e => {
		const stateKey = e.target.classList.value;
		const name = e.target.innerText;
		const url = e.target.dataset.url;
		this.setState({
			[stateKey]: { name: name, url: url },
		});
	};
	getAbilities = () => {
		if (this.state.abilities.initialRolls.length < 6) {
			const rolls = this.state.abilities.initialRolls;
			const diceRoll = Math.ceil(Math.random() * 20);
			rolls.push(diceRoll);
			this.setState(prevState => ({
				abilities: {
					...prevState.abilities,
					initialRolls: rolls,
				},
			}));
		} else {
			console.log('All abilities rolled for!');
		}
	};
	confirmed = () => {
		try {
			const classInfo = axios.get(this.state.class.url);
			const raceInfo = axios.get(this.state.race.url);
			Promise.all([classInfo, raceInfo]).then(res => {
				const proficiencies = [];
				proficiencies.push([...res[0].data.proficiencies, ...res[1].data.starting_proficiencies]);
				this.setState({
					class: res[0].data,
					race: res[1].data,
					proficiencies: proficiencies,
				});
				this.calculateBaseAbilities();
			});
		} catch (err) {
			console.log(err);
		}
	};
	calculateBaseAbilities = () => {
		const raceScores = this.state.race.ability_bonuses;
		const totals = this.state.abilities.totalScores;
		let i = 0;
		totals.forEach(score => {
			score.value = score.value + raceScores[i];
			i++;
		});
		this.setState({
			abilities: {
				totalScores: totals,
				initialRolls: [],
				skills: [],
			},
		});
	};
	charName = e => {
		this.setState({
			name: e.target.value,
		});
	};
	charDescription = e => {
		const description = this.state.description;
		const index = e.target.parentElement.getAttribute('data-index');
		const value = e.target.value;
		const descriptor = this.state.description[index].descriptor;
		description[index] = { descriptor, value };
		this.setState({
			description: description,
		});
	};
	chooseLevel = e => {
		console.log(e.target.value);
		const level = e.target.value;
		this.setState(prevState => ({
			class: {
				...prevState.class,
				level: level,
			},
		}));
	};

	render() {
		return (
			<div className="App">
				<h1>DND Character Creator</h1>
				<CharacterCustomizer name={'Class'} onClick={this.handleClick} list={classes} />
				<CharacterCustomizer name={'Race'} onClick={this.handleClick} list={races} />
				<div>
					<button onClick={this.confirmed}>Confirm Race and Class</button>
				</div>
				<Abilities onClick={this.getAbilities} abilities={this.state.abilities.initialRolls} />
				<label for="levelSelect">Choose your Level:</label>
				<select id="levelSelect" onChange={this.chooseLevel}>
					<option value="1">Level 1</option>
					<option value="2">Level 2</option>
					<option value="3">Level 3</option>
					<option value="4">Level 4</option>
					<option value="5">Level 5</option>
					<option value="6">Level 6</option>
					<option value="7">Level 7</option>
					<option value="8">Level 8</option>
					<option value="9">Level 9</option>
					<option value="10">Level 10</option>
					<option value="11">Level 11</option>
					<option value="12">Level 12</option>
					<option value="13">Level 13</option>
					<option value="14">Level 14</option>
					<option value="15">Level 15</option>
					<option value="16">Level 16</option>
					<option value="17">Level 17</option>
					<option value="18">Level 18</option>
					<option value="19">Level 19</option>
					<option value="20">Level 20</option>
				</select>
				<Description descriptors={this.state.description} onChange={this.charDescription} />
			</div>
		);
	}
}

export default App;
