import React from 'react';
import { render, screen } from "@testing-library/react";
import { GameWithHooks } from './GameWithHooks';
import userEvent from '@testing-library/user-event';
//import { useGame } from './useGame';

//const { empty: e, hidden: h, bomb: b, flag: f } = CellState;

//jest.mock('@/helpers/Field');

const mockOnClick = jest.fn();
const mockOnChangeLevel = jest.fn();
const mockOnReset = jest.fn();

jest.mock('./useGame', () => ({
    __esModule: true,
    useGame: () => ({
        level: 'beginner',
        isGameOver: true,
        isWin: false,
        settings: [9, 10],
        playerField: [
            [10, 10],
            [10, 10]
        ],
        onClick: mockOnClick,
        onChangeLevel: mockOnChangeLevel,
        onReset: mockOnReset
    })
}));

beforeEach(() => {
    jest.clearAllMocks();
});

describe('GameWithHooks test cases', () => {
    it('Render game field by default', () => {
        const { asFragment } = render(<GameWithHooks />);
        expect(asFragment()).toMatchSnapshot();
    });
    it('Cell click works fine', () => {
        render(<GameWithHooks />);
        userEvent.click(screen.getByTestId('0,0'));
        expect(mockOnClick).toHaveBeenCalled();
    });
    
    it('Reset handler works fine', () => {
        render(<GameWithHooks />);
        userEvent.click(screen.getByRole('button'));
        expect(mockOnReset).toHaveBeenCalled();
    });
    it('Change level works fine', () => {
        render(<GameWithHooks />);
        userEvent.selectOptions(screen.getByRole('combobox'), 'intermediate');
        expect(mockOnChangeLevel).toHaveBeenCalled();
    });
    it('Game over resets the game state', () => {
        render(<GameWithHooks />);
        userEvent.click(screen.getByText('🙁'));
        expect(mockOnReset).toHaveBeenCalled();
    });
});