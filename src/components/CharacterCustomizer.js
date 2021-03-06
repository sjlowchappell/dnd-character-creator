import React from 'react';

function CharacterCustomizer({ name, list, onClick }) {
	return (
		<div className="ClassSelect">
			<h2>Choose a {name}</h2>
			<ul>
				{list.map(listItem => {
					return (
						<li key={listItem.url}>
							<button onClick={onClick} className={name.toLowerCase()} data-url={listItem.url}>
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
