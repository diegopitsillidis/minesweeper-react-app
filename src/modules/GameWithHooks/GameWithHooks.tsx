import React, { FC, useState } from 'react' ;

import { GameLevels, LevelNames, GameSettings } from '@/modules/GameSettings';

import { Field, emptyFieldGenerator, CellState } from '@/helpers/Field';
import { Top } from '@/components/Top';
import { Scoreboard } from '@/components/Scoreboard';
import { Grid } from '@/components/Grid/Grid';
import { GameArea, Wrapper, GameOver } from '@/components/Game';

export const GameWithHooks: FC = () => {
    const [level, setLevel] = useState<LevelNames>('beginner');

    const [size, bombs] = GameSettings[level];

    const playerField = emptyFieldGenerator(size, CellState.hidden);

    return (
        <Wrapper>
            <Top feature='Flag' firstAction='Ctrl' secondAction='Click'>
                Minesweeper
            </Top>
            <GameArea>
                <Scoreboard
                    time='0'
                    bombs='10'
                    levels={GameLevels}
                    defaultLevel={level}
                    onChangeLevel={({ target: { value } }) => 
                        setLevel(value as LevelNames)
                    }
                    onReset={() => null}
                />
                <GameOver onClick={() => null} isWin={true} />
                <Grid onClick={() => null} onContextMenu={() => null}>
                    {playerField}
                </Grid>
            </GameArea>
        </Wrapper>
    );
};
