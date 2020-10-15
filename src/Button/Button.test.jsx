import React from 'react';
import renderer from 'react-test-renderer';
import Button from './Button';

describe('Button', () => {
	it('renders properly', () => {
		const tree = renderer
			.create(<Button text="Primary" tier="primary" />)
			.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
