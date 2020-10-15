import React from 'react';
import style from './Button.module.scss';

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
		className={style[tier]}
	>
		{text}
	</button>
);

export default Button;
