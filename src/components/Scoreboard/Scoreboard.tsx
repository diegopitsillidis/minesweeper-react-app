import React, { ChangeEvent, FC } from "react";
import styled from '@emotion/styled';

import { Counter } from './Counter';
import { Level } from './Level';
import { Reset } from './Reset';
import { LevelNames } from "@/modules/GameSettings";

export interface ScoreboardProps {
    /**
     * Timer
     */
    time: string;
    /**
     * Possible game scenarios
     */
    levels: string[];
    /**
     * Bombs in the field
     */
    bombs: string;
    /**
     * Default level
     */
    defaultLevel: LevelNames;
    /**
     * Action handler when the GameReset button is clicked
     */
    onReset: () => void;
    /**
     * Action handler when the level is changed
     */
    onChangeLevel: (event: ChangeEvent<HTMLSelectElement>) => void;
    
}

export const Scoreboard: FC<ScoreboardProps> = ({
    time, 
    levels, 
    bombs, 
    defaultLevel, 
    onReset, 
    onChangeLevel: onChange
}) => (
    <Wrapper>
        <Counter>{time}</Counter>
        <Level onChange={onChange} value={defaultLevel}>
            {levels}
        </Level>
        <Reset onReset={onReset}/>
        <Counter>{bombs}</Counter>
    </Wrapper>
);

const Wrapper = styled.div`
    display: flex;
    width: max-content;
    padding-bottom: 2vw;
    justify-content: space-between;
`;