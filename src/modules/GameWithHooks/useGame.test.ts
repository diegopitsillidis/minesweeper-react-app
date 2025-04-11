
import { useGame } from './useGame';
import { GameLevels, GameSettings } from '../GameSettings';
import { renderHook } from '@testing-library/react';
import { act } from 'react';
import { Field, CellState } from '@/core/Field';

jest.mock('@/core/Field');

const { empty: e, hidden: h, bomb: b, flag: f } = CellState; //flag: f
const [beginner, intermediate, expert] = GameLevels

const flatWithFilter = (field: Field, cond: number) => 
    field.flat().filter((v) => v === cond);

describe('GameWithHooks test cases', () => {
    describe('Render behaiviour', () => {
        it('Render game field by default', () => {
            const { result } = renderHook(useGame);

            const { level, isGameOver, isWin, settings, playerField, gameField } = 
                result.current;

            expect({ level, isGameOver, isWin, settings }).toStrictEqual({
                level: beginner,
                isGameOver: false,
                isWin: false,
                settings: GameSettings.beginner
            });

            expect(playerField).toHaveLength(9);
            //5 because its from the mock
            expect(flatWithFilter(gameField, b)).toHaveLength(5);

            // expect(screen.getAllByRole('cell')).toHaveLength(81);  

            // expect(asFragment()).toMatchSnapshot();
        });
        it('onChange game level handler', () => {
            const { result } = renderHook(useGame);
            const { playerField: beginnerPlayerField, onChangeLevel } = 
                result.current;

            expect(beginnerPlayerField).toHaveLength(9);

            act(() => onChangeLevel(intermediate));

            const { playerField: intermediatePlayerField } = 
                result.current;

            expect(intermediatePlayerField).toHaveLength(16);

            act(() => onChangeLevel(expert));

            const { playerField: expertPlayerField } = 
                result.current;

            expect(expertPlayerField).toHaveLength(22);
        });
    })

    describe('Open cell test cases', () => {
        it('Open empty cell on the beginner level', () => {
            const { result } = renderHook(useGame);

            const { playerField, onClick } = result.current;

            expect(playerField).toHaveLength(9);

            expect(flatWithFilter(playerField, e)).toHaveLength(0);

            act(() => onClick([0, 0]));

            expect(flatWithFilter(playerField, e)).toHaveLength(24);
        });
        it('Context menu handler', () => {
            const { result } = renderHook(useGame);
            const { playerField, onContextMenu } = result.current;
            expect(flatWithFilter(playerField, f)).toHaveLength(0);
            act(() => onContextMenu([0,0]))
            const { playerField: newPlayerField } = result.current;

            expect(flatWithFilter(newPlayerField, f)).toHaveLength(1);
            
        })
        it('Open non-empty cell', () => {
            const { result } = renderHook(useGame);

            const { playerField, onClick } = result.current;

            expect(flatWithFilter(playerField, 1)).toHaveLength(0);

            act(() => onClick([0, 8]));

            const { playerField: newPlayerField } = result.current;

            expect(flatWithFilter(newPlayerField, 1)).toHaveLength(1);
        });

        it('Check open cell when the level is changed', () => {
            const { result } = renderHook(useGame);
            const { playerField, onChangeLevel } = result.current;
            expect(playerField).toHaveLength(9);

            act(() => onChangeLevel(intermediate));
            const { 
                playerField: intermediatePlayerField,
                onClick: onClickIntermediate
            } = result.current;
            act(() => onClickIntermediate([15,15]));
            expect(intermediatePlayerField).toHaveLength(16);
            expect(flatWithFilter(intermediatePlayerField, e)).toHaveLength(144);

            act(() => onChangeLevel(expert));
            const { 
                playerField: expertPlayerField,
                onClick: onClickExpert
            } = result.current;
            act(() => onClickExpert([21,0]));
            expect(expertPlayerField).toHaveLength(22);
            expect(flatWithFilter(expertPlayerField, e)).toHaveLength(1);
            expect(flatWithFilter(expertPlayerField, 1)).toHaveLength(2);
            expect(flatWithFilter(expertPlayerField, 2)).toHaveLength(1);
        })

        it('onReset game handler', () => {
            const { result } = renderHook(useGame);
            const { playerField, onClick, onReset, onContextMenu } = result.current;
            
            expect(playerField).toHaveLength(9);

            act(() => onClick([5,0]));
            act(() => onContextMenu([8,8]))
            expect(flatWithFilter(playerField, 1)).toHaveLength(1);

            act(() => onClick([6,0]));
            expect(flatWithFilter(playerField, 1)).toHaveLength(2);

            act(onReset);
            const { 
                playerField: finalPlayerField,
                isWin,
                isGameStarted,
                isGameOver,
                gameField,
                flagCounter
            } = result.current;
            
            expect(isWin).toBe(false);
            expect(isGameOver).toBe(false);
            expect(isGameStarted).toBe(false);
            expect(flagCounter).toBe(0);
            expect(flatWithFilter(finalPlayerField, 1)).toHaveLength(0);
            expect(flatWithFilter(finalPlayerField, h)).toHaveLength(81);
            expect(flatWithFilter(gameField, b)).toHaveLength(5);
        })

        describe('Game over behavior', () => {
            it('Player lose the game', () => {
                jest.useFakeTimers();
                const { result } = renderHook(useGame);
                const { playerField, onClick } = result.current;

                act(() => onClick([0, 8]));

                const timeMustPass = 5;

                for (let i = 0; i < timeMustPass; i++) {
                    act(() => {
                        jest.advanceTimersByTime(1000);
                    })
                }

                expect(result.current.time).toBe(5);

                expect(flatWithFilter(playerField, 1)).toHaveLength(1);

                act(() => onClick([0, 0]));
                expect(flatWithFilter(playerField, e)).toHaveLength(24);

                act(() => onClick([0, 7]));

                for (let i = 0; i < timeMustPass; i++) {
                    act(() => {
                        jest.advanceTimersByTime(1000);
                    })
                }

                const {
                    isWin,
                    isGameOver,
                    time,
                    playerField: newPlayerField,
                    onReset
                } = result.current;

                expect(time).toBe(5);
                expect(isGameOver).toBe(true);
                expect(isWin).toBe(false);
                expect(flatWithFilter(newPlayerField, h)).toHaveLength(0);
                expect(flatWithFilter(newPlayerField, e)).toHaveLength(45);
                expect(flatWithFilter(newPlayerField, 1)).toHaveLength(25);
                expect(flatWithFilter(newPlayerField, 2)).toHaveLength(6);

                act(onReset);
                const { playerField: latestPlayerField } = result.current;
                expect(flatWithFilter(latestPlayerField, h)).toHaveLength(81);
            });
            it('Player win the game when opening last cell', () => {
                const { result } = renderHook(useGame);
                const { gameField, onClick, onContextMenu } = result.current;

                for(const y of gameField.keys()) {
                    for (const x of gameField[y].keys()) {
                        const gameCell = gameField[y][x];

                        act(() => {
                            if(gameCell === b) {
                                onContextMenu([y, x])
                            }
                        });
                    }
                }

                for(const y of gameField.keys()) {
                    for (const x of gameField[y].keys()) {
                        const gameCell = gameField[y][x];

                        act(() => {
                            if(gameCell !== b) {
                                onClick([y,x])
                            }
                        });
                    }
                }

                const {isGameOver, isWin} = result.current;

                expect(isWin).toBe(true);
                expect(isGameOver).toBe(true);
            });
            it('Player win the game when flagging last cell', () => {
                const { result } = renderHook(useGame);
                const { gameField, onClick, onContextMenu } = result.current;

                for(const y of gameField.keys()) {
                    for (const x of gameField[y].keys()) {
                        const gameCell = gameField[y][x];
                        act(() => {
                            if(gameCell !== b) {
                                onClick([y, x])
                            }
                        });
                    }
                }

                for(const y of gameField.keys()) {
                    for (const x of gameField[y].keys()) {
                        const gameCell = gameField[y][x];
                        act(() => {
                            if(gameCell === b) {
                                onContextMenu([y,x])
                            }
                        });
                    }
                }

                const {isGameOver, isWin} = result.current;

                expect(isWin).toBe(true);
                expect(isGameOver).toBe(true);
            });
        });
        describe('Scoreboard behavior - timer and bomb counter', () => {
            it('Time should start by clicking a cell', () => {
                jest.useFakeTimers();
                const { result } = renderHook(useGame);
                const timeMustPass = 5;

                for(let i = 0; i < timeMustPass; i++) {
                    act(() => {
                        jest.advanceTimersByTime(1000);
                    });
                }

                expect(result.current.time).toBe(0);

                act(()=> result.current.onClick([0,0]));

                for(let i = 0; i < timeMustPass; i++) {
                    act(() => {
                        jest.advanceTimersByTime(1000);
                    });
                }

                expect(result.current.time).toBe(5);
            });
            it('Timer should start by flagging a cell', () => {
                jest.useFakeTimers();
                const { result } = renderHook(useGame);
                const timeMustPass = 5;

                for(let i = 0; i < timeMustPass; i++) {
                    act(() => {
                        jest.advanceTimersByTime(1000);
                    });
                }

                expect(result.current.time).toBe(0);
                act(()=> result.current.onContextMenu([0,0]));

                for(let i = 0; i < timeMustPass; i++) {
                    act(() => {
                        jest.advanceTimersByTime(1000);
                    });
                }

                expect(result.current.time).toBe(timeMustPass);
            });
            it('Timer should reset value when onReset is called', () => {
                jest.useFakeTimers();
                const { result } = renderHook(useGame);
                const timeMustPass = 5;

                for(let i = 0; i < timeMustPass; i++) {
                    act(() => {
                        jest.advanceTimersByTime(1000);
                    });
                }

                expect(result.current.time).toBe(0);
                act(()=> result.current.onContextMenu([0,0]));

                for(let i = 0; i < timeMustPass; i++) {
                    act(() => {
                        jest.advanceTimersByTime(1000);
                    });
                }

                expect(result.current.time).toBe(timeMustPass);
                act(result.current.onReset);
                expect(result.current.time).toBe(0);
            });
            it('flagCounter counter increase when onContextMenu calls', () => {
                const { result } = renderHook(useGame);
                act(() => result.current.onContextMenu([0, 0]))
                expect(result.current.flagCounter).toBe(1);
            });
            it('flagCounter counter should stop when flagCounter > bombs', () => {
                const { result } = renderHook(useGame);
                for( let y = 0; y < 3; y++) {
                    for (let x = 0; x < 4; x++) {
                        act(() => result.current.onContextMenu([y, x]))
                    }
                }
                expect(result.current.flagCounter).toBe(10);
            });
        });
    })
});