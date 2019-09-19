import React from 'react';
import Choose from './Choose';

function Equipment({ equipment }) {
	const equipmentChoices = [];
	for (let i = 1; i <= equipment.choices_to_make; i++) {
		const currentChoice = `choice_${i}`;
		equipmentChoices.push(
			<div>
				<h3>Choice {i}:</h3>
				<p>
					{equipment[currentChoice].map(choice => {
						return <Choose choices={choice} />;
					})}
				</p>
			</div>,
		);
	}

	return (
		<div>
			<h2>Choose Your Equipment:</h2>
			{equipmentChoices}
		</div>
	);
}

export default Equipment;
