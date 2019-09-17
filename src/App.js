import React, { Component } from 'react';
// import axios from 'axios';
import './App.css';
// const url = 'http://dnd5eapi.co/api/';

const races = [];
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
			characterClass: '',
			race: '',
		};
	}
	handleClick = e => {
		const charClass = e.target.innerText;
		console.log(e.target.innerText);
		this.setState({
			characterClass: charClass,
		});
	};

	// getClassInformation(class) {
	// 	try {
	// 		const response = axios.get(`${url}/classes/${class}`);
	// 	} catch (err) {
	// 		console.log(err);
	// 	}
	// }

	render() {
		return (
			<div className="App">
				<h1>DND Character Creator</h1>
				<div>
					<h2>Choose a Class</h2>
					<ul>
						{classes.map(charClass => {
							return (
								<li>
									<button onClick={this.handleClick}>{charClass.name}</button>
								</li>
							);
						})}
					</ul>
				</div>
			</div>
		);
	}
}

export default App;
