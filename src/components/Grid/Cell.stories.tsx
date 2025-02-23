import React from 'react';
import { Meta, StoryFn} from '@storybook/react'

import { Cell, CellProps } from './Cell';


export default{
    title: 'Grid/Cell',
    component: Cell,
} as Meta;

const Template: StoryFn<CellProps> = (args) => <Cell {...args} />;

export const CellClosed = Template.bind({});
CellClosed.args = {
    children: 10,
}

export const CellIsEmpty = Template.bind({});
CellIsEmpty.args = {
    children: 0,
}

export const CellIsBomb = Template.bind({});
CellIsBomb.args = {
    children: 9,
}

export const CellIsFlag = Template.bind({});
CellIsFlag.args = {
    children: 11,
}

export const CellIsWeakFlag = Template.bind({});
CellIsWeakFlag.args = {
    children: 12,
}

export const CellIs1 = Template.bind({});
CellIs1.args = {
    children: 1,
}

export const CellIs3 = Template.bind({});
CellIs3.args = {
    children: 3,
}

export const CellIsWeak5 = Template.bind({});
CellIsWeak5.args = {
    children: 5,
}

export const CellIsWeak8 = Template.bind({});
CellIsWeak8.args = {
    children: 8,
}