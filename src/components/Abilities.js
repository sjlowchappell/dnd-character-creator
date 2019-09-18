import React from 'react';

function Abilities({ abilities, onClick }) {
	return (
		<div>
			<h2>Roll for your Abilities:</h2>
			<button onClick={onClick}>Roll a d20</button>
			<ul>
				{abilities.map(ability => {
					return (
						<li>
							{ability}
							{/* Need to include something here such that if one of these options has already been taken, it should be removed from the list */}
							<select>
								<option value="0">Pick Ability</option>
								<option value="1">Strength</option>
								<option value="2">Dexterity</option>
								<option value="3">Constitution</option>
								<option value="4">Intelligence</option>
								<option value="5">Wisdom</option>
								<option value="6">Charisma</option>
							</select>
						</li>
					);
				})}
			</ul>
		</div>
	);
}

export default Abilities;
