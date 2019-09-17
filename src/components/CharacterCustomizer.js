import React from 'react';

function CharacterCustomizer(props) {
	return (
		<div className="ClassSelect">
			<h2>Choose a {props.name}</h2>
			<ul>
				{props.list.map(listItem => {
					return (
						<li>
							<button onClick={props.onClick} className={props.name.toLowerCase()}>
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
