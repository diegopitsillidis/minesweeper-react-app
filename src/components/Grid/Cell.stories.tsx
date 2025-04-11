import React from 'react';
import { StoryFn, Meta} from '@storybook/react'

import { Cell, CellProps } from './Cell';
import { Coords } from '@/core/Field';


export default {
    title: 'Grid/Cell',
    component: Cell,
    args: {
        coords: [1,1]
    }
} as Meta;

const Template: StoryFn<CellProps> = (args) => <Cell {...args} />;

export const CellClosed = Template.bind({});
CellClosed.args = {
    children: 10,
    onClick: (coords: Coords) => console.log('Cell clicked', coords),
    onContextMenu: (coords: Coords) => console.log('Context menu', coords),
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

export const CellWith1 = Template.bind({});
CellWith1.args = {
    children: 1,
}

export const CellWith3 = Template.bind({});
CellWith3.args = {
    children: 3,
}

export const CellWith5 = Template.bind({});
CellWith5.args = {
    children: 5,
}

export const CellWith8 = Template.bind({});
CellWith8.args = {
    children: 8,
}