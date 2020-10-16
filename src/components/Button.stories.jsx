import React from 'react';

import { Button } from './Button';

export default {
	title: 'Inputs/Buttons/Button',
	component: Button,
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
	text: 'Primary',
	appearance: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
	text: 'Secondary',
	appearance: 'secondary',
};

export const Alternate = Template.bind({});
Alternate.args = {
	text: 'Alternate',
	appearance: 'alternate',
};
