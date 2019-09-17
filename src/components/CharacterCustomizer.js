import React from 'react';

function CharacterCustomizer({ name, list, onClick }) {
	return (
		<div className="ClassSelect">
			<h2>Choose a {name}</h2>
			<ul>
				{list.map(listItem => {
					return (
						<li>
							<button onClick={onClick} className={name.toLowerCase()}>
								{listItem.name}
							</button>
						</li>
					);
				})}
			</ul>
		</div>
	);
}
export default CharacterCustomizer;
