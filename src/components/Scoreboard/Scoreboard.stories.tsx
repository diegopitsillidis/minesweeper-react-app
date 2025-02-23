import React from 'react';
import { Meta, StoryFn} from '@storybook/react';

import { Scoreboard, ScoreboardProps} from './Scoreboard';

export default {
    title: 'Scoreboard/Scoreboard',
    component: Scoreboard
} as Meta;

const Template: StoryFn<ScoreboardProps> = (args) => <Scoreboard {...args} />

export const ScoreboardExample = Template.bind({});
ScoreboardExample.args = {
    time: '000',
    levels: ['beginnner', 'intermediate', 'expert'],
    mines: '010'
};