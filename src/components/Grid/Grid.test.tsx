import React from 'react';
import { render } from "@testing-library/react";
import { Grid, GridProps } from './Grid';

it('Grid renders correctly', () => {
    const args = {
        children: [
            [9,1, 0],
            [1,1, 1],
            [10,10, 1],
        ],
        onClick(coords) {
            console.log(coords)
        },
    } as GridProps;

    const { asFragment } = render(<Grid {...args} />);

    expect(asFragment()).toMatchSnapshot();
});