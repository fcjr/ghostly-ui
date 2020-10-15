import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import style from './TextInput.module.scss';

/**
 * Component for accepting text input from a user.
 */
const TextInput = ({
	label,
	placeholder,
	value,
	errorText,
	onChange
}) => {
	const inputClassnames = classNames(
		style.input,
		{
			[style.error]: errorText
		}
	);
	return (
		<div className={style.container}>
			{label && <label className={style.label}>{label}</label>}
			<input
				type="text"
				className={inputClassnames}
				value={value}
				onChange={(e) => onChange && onChange(e.target.value)}
				placeholder={placeholder}
			/>
			{errorText && <div className={style.errorText}>{errorText}</div>}
		</div>
	);
};

TextInput.propTypes = {
	/**
	 * The input's display label
	 */
	label: PropTypes.string,
	/**
	 * The input's placeholder text
	 */
	placeholder: PropTypes.string,
	/**
	 * The input's current value
	 */
	value: PropTypes.string,
	/**
	 * The error text to display
	 */
	errorText: PropTypes.string,
	/**
	 * Called on value change
	 */
	onChange: PropTypes.func.isRequired,
};

TextInput.defaultProps = {
	label: '',
	placeholder: '',
	value: '',
	errorText: '',
};

export default TextInput;
