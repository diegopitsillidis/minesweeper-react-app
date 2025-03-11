import React from 'react';
import { render } from "@testing-library/react";
import { Scoreboard, ScoreboardProps } from './Scoreboard';

it('Scoreboard renders correctly', () => {
    const args = {
        time: '000',
        levels: ['beginnner', 'intermediate', 'expert'],
        bombs: '10',
        defaultLevel: 'beginner',               // pass defaultLevel
        onReset: () => null,                   // pass onReset
        onChangeLevel: () => null,  
    } as ScoreboardProps;

    const { asFragment } = render(<Scoreboard {...args} />);

    expect(asFragment()).toMatchSnapshot();
});