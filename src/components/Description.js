import React from 'react';

function Description({ title, onChange, index }) {
	return (
		<div data-index={index}>
			<label htmlFor={title}>{title}</label>
			<input onChange={onChange} type="text" id={title} />
		</div>
	);
}

export default Description;
