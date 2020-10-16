import React from 'react';
import renderer from 'react-test-renderer';
import { Button } from './Button';

describe('Button', () => {
	it('renders properly', () => {
		const tree = renderer
			.create(<Button text="Primary" appearance="primary" onClick={() => {}} />)
			.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
