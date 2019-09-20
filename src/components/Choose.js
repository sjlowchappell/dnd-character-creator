import React from 'react';

function Choose({ choices }) {
	return (
		<div>
			<h3>Choose {choices.choose} of the Following:</h3>
			<select>
				{choices.from.map(choice => {
					return <option>{choice.name || `${choice.quantity} ${choice.item.name}`}</option>;
				})}
			</select>
		</div>
	);
}

export default Choose;
