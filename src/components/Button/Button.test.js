import React from 'react';
import Button from './Button';
import TestRenderer from 'react-test-renderer';

/**
 * Basic snapshot test of button
 */
test("renders correctly", () => {

    const button = TestRenderer.create(<Button>Hello world</Button>).toJSON();
    expect(button).toMatchSnapshot();
});