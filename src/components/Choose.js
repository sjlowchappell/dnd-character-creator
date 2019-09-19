import React from 'react';

function Choose({ choices }) {
	return (
		<div>
			<div>
				<h3>Choose {choices.choose} of the Following:</h3>
				{choices.from.map(choice => {
					return (
						<li>
							<label htmlFor="">{choice.name || `${choice.quantity} ${choice.item.name}`}</label>
							<input type="checkbox" />
						</li>
					);
				})}
			</div>
		</div>
	);
}

export default Choose;
