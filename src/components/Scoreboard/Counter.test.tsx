import React from 'react';
import { render } from "@testing-library/react";
import { Counter, CounterProps } from "./Counter";

it('Counter renders correctly', () => {
    const args = {
        children: '010',
    } as CounterProps;

    const { asFragment } = render(<Counter {...args} />);

    expect(asFragment()).toMatchSnapshot();
});