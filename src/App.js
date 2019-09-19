import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import CharacterCustomizer from './components/CharacterCustomizer';
import Abilities from './components/Abilities';
import Description from './components/Description';
import Choose from './components/Choose';
import Equipment from './components/Equipment';

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
				_id: '5bce90ff5b7768e792017cf7',
				index: 7,
				name: 'Paladin',
				hit_die: 10,
				proficiency_choices: [
					{
						from: [
							{
								name: 'Skill: Athletics',
								url: 'http://www.dnd5eapi.co/api/proficiencies/108',
							},
							{
								name: 'Skill: Insight',
								url: 'http://www.dnd5eapi.co/api/proficiencies/111',
							},
							{
								name: 'Skill: Intimidation',
								url: 'http://www.dnd5eapi.co/api/proficiencies/112',
							},
							{
								name: 'Skill: Medicine',
								url: 'http://www.dnd5eapi.co/api/proficiencies/114',
							},
							{
								name: 'Skill: Persuasion',
								url: 'http://www.dnd5eapi.co/api/proficiencies/118',
							},
							{
								name: 'Skill: Religion',
								url: 'http://www.dnd5eapi.co/api/proficiencies/119',
							},
						],
						type: 'proficiencies',
						choose: 2,
					},
				],
				proficiencies: [
					{
						url: 'http://www.dnd5eapi.co/api/proficiencies/4',
						name: 'All armor',
					},
					{
						url: 'http://www.dnd5eapi.co/api/proficiencies/18',
						name: 'Shields',
					},
					{
						url: 'http://www.dnd5eapi.co/api/proficiencies/19',
						name: 'Simple weapons',
					},
					{
						url: 'http://www.dnd5eapi.co/api/proficiencies/20',
						name: 'Martial weapons',
					},
				],
				saving_throws: [
					{
						url: 'http://www.dnd5eapi.co/api/ability-scores/5',
						name: 'WIS',
					},
					{
						url: 'http://www.dnd5eapi.co/api/ability-scores/6',
						name: 'CHA',
					},
				],
				starting_equipment: {
					url: 'http://www.dnd5eapi.co/api/startingequipment/7',
					class: 'Paladin',
				},
				class_levels: {
					url: 'http://www.dnd5eapi.co/api/classes/Paladin/levels',
					class: 'Paladin',
				},
				subclasses: [
					{
						name: 'Devotion',
						url: 'http://www.dnd5eapi.co/api/subclasses/7',
					},
				],
				spellcasting: {
					url: 'http://www.dnd5eapi.co/api/spellcasting/4',
					class: 'Paladin',
				},
				url: 'http://www.dnd5eapi.co/api/classes/7',
			},
			// {
			// 	name: '',
			// 	url: '',
			// 	// Includes:
			// 	/*
			// 		name
			// 		index
			// 		hit_die
			// 		proficiency_choices
			// 		proficiencies
			// 		saving_throws
			// 		starting_equipment -> url to look up equipment
			// 		class_levels
			// 		spellcasting
			// 		url
			// 	*/
			// 	// Make a call to get features based on paladin level, filter out unique objects
			// },
			race: {
				_id: '5bce91525b7768e792018382',
				index: 1,
				name: 'Dwarf',
				speed: 30,
				ability_bonuses: [0, 0, 2, 0, 0, 0],
				alignment:
					'Most dwarves are lawful, believing firmly in the benefits of a well-ordered society. They tend toward good as well, with a strong sense of fair play and a belief that everyone deserves to share in the benefits of a just order.',
				age:
					'Dwarves mature at the same rate as humans, but they’re considered young until they reach the age of 50. On average, they live about 350 years.',
				size: 'Medium',
				size_description:
					'Dwarves stand between 4 and 5 feet tall and average about 150 pounds. Your size is Medium.',
				starting_proficiencies: [
					{
						name: 'Battleaxes',
						url: 'http://www.dnd5eapi.co/api/proficiencies/20',
					},
					{
						name: 'Handaxes',
						url: 'http://www.dnd5eapi.co/api/proficiencies/24',
					},
					{
						name: 'Light hammers',
						url: 'http://www.dnd5eapi.co/api/proficiencies/26',
					},
					{
						name: 'Warhammers',
						url: 'http://www.dnd5eapi.co/api/proficiencies/51',
					},
				],
				starting_proficiency_options: {
					choose: 1,
					type: 'proficiencies',
					from: [
						{
							name: "Smith's tools",
							url: 'http://www.dnd5eapi.co/api/proficiencies/71',
						},
						{
							name: "Brewer's supplies",
							url: 'http://www.dnd5eapi.co/api/proficiencies/59',
						},
						{
							name: "Mason's tools",
							url: 'http://www.dnd5eapi.co/api/proficiencies/68',
						},
					],
				},
				languages: [
					{
						name: 'Common',
						url: 'http://www.dnd5eapi.co/api/languages/1',
					},
					{
						name: 'Dwarvish',
						url: 'http://www.dnd5eapi.co/api/languages/2',
					},
				],
				language_desc:
					'You can speak, read, and write Common and Dwarvish. Dwarvish is full of hard consonants and guttural sounds, and those characteristics spill over into whatever other language a dwarf might speak.',
				traits: [
					{
						url: 'http://www.dnd5eapi.co/api/traits/1',
						name: 'Darkvision (Dwarf)',
					},
					{
						url: 'http://www.dnd5eapi.co/api/traits/2',
						name: 'Dwarven Resilience',
					},
					{
						url: 'http://www.dnd5eapi.co/api/traits/3',
						name: 'Stonecunning',
					},
				],
				subraces: [
					{
						name: 'Hill Dwarf',
						url: 'http://www.dnd5eapi.co/api/subraces/1',
					},
					{
						name: 'Mountain Dwarf',
						url: 'http://www.dnd5eapi.co/api/subraces/4',
					},
				],
				url: 'http://www.dnd5eapi.co/api/races/1',
			},
			// {
			// 	name: '',
			// 	url: '',
			// 	// Includes:
			// 	/*
			// 		name
			// 		index
			// 		speed
			// 		ability_bonuses
			// 		alignment description
			// 		age description
			// 		size
			// 		size description
			// 		starting_proficiencies
			// 		starting_proficiency_options
			// 		languages
			// 		language_desc
			// 		traits
			// 		subraces
			// 		url
			// 	*/
			// },
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
				_id: '5bce92095b7768e79201864a',
				index: 7,
				starting_equipment: [
					{
						quantity: 1,
						item: {
							name: 'Chain Mail',
							url: 'http://www.dnd5eapi.co/api/equipment/47',
						},
					},
				],
				choices_to_make: 5,
				choice_1: [
					{
						from: [
							{
								quantity: 1,
								item: {
									name: 'Shield',
									url: 'http://www.dnd5eapi.co/api/equipment/50',
								},
							},
						],
						type: 'equipment',
						choose: 1,
					},
					{
						from: [
							{
								quantity: 1,
								item: {
									name: 'Battleaxe',
									url: 'http://www.dnd5eapi.co/api/equipment/15',
								},
							},
							{
								quantity: 1,
								item: {
									name: 'Flail',
									url: 'http://www.dnd5eapi.co/api/equipment/16',
								},
							},
							{
								quantity: 1,
								item: {
									name: 'Glaive',
									url: 'http://www.dnd5eapi.co/api/equipment/17',
								},
							},
							{
								quantity: 1,
								item: {
									name: 'Greataxe',
									url: 'http://www.dnd5eapi.co/api/equipment/18',
								},
							},
							{
								quantity: 1,
								item: {
									name: 'Greatsword',
									url: 'http://www.dnd5eapi.co/api/equipment/19',
								},
							},
							{
								quantity: 1,
								item: {
									name: 'Halberd',
									url: 'http://www.dnd5eapi.co/api/equipment/20',
								},
							},
							{
								quantity: 1,
								item: {
									name: 'Lance',
									url: 'http://www.dnd5eapi.co/api/equipment/21',
								},
							},
							{
								quantity: 1,
								item: {
									name: 'Longsword',
									url: 'http://www.dnd5eapi.co/api/equipment/22',
								},
							},
							{
								quantity: 1,
								item: {
									name: 'Maul',
									url: 'http://www.dnd5eapi.co/api/equipment/23',
								},
							},
							{
								quantity: 1,
								item: {
									name: 'Morningstar',
									url: 'http://www.dnd5eapi.co/api/equipment/24',
								},
							},
							{
								quantity: 1,
								item: {
									name: 'Pike',
									url: 'http://www.dnd5eapi.co/api/equipment/25',
								},
							},
							{
								quantity: 1,
								item: {
									name: 'Rapier',
									url: 'http://www.dnd5eapi.co/api/equipment/26',
								},
							},
							{
								quantity: 1,
								item: {
									name: 'Scimitar',
									url: 'http://www.dnd5eapi.co/api/equipment/27',
								},
							},
							{
								quantity: 1,
								item: {
									name: 'Shortsword',
									url: 'http://www.dnd5eapi.co/api/equipment/28',
								},
							},
							{
								quantity: 1,
								item: {
									name: 'Trident',
									url: 'http://www.dnd5eapi.co/api/equipment/29',
								},
							},
							{
								quantity: 1,
								item: {
									name: 'War pick',
									url: 'http://www.dnd5eapi.co/api/equipment/30',
								},
							},
							{
								quantity: 1,
								item: {
									name: 'Warhammer',
									url: 'http://www.dnd5eapi.co/api/equipment/31',
								},
							},
							{
								quantity: 1,
								item: {
									name: 'Whip',
									url: 'http://www.dnd5eapi.co/api/equipment/32',
								},
							},
							{
								quantity: 1,
								item: {
									name: 'Blowgun',
									url: 'http://www.dnd5eapi.co/api/equipment/33',
								},
							},
							{
								quantity: 1,
								item: {
									name: 'Crossbow, hand',
									url: 'http://www.dnd5eapi.co/api/equipment/34',
								},
							},
							{
								quantity: 1,
								item: {
									name: 'Crossbow, heavy',
									url: 'http://www.dnd5eapi.co/api/equipment/35',
								},
							},
							{
								quantity: 1,
								item: {
									name: 'Longbow',
									url: 'http://www.dnd5eapi.co/api/equipment/36',
								},
							},
							{
								quantity: 1,
								item: {
									name: 'Net',
									url: 'http://www.dnd5eapi.co/api/equipment/37',
								},
							},
						],
						type: 'equipment',
						choose: 1,
					},
				],
				choice_2: [
					{
						from: [
							{
								quantity: 5,
								item: {
									name: 'Javelin',
									url: 'http://www.dnd5eapi.co/api/equipment/5',
								},
							},
						],
						type: 'equipment',
						choose: 1,
					},
					{
						from: [
							{
								quantity: 1,
								item: {
									name: 'Club',
									url: 'http://www.dnd5eapi.co/api/equipment/1',
								},
							},
							{
								quantity: 1,
								item: {
									name: 'Dagger',
									url: 'http://www.dnd5eapi.co/api/equipment/2',
								},
							},
							{
								quantity: 1,
								item: {
									name: 'Greatclub',
									url: 'http://www.dnd5eapi.co/api/equipment/3',
								},
							},
							{
								quantity: 1,
								item: {
									name: 'Handaxe',
									url: 'http://www.dnd5eapi.co/api/equipment/4',
								},
							},
							{
								quantity: 1,
								item: {
									name: 'Javelin',
									url: 'http://www.dnd5eapi.co/api/equipment/5',
								},
							},
							{
								quantity: 1,
								item: {
									name: 'Light hammer',
									url: 'http://www.dnd5eapi.co/api/equipment/6',
								},
							},
							{
								quantity: 1,
								item: {
									name: 'Mace',
									url: 'http://www.dnd5eapi.co/api/equipment/7',
								},
							},
							{
								quantity: 1,
								item: {
									name: 'Quarterstaff',
									url: 'http://www.dnd5eapi.co/api/equipment/8',
								},
							},
							{
								quantity: 1,
								item: {
									name: 'Sickle',
									url: 'http://www.dnd5eapi.co/api/equipment/9',
								},
							},
							{
								quantity: 1,
								item: {
									name: 'Spear',
									url: 'http://www.dnd5eapi.co/api/equipment/10',
								},
							},
							{
								quantity: 1,
								item: {
									name: 'Crossbow, light',
									url: 'http://www.dnd5eapi.co/api/equipment/11',
								},
							},
							{
								quantity: 1,
								item: {
									name: 'Dart',
									url: 'http://www.dnd5eapi.co/api/equipment/12',
								},
							},
							{
								quantity: 1,
								item: {
									name: 'Shortbow',
									url: 'http://www.dnd5eapi.co/api/equipment/13',
								},
							},
							{
								quantity: 1,
								item: {
									name: 'Sling',
									url: 'http://www.dnd5eapi.co/api/equipment/14',
								},
							},
						],
						type: 'equipment',
						choose: 1,
					},
				],
				choice_3: [
					{
						from: [
							{
								quantity: 1,
								item: {
									name: "Priest's Pack",
									url: 'http://www.dnd5eapi.co/api/equipment/159',
								},
							},
						],
						type: 'equipment',
						choose: 1,
					},
					{
						from: [
							{
								quantity: 1,
								item: {
									name: "Explorer's Pack",
									url: 'http://www.dnd5eapi.co/api/equipment/158',
								},
							},
						],
						type: 'equipment',
						choose: 1,
					},
				],
				choice_4: [
					{
						from: [
							{
								quantity: 1,
								item: {
									name: 'Amulet',
									url: 'http://www.dnd5eapi.co/api/equipment/58',
								},
							},
							{
								quantity: 1,
								item: {
									name: 'Emblem',
									url: 'http://www.dnd5eapi.co/api/equipment/93',
								},
							},
							{
								quantity: 1,
								item: {
									name: 'Reliquary',
									url: 'http://www.dnd5eapi.co/api/equipment/134',
								},
							},
						],
						type: 'equipment',
						choose: 1,
					},
				],
				choice_5: [
					{
						from: [
							{
								quantity: 1,
								item: {
									name: 'Battleaxe',
									url: 'http://www.dnd5eapi.co/api/equipment/15',
								},
							},
							{
								quantity: 1,
								item: {
									name: 'Flail',
									url: 'http://www.dnd5eapi.co/api/equipment/16',
								},
							},
							{
								quantity: 1,
								item: {
									name: 'Glaive',
									url: 'http://www.dnd5eapi.co/api/equipment/17',
								},
							},
							{
								quantity: 1,
								item: {
									name: 'Greataxe',
									url: 'http://www.dnd5eapi.co/api/equipment/18',
								},
							},
							{
								quantity: 1,
								item: {
									name: 'Greatsword',
									url: 'http://www.dnd5eapi.co/api/equipment/19',
								},
							},
							{
								quantity: 1,
								item: {
									name: 'Halberd',
									url: 'http://www.dnd5eapi.co/api/equipment/20',
								},
							},
							{
								quantity: 1,
								item: {
									name: 'Lance',
									url: 'http://www.dnd5eapi.co/api/equipment/21',
								},
							},
							{
								quantity: 1,
								item: {
									name: 'Longsword',
									url: 'http://www.dnd5eapi.co/api/equipment/22',
								},
							},
							{
								quantity: 1,
								item: {
									name: 'Maul',
									url: 'http://www.dnd5eapi.co/api/equipment/23',
								},
							},
							{
								quantity: 1,
								item: {
									name: 'Morningstar',
									url: 'http://www.dnd5eapi.co/api/equipment/24',
								},
							},
							{
								quantity: 1,
								item: {
									name: 'Pike',
									url: 'http://www.dnd5eapi.co/api/equipment/25',
								},
							},
							{
								quantity: 1,
								item: {
									name: 'Rapier',
									url: 'http://www.dnd5eapi.co/api/equipment/26',
								},
							},
							{
								quantity: 1,
								item: {
									name: 'Scimitar',
									url: 'http://www.dnd5eapi.co/api/equipment/27',
								},
							},
							{
								quantity: 1,
								item: {
									name: 'Shortsword',
									url: 'http://www.dnd5eapi.co/api/equipment/28',
								},
							},
							{
								quantity: 1,
								item: {
									name: 'Trident',
									url: 'http://www.dnd5eapi.co/api/equipment/29',
								},
							},
							{
								quantity: 1,
								item: {
									name: 'War pick',
									url: 'http://www.dnd5eapi.co/api/equipment/30',
								},
							},
							{
								quantity: 1,
								item: {
									name: 'Warhammer',
									url: 'http://www.dnd5eapi.co/api/equipment/31',
								},
							},
							{
								quantity: 1,
								item: {
									name: 'Whip',
									url: 'http://www.dnd5eapi.co/api/equipment/32',
								},
							},
							{
								quantity: 1,
								item: {
									name: 'Blowgun',
									url: 'http://www.dnd5eapi.co/api/equipment/33',
								},
							},
							{
								quantity: 1,
								item: {
									name: 'Crossbow, hand',
									url: 'http://www.dnd5eapi.co/api/equipment/34',
								},
							},
							{
								quantity: 1,
								item: {
									name: 'Crossbow, heavy',
									url: 'http://www.dnd5eapi.co/api/equipment/35',
								},
							},
							{
								quantity: 1,
								item: {
									name: 'Longbow',
									url: 'http://www.dnd5eapi.co/api/equipment/36',
								},
							},
							{
								quantity: 1,
								item: {
									name: 'Net',
									url: 'http://www.dnd5eapi.co/api/equipment/37',
								},
							},
						],
						type: 'equipment',
						choose: 1,
					},
				],
				url: 'http://www.dnd5eapi.co/api/startingequipment/7',
				class: {
					url: 'http://www.dnd5eapi.co/api/classes/7',
					name: 'Paladin',
				},
			},
			health: {
				hp: 0,
				tempHp: 0,
				hitDiceTotal: 0,
				hitDiceRemaining: 0,
			},
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
	confirmedRaceAndClass = () => {
		try {
			const classInfo = axios.get(this.state.class.url);
			const raceInfo = axios.get(this.state.race.url);
			Promise.all([classInfo, raceInfo]).then(res => {
				res[0].data.level = 1;
				const proficiencies = [];
				proficiencies.push([...res[0].data.proficiencies, ...res[1].data.starting_proficiencies]);
				this.setState({
					class: res[0].data,
					race: res[1].data,
					proficiencies: proficiencies,
				});
				const features = axios.get(
					`http://www.dnd5eapi.co/api/features/${this.state.class.name.toLowerCase()}/level/${
						this.state.class.level
					}`,
				);
				const equipment = axios.get(this.state.class.starting_equipment.url);
				Promise.all([features, equipment]).then(res => {
					const names = res[0].data.results.map(feature => {
						return feature.name;
					});
					const unique = names.filter((name, index) => {
						return names.indexOf(name) >= index;
					});
					this.setState(prevState => ({
						class: {
							...prevState.class,
							features: unique,
						},
						equipment: res[1].data,
					}));
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
	// chooseLevel = e => {
	// 	const level = e.target.value;
	// 	this.setState(prevState => ({
	// 		class: {
	// 			...prevState.class,
	// 			level: level,
	// 		},
	// 	}));
	// };

	render() {
		return (
			<div className="App">
				<h1>DND Character Creator</h1>
				<CharacterCustomizer name={'Class'} onClick={this.handleClick} list={classes} />
				<CharacterCustomizer name={'Race'} onClick={this.handleClick} list={races} />
				<div>
					<button onClick={this.confirmedRaceAndClass}>Confirm Race and Class</button>
				</div>

				<Description descriptors={this.state.description} onChange={this.charDescription} />

				<Abilities onClick={this.getAbilities} abilities={this.state.abilities.initialRolls} />

				<h2>Choose Your Class Proficiencies</h2>
				<Choose choices={this.state.class.proficiency_choices[0]} />
				<h2>Choose Your Race Proficiencies</h2>
				<Choose choices={this.state.race.starting_proficiency_options} />
				<Equipment equipment={this.state.equipment} />
				<h2>Roll for Hit Points</h2>

				{/* <label htmlFor="levelSelect">Choose your Level:</label>
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
				</select> */}
			</div>
		);
	}
}

export default App;

/*
Todo: 
	1) Make a call to get features/traits/abilities based on level of character DONE
	2) Create a Choose Proficiciencies/Skills component
	3) Make a call to get equipment based on class DONE
	4) Create a Choose Equipment Component DONE
	5) Render character sheet on Screen
	6) Add any additional rolls (hit points) to abilities section
	7) Add a Spells page

	Make a Choices Component that works for class skill prof.(DONE), race skill prof (DONE). (DONE), equipment(DONE), abilities
*/
