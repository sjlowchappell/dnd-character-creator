import React from 'react';

function Description({ descriptors, onChange }) {
	return (
		<div>
			<h2>Describe Your Character:</h2>
			{descriptors.map((item, index) => {
				return (
					<div data-index={index}>
						<label htmlFor={item.descriptor}>{item.descriptor}</label>
						<input onChange={onChange} type="text" id={item.descriptor} />
					</div>
				);
			})}
		</div>
	);
}

export default Description;
