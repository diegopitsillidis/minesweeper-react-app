import React, { FC, useState } from 'react' ;

import { GameLevels, LevelNames, GameSettings } from '@/modules/GameSettings';

import { Field, emptyFieldGenerator, CellState, fieldGenerator, Coords } from '@/helpers/Field';
import { Top } from '@/components/Top';
import { Scoreboard } from '@/components/Scoreboard';
import { Grid } from '@/components/Grid/Grid';
import { GameArea, Wrapper, GameOver } from '@/components/Game';
import { openCell } from '@/helpers/CellsManipulator';

export const GameWithHooks: FC = () => {
    const [level, setLevel] = useState<LevelNames>('beginner');

    const [size, bombs] = GameSettings[level];

    const [playerField, setPlayerField] = useState<Field>(
        emptyFieldGenerator(size, CellState.hidden)
    );
    
    const gameField = fieldGenerator(size, bombs / (size * size));

    const onClick = (coords: Coords)=> {
        const newPlayerField = openCell(coords, playerField, gameField);
        setPlayerField([...newPlayerField]);
    }

    const onChangeLevel = ({
        target: { value: level },
    }: React.ChangeEvent<HTMLSelectElement>) => {
        setLevel(level as LevelNames);
        const [size] = GameSettings[level as LevelNames];

        const newPlayerField = emptyFieldGenerator(size, CellState.hidden);
        setPlayerField([...newPlayerField]);
    };

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
                    onChangeLevel={onChangeLevel}
                    onReset={() => null}
                />
                <GameOver onClick={() => null} isWin={true} />
                <Grid onClick={onClick} onContextMenu={() => null}>
                    {playerField}
                </Grid>
            </GameArea>
        </Wrapper>
    );
};
