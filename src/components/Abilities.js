import React from 'react';

function Abilities({ abilities, onClick }) {
	return (
		<div>
			<h2>Roll for your Abilities:</h2>
			<button onClick={onClick}>Roll a d20</button>
			<ul>
				{abilities.map(ability => {
					return <ul>{ability}</ul>;
				})}
			</ul>
		</div>
	);
}

export default Abilities;
