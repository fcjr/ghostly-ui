import React from 'react';
import PropTypes from 'prop-types';
import style from './Button.module.scss';

const Button = ({
	autofocus,
	disabled,
	name,
	value,
	type,
	text,
	tier,
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

Button.propTypes = {
	/**
	 * Whether the button should be autofocused
	 */
	autofocus: PropTypes.bool,
	/**
	 * Whether or not the button is in disabled state
	 */
	disabled: PropTypes.bool,
	/**
	 * The name attribute to be assigned to button
	 */
	name: PropTypes.string,
	/**
	 * The value attribute to be assigned to button
	 */
	value: PropTypes.string,
	/**
	 * The text shown inside the button
	 */
	text: PropTypes.string.isRequired,
	/**
	 * The type of button
	 */
	type: PropTypes.string,
	/**
	 * Determines button's color tier
	 */
	tier: PropTypes.string.isRequired,
};

Button.defaultProps = {
	autofocus: false,
	disabled: false,
	name: '',
	value: '',
	type: 'button',
};

export default Button;
