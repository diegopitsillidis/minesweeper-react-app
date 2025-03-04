import React from 'react';
import { render } from "@testing-library/react";
import { Level, LevelProps } from './Level';

it('Level renders correctly', () => {
    const args = {
        children: ['Beginner', 'Intermediate', 'Expert'],
    } as LevelProps;

    const { asFragment } = render(<Level {...args} />);

    expect(asFragment()).toMatchSnapshot();
});