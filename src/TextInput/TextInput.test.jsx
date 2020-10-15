import React from 'react';
import renderer from 'react-test-renderer';
import TextInput from './TextInput';

describe('TextInput', () => {
	it('renders properly', () => {
		const tree = renderer
			.create(<TextInput label="Email" placeholder="name@example.com" onChange={() => {}} />)
			.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
