import React from 'react';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import { GameWithHooks } from './GameWithHooks';

describe('GameWithHooks test cases', () => {
    describe('Render behaiviour', () => {
        it('Render game field by default', () => {
            const { asFragment } = render(<GameWithHooks />);

            expect(screen.getAllByRole('cell')).toHaveLength(81);  

            expect(asFragment()).toMatchSnapshot();
        });
        it('onChange game level handler', () => {
            render(<GameWithHooks />);

            expect(screen.getAllByRole('cell')).toHaveLength(81);  

            userEvent.selectOptions(screen.getByRole('combobox'), 'intermediate');

            expect(screen.getAllByRole('cell')).toHaveLength(256);

            userEvent.selectOptions(screen.getByRole('combobox'), 'expert');
            
            expect(screen.getAllByRole('cell')).toHaveLength(484);
        });
    })
});