import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { Legend } from "./Legend";

export default {
    title: 'Top/Legend',
    component: Legend,
} as Meta;

const Template: StoryFn = (args) => <Legend {...args} />;

export const GameLegend = Template.bind({});