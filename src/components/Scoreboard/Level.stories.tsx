import React from "react";
import {StoryFn, Meta} from "@storybook/react";

import {Level, LevelProps} from "./Level";

export default {
    title: "Scoreboard/Level",
    component: Level,
} as Meta;

const Template: StoryFn<LevelProps> = (args) => <Level {...args} />;

export const LevelExample = Template.bind({});
LevelExample.args = {
    children: ['Easy', 'Medium', 'Hard'],
};