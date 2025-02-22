import React from "react";
import { StoryFn, Meta } from '@storybook/react';

import { Top, TopComponentType } from './Top';

export default {
    title: 'Top/Top',
    component: Top,
} as Meta;

const Template: StoryFn<TopComponentType> = (args) => <Top {...args} />;

export const TopPanel = Template.bind({});
TopPanel.args = {
    children: 'Minesweeper',
    feature: 'Flag',
    firstAction: 'Ctrl',
    secondAction: 'Click'
}