import React from 'react';
import { StoryFn, Meta} from '@storybook/react'
import { Grid, GridProps } from './Grid';


export default {
    title: 'Grid/Grid',
    component: Grid,
} as Meta;

const Template: StoryFn<GridProps> =  (args) => <Grid {...args} />

export const GridExample = Template.bind({});
GridExample.args = {
    children: [
        [9,1, 0],
        [1,1, 1],
        [10,10, 1],
    ],
    onClick(coords) {
        console.log(coords)
    },
}