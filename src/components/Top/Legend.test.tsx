import React from 'react';
import { render } from "@testing-library/react";
import { Legend } from './Legend';

it('Legend renders correctly', () => {
    const args = {
        feature: 'Flag',
        firstAction: 'Right Click',
    }
    const { asFragment } = render(<Legend {...args} />);

    expect(asFragment()).toMatchSnapshot();
});