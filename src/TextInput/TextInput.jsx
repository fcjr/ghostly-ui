import React from 'react';
import style from './TextInput.module.scss';

const TextInput = ({
	type = 'text',
	label,
	placeholder,
	value,
	onChange,
	helpText
}) => (
	<div>
		{label && <label>{label}</label>}
		<input
			type={type}
			className={style.input}
			value={value}
			onChange={(e) => onChange && onChange(e.target.value)}
			placeholder={placeholder}
		/>
		{helpText && <div>{helpText}</div>}
	</div>
);

export default TextInput;
