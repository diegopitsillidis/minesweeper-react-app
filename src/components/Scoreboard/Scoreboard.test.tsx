import React from 'react';
import { render } from "@testing-library/react";
import { Scoreboard, ScoreboardProps } from './Scoreboard';

it('Scoreboard renders correctly', () => {
    const args = {
        time: '000',
        levels: ['beginnner', 'intermediate', 'expert'],
        mines: '010'
    } as ScoreboardProps;

    const { asFragment } = render(<Scoreboard {...args} />);

    expect(asFragment()).toMatchSnapshot();
});