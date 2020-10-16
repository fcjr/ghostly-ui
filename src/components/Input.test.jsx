import React from 'react';
import renderer from 'react-test-renderer';
import { Input } from './Input';

describe('Input', () => {
	it('renders properly', () => {
		const tree = renderer
			.create(<Input id="Email" label="Email" placeholder="name@example.com" onChange={() => {}} />)
			.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
