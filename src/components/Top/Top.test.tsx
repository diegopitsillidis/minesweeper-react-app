import React from 'react';
import { render } from "@testing-library/react";
import { Top } from './Top';

it('Legend renders correctly', () => {
    const args = {
        children: 'Minesweeper',
        feature: 'Flag',
        firstAction: 'Ctrl',
        secondAction: 'Click'
    }

    const { asFragment } = render(<Top {...args} />);

    expect(asFragment()).toMatchSnapshot();
});