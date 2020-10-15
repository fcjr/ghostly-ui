import React from 'react';

import TextInput from './TextInput';

export default {
	title: 'Inputs/TextInput',
	component: TextInput,
	argTypes: {
		label: { control: 'text' },
		placeholder: { control: 'text' },
		value: { control: 'text' },
		errorText: { control: 'text' },
		onChange: { action: 'changed' }
	},
};

const Template = (args) => <TextInput {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const WithLabel = Template.bind({});
WithLabel.args = {
	label: 'email',
	placeholder: 'name@example.com',
};

export const Error = Template.bind({});
Error.args = {
	label: 'email',
	placeholder: 'name@example.com',
	errorText: 'Invalid Email',
};
