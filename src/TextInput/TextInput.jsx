import React from 'react';
import classNames from 'classnames';
import style from './TextInput.module.scss';

const TextInput = ({
	label,
	placeholder,
	value,
	onChange,
	errorText
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

export default TextInput;
