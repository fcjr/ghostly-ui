import React from 'react';
import './Button.scss';

const Button = ({
	autofocus = false,
	disabled = false,
	name = '',
	value = '',
	type = 'button',
	text,
	tier = 'primary',
}) => (
	<button
		autoFocus={autofocus}
		type={type}
		disabled={disabled}
		name={name}
		value={value}
		className={`Button__${tier}`}
	>
		{text}
	</button>
);

export default Button;
