import React from 'react';
import { render } from "@testing-library/react";
import { GameName } from './GameName';

it('GameName renders correctly', () => {
    const { asFragment } = render(<GameName>Minesweeper</GameName>);

    expect(asFragment()).toMatchSnapshot();
});