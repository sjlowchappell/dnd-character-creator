import React, { Component } from 'react';
// import axios from 'axios';
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
				level: {},
			},
			race: {
				name: '',
			},
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
			description: [
				{ descriptor: 'name', value: '' },
				{ descriptor: 'age', value: '' },
				{ descriptor: 'eyes', value: '' },
				{ descriptor: 'weight', value: '' },
				{ descriptor: 'hair', value: '' },
				{ descriptor: 'alignment', value: '' },
				{ descriptor: 'background', value: '' },
				{ descriptor: 'traits', value: '' },
				{ descriptor: 'ideals', value: '' },
				{ descriptor: 'bonds', value: '' },
				{ descriptor: 'flaws', value: '' },
			],
			equipment: {
				equipped: {
					armor: '',
					weapons: [],
				},
				inventory: {},
			},
			misc: {
				otherProficiencies: [],
				languages: [],
				features: [],
				traits: [],
			},
			hp: 0,
			xp: 0,
			insp: false,
		};
	}
	handleClick = e => {
		const stateName = e.target.classList.value;
		const stateUpdate = e.target.innerText;
		this.setState({
			[stateName]: { name: stateUpdate },
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

	render() {
		return (
			<div className="App">
				<h1>DND Character Creator</h1>
				<CharacterCustomizer name={'Class'} onClick={this.handleClick} list={classes} />
				<CharacterCustomizer name={'Race'} onClick={this.handleClick} list={races} />
				<Abilities onClick={this.getAbilities} abilities={this.state.abilities.initialRolls} />

				<Description descriptors={this.state.description} onChange={this.charDescription} />
			</div>
		);
	}
}

export default App;
