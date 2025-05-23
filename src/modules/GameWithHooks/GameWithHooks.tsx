import React, { FC } from 'react' ;

import { GameLevels, LevelNames } from '@/modules/GameSettings';

import { Top } from '@/components/Top';
import { Scoreboard } from '@/components/Scoreboard';
import { Grid } from '@/components/Grid/Grid';
import { GameArea, Wrapper, GameOver } from '@/components/Game';
import { useGame } from './useGame';

export const GameWithHooks: FC = () => {
    const {
        level,
        time,
        isGameOver,
        isWin,
        settings,
        playerField,
        flagCounter,
        onClick,
        onContextMenu,
        onChangeLevel,
        onReset,
    } = useGame();

    const [, bombs] = settings;

    return (
        <Wrapper>
            <Top feature='Flag' firstAction='Right Click'>
                Minesweeper
            </Top>
            <GameArea>
                <Scoreboard
                    time={String(time)}
                    bombs={String(bombs - flagCounter)}
                    levels={GameLevels}
                    defaultLevel={level}
                    onChangeLevel={({
                        target: {value: level},
                    }:React.ChangeEvent<HTMLSelectElement>) => 
                        onChangeLevel(level as LevelNames)
                    }
                    onReset={onReset}
                />
                {isGameOver && <GameOver onClick={onReset} isWin={isWin} />}
                <Grid onClick={onClick} onContextMenu={onContextMenu}>
                    {playerField}
                </Grid>
            </GameArea>
        </Wrapper>
    );
};