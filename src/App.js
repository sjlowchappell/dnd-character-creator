import React, { Component } from 'react';
// import axios from 'axios';
import './App.css';
import CharacterCustomizer from './components/CharacterCustomizer';
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
			name: '',
			class: '',
			race: '',
		};
	}
	handleClick = e => {
		const stateName = e.target.classList.value;
		const stateUpdate = e.target.innerText;
		if (stateName === 'class') {
			this.setState({
				class: stateUpdate,
			});
		} else if (stateName === 'race') {
			this.setState({
				race: stateUpdate,
			});
		}
	};

	render() {
		return (
			<div className="App">
				<h1>DND Character Creator</h1>
				<CharacterCustomizer name={'Class'} onClick={this.handleClick} list={classes} />
				<CharacterCustomizer name={'Race'} onClick={this.handleClick} list={races} />
			</div>
		);
	}
}

export default App;
