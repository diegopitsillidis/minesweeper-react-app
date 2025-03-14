
import { CellState, Field } from "@/helpers/Field";
import { setFlag } from "./setFlag";

const { empty: e, hidden: h, bomb: b, flag: f, weakFlag: w} = CellState

describe('Set flag action', () => {
    describe('Set flag to the cell check', () => {
        it('Set flag to non-hidden cell should be ignored', () => {
            const gameField: Field = [
                [1,1,e],
                [b,1,e],
                [1,1,e]
            ];
            const playerField: Field = [
                [1,h,h],
                [h,h,h],
                [h,h,h]
            ];

            const [newPlayerField] = setFlag([0,0], playerField, gameField, 0, 3);

            expect(newPlayerField).toStrictEqual([
                [1,h,h],
                [h,h,h],
                [h,h,h]
            ]);
        })
        it('Set flag action, simple 3x3 case', () => {
            const gameField: Field = [
                [1,1,e],
                [b,1,e],
                [1,1,e]
            ];
            const playerField: Field = [
                [h,h,h],
                [h,h,h],
                [h,h,h]
            ];

            const [playerFieldAfterFirstClick] = setFlag(
                [0,0], playerField, gameField, 0, 3
            );

            expect(playerFieldAfterFirstClick).toStrictEqual([
                [f, h, h],
                [h, h, h],
                [h, h, h]
            ]);

            const [playerFieldAfterSecondClick] = setFlag(
                [0,0], playerField, gameField, 0, 3
            );

            expect(playerFieldAfterSecondClick).toStrictEqual([
                [w, h, h],
                [h, h, h],
                [h, h, h]
            ]);

            const [playerFieldAfterThirdClick] = setFlag(
                [0,0], playerField, gameField, 0, 3
            );

            expect(playerFieldAfterThirdClick).toStrictEqual([
                [h, h, h],
                [h, h, h],
                [h, h, h]
            ]);
        });
    });
    describe('Detect win state', () => {
        it('5x5 solved case', () => {
            const [playerField, isSolved, flagCounter] = setFlag(
                [1,0],
                [
                    [f,f,1,1,2],
                    [h,3,1,0,0],
                    [1,1,0,1,1],
                    [1,0,0,1,f],
                    [2,1,0,1,1]
                ],
                [
                    [9,9,1,1,2],
                    [9,3,1,0,0],
                    [1,1,0,1,1],
                    [1,0,0,1,9],
                    [2,1,0,1,1]
                ],
                3,
                5
            );
    
            expect(flagCounter).toBe(4);
            expect(isSolved).toBe(true);
            expect(playerField).toStrictEqual([
                [f,f,1,1,2],
                [f,3,1,0,0],
                [1,1,0,1,1],
                [1,0,0,1,f],
                [2,1,0,1,1]
            ]);
        });
    });

    describe('Restrict flagCounter by the number of bombs on the field', () => {
        it('Restriction on the 3x3 field', () => {
            const gameField: Field = [
                [1,2,1],
                [b,2,b],
                [1,2,1]
            ];
            const playerField: Field = [
                [f,h,h],
                [h,h,h],
                [f,h,h]
            ];

            const [newPlayerField] = setFlag([1,1], playerField, gameField, 2, 2)

            expect(newPlayerField).toStrictEqual([
                [f,h,h],
                [h,h,h],
                [f,h,h]
            ]);
        });
        it('Still can switch flag from hard to weak', () => {
            const gameField: Field = [
                [1,2,1],
                [b,2,b],
                [1,2,1]
            ];
            const playerField: Field = [
                [f,h,h],
                [h,h,h],
                [f,h,h]
            ];

            const [newPlayerField] = setFlag([0,0], playerField, gameField, 2, 2)

            expect(newPlayerField).toStrictEqual([
                [w,h,h],
                [h,h,h],
                [f,h,h]
            ]);
        });
        it('Cant add new flag even if flags are weak', () => {
            const gameField: Field = [
                [1,2,1],
                [b,2,b],
                [1,2,1]
            ];
            const playerField: Field = [
                [w,h,h],
                [h,h,h],
                [w,h,h]
            ];

            const [newPlayerField] = setFlag([1,1], playerField, gameField, 2, 2)

            expect(newPlayerField).toStrictEqual([
                [w,h,h],
                [h,h,h],
                [w,h,h]
            ]);
        });
        it('Can set the new flag after dropping prev', () => {
            const gameField: Field = [
                [1,2,1],
                [b,2,b],
                [1,2,1]
            ];
            const playerField: Field = [
                [f,h,h],
                [h,h,h],
                [f,h,h]
            ];

            setFlag([0,0], playerField, gameField, 2, 2);

            const result = setFlag([0,0], playerField, gameField, 2, 2)

            expect(result).toStrictEqual([
                [
                    [h,h,h],
                    [h,h,h],
                    [f,h,h]
                ],
                false, 
                1
            ]);
            // expect(isSolved).toBe(false);
            // expect(flagCounter).toBe(1);
            // expect(newPlayerField).toStrictEqual([
            //     [h,h,h],
            //     [h,h,h],
            //     [f,h,h]
            // ]);

            const result2 = setFlag([0,0], playerField, gameField, 1, 2)

            expect(result2).toStrictEqual([
                [
                    [f,h,h],
                    [h,h,h],
                    [f,h,h]
                ],
                false,
                2
            ]);
            // expect(isSolved2).toBe(false);
            // expect(flagCounter2).toBe(2);
            // expect(newPlayerField2).toStrictEqual([
            //     [f,h,h],
            //     [h,h,h],
            //     [f,h,h]
            // ]);
        });
    });
})