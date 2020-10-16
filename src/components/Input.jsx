import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import { color, typography, spacing } from './shared/styles';

const Label = styled.label`
	display: flex;
	color: ${color.dark};
	font-size: ${typography.size.s}px;
	text-transform: uppercase;
`;

const InputText = styled.input.attrs({ type: 'text' })`
	display: flex;
	background-color: #FFFFFF;
	font-size: ${typography.size.h5}px;
	border: 1px solid ${color.dark};
	border-radius: ${spacing.borderRadius}px;
	padding: 0 ${spacing.padding.small}px;
	height: 30px;
	${(props) => props.error !== null && css`
			border: 1px solid ${color.red};
	`}

	::placeholder {
		color: ${color.light};
	}

	&:focus {
		outline: none;
		border: 1px solid ${color.primary};
		${(props) => props.error !== null && css`
			border: 1px solid ${color.red};
		`}
	}
`;

const Error = styled.div`
	font-size: ${typography.size.s}px;
	display: flex;
	color: ${color.red};
`;

const InputContainer = styled.div`
	font-family: ${typography.type.primary};
	display: flex;
	flex-direction: column;
`;

export const Input = ({
	id,
	value,
	label,
	error,
	className,
	focused,
	...props
}) => {
	const errorId = `${id}-error`;

	return (
		<InputContainer className={className}>
			<Label htmlFor={id}>
				{label}
			</Label>
			<InputText
				id={id}
				value={value}
				error={error}
				{...props}
			/>
			{error && <Error id={errorId}>{error}</Error>}
		</InputContainer>
	);
};

Input.propTypes = {
	id: PropTypes.string.isRequired,
	value: PropTypes.string,
	label: PropTypes.string.isRequired,
	error: PropTypes.string,
	className: PropTypes.string,
	focused: PropTypes.bool,
};

Input.defaultProps = {
	value: '',
	error: null,
	className: null,
	focused: false,
};
