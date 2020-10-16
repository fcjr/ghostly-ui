import React from 'react';
import { action } from '@storybook/addon-actions';

import { Input } from './Input';

const onChange = action('change');

export default {
	title: 'forms/Input',
	component: Input,
};

export const Basic = (args) => <Input {...args} />;
Basic.args = {
	label: 'label',
	value: 'value',
};

export const All = () => (
	<form style={{ background: '#EEEEEE', padding: '3em' }}>
		<Input
			id="Placeholder"
			label="Input with placeholder"
			placeholder="Placeholder"
			onChange={onChange}
		/>
		<Input
			id="With-value"
			value="With value"
			label="Input with value"
			onChange={onChange}
		/>
		<Input
			id="Disabled"
			value="Disabled"
			label="Disabled input"
			disabled
			onChange={onChange}
		/>
		<Input
			id="Error"
			label="Input with error"
			placeholder="Error"
			error="An error was detected fix it!"
			onChange={onChange}
		/>
	</form>
);
