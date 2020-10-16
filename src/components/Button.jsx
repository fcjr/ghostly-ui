import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import { color, typography, spacing } from './shared/styles';

const StyledButton = styled.button`
	width: 184px;
	height: 50px;
	border: none;
	border-radius: ${spacing.borderRadius}px;
	font-family: ${typography.type.primary};
  	font-size: ${typography.size.p}px;
  	font-weight: ${typography.weight.regular};
	color: #FFFFFF;

	${(props) => props.appearance === 'primary' && css`
		background-image: linear-gradient(105deg, ${color.gradientleft} 3%, ${color.gradientright} 100%);
		&:hover {
			background-image: none;
			background-color: ${color.darkblue};
		}
		&:disabled {
			background-image: none;
			background-color: rgba(43, 89, 147, 0.5);
		}
	`}

	${(props) => props.appearance === 'secondary' && css`
		background-color: ${color.primary};
		&:hover {
			background-color: #0078ca;
		}
		&:disabled {
			opacity: .5;
			background-color: #7fbce5;
		}
	`}

	${(props) => props.appearance === 'alternate' && css`
		color: ${color.dark};
		border: solid 2px  ${color.dark};
		background-color: #FFFFFF;
		&:hover, :active {
			background-color: ${color.primary};
		}
		&:disabled {
			background-color: #FFFFFF;
			opacity: .5;
		}
`}
`;

export const Button = ({
	className,
	autofocus,
	disabled,
	name,
	value,
	type,
	text,
	appearance,
	...props
}) => (
	<StyledButton
		className={className}
		autoFocus={autofocus}
		type={type}
		disabled={disabled}
		name={name}
		value={value}
		appearance={appearance}
		{...props}
	>
		{text}
	</StyledButton>
);

Button.propTypes = {
	className: PropTypes.string,
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
	appearance: PropTypes.oneOf(['primary', 'secondary', 'alternate']).isRequired,
	/**
	 *  called on click
	*/
	onClick: PropTypes.func.isRequired
};

Button.defaultProps = {
	className: null,
	autofocus: false,
	disabled: false,
	name: '',
	value: '',
	type: 'button',
};
