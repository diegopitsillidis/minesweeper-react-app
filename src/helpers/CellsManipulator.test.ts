import { incrementNeighbours, getNeighboursItems, checkItemInField, openCell } from "./CellsManipulator";
import { CellState, Field } from "./Field";

const {empty: e, hidden: h, bomb: b } = CellState;

describe('Check neighbours selectors', () => {
    it('With [0,0] coords', () => {
        expect(getNeighboursItems([0,0])).toStrictEqual({
            top: [-1,0],
            topRight: [-1,1],
            right: [0,1],
            rightBottom: [1,1],
            bottom: [1,0],
            bottomLeft: [1,-1],
            left: [0,-1],
            leftTop: [-1,-1]

        });
    });
    it('With [3,3] coords', () => {
        expect(getNeighboursItems([3,3])).toStrictEqual({
            top: [2,3],
            topRight: [2,4],
            right: [3,4],
            rightBottom: [4,4],
            bottom: [4,3],
            bottomLeft: [4,2],
            left: [3,2],
            leftTop: [2,2]
        });
    });

});

describe('checkItemInField tests', () => {
    describe('Simple cases', () => {
        const field: Field = [[e]];

        it('Out of y range', () => {
            expect(checkItemInField([1, 0], field)).toBe(false);
        });
        it('Out of x range', () => {
            expect(checkItemInField([0, -1], field)).toBe(false);
        });
        it('In x and y range', () => {
            expect(checkItemInField([0, 0], field)).toBe(true);
        });
    });
    describe('Big Fields', () => {
        const field: Field = [
            [e, e, e, e, e],
            [e, e, e, e, e],
            [e, e, e, e, e],
            [e, e, e, e, e],
            [e, e, e, e, e]
        ];

        it('Out of x range', () => {
            expect(checkItemInField([5, 0], field)).toBe(false);
        });
        it('Out of x range with negative index', () => {
            expect(checkItemInField([-1, 0], field)).toBe(false);
        });
        it('Out of y range', () => {
            expect(checkItemInField([0, 5], field)).toBe(false);
        });
        it('In x and y range', () => {
            expect(checkItemInField([3, 4], field)).toBe(true);
        });
    });
});

describe('Check Increment Neighbours', () => {
    describe('Simple cases', () => {
        it('Field with only one item', () => {
            expect(incrementNeighbours([0, 0], [[b]])).toStrictEqual([[b]]);
        });
        it('Field 2x2 with one bomb', () => {
            expect(
                incrementNeighbours(
                    [0, 0], 
                    [
                        [b, e], 
                        [e, e]
                    ]
                )
            ).toStrictEqual([
                [b, 1], 
                [1, 1]
            ]);
        });
        it('Field 2x2 with two bombs', () => {
            expect(
                incrementNeighbours(
                    [0, 0], 
                    [
                        [b, e], 
                        [e, b]
                    ]
                )
            ).toStrictEqual([
                [b, 1], 
                [1, b]
            ]);
        });
    });
    describe('3x3 cases', () => {
        it('Field 3x3 with one centered bomb', () => {
            expect(
                incrementNeighbours(
                    [1, 1], 
                    [
                        [e, e, e], 
                        [e, b, e],
                        [e, e, e]
                    ]
                )
            ).toStrictEqual([
                [1, 1, 1], 
                [1, b, 1],
                [1, 1, 1]
            ]);
        });
        it('Field 3x3 as synthetic case with neighbour cells have reached max possible bombs', () => {
            expect(
                incrementNeighbours(
                    [1, 1], 
                    [
                        [0, 1, b], 
                        [8, b, 1],
                        [8, 8, 8]
                    ]
                )).toStrictEqual([
                    [1, 2, b], 
                    [8, b, 2],
                    [8, 8, 8]

                ]);
        });
    });
    describe('9x9 cases', () => {
        it('Field 9x9 with 7 bombs', () => {
            expect(
                incrementNeighbours(
                    [4, 5], 
                    [
                        [9, 1, 0, 0, 0, 0, 1, 1, 1],
                        [1, 1, 1, 1, 1, 0, 1, 9, 1],
                        [0, 0, 1, 9, 1, 0, 2, 2, 2],
                        [0, 0, 1, 1, 1, 0, 1, 9, 1],
                        [0, 1, 1, 1, 1, 9, 1, 1, 1],
                        [0, 1, 9, 2, 1, 1, 0, 0, 0],
                        [0, 1, 1, 2, 9, 1, 0, 0, 0],
                        [0, 0, 0, 1, 1, 1, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 0, 0],
                    ]
                )
            ).toStrictEqual([
                [9, 1, 0, 0, 0, 0, 1, 1, 1],
                [1, 1, 1, 1, 1, 0, 1, 9, 1],
                [0, 0, 1, 9, 1, 0, 2, 2, 2],
                [0, 0, 1, 1, 2, 1, 2, 9, 1],
                [0, 1, 1, 1, 2, 9, 2, 1, 1],
                [0, 1, 9, 2, 2, 2, 1, 0, 0],
                [0, 1, 1, 2, 9, 1, 0, 0, 0],
                [0, 0, 0, 1, 1, 1, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0],
            ]);
        });
    });
});

describe('Open cell action', () => {
    describe('Simple cases with loose', () => {
        it('Open cell with bomb', () => {
            expect(() =>
                openCell(
                    [1,1],
                    [
                        [h,h],
                        [h,h],
                    ],
                    [
                        [1,1],
                        [1,b],
                    ]
                )
            ).toThrow('Game Over');
        });
    });
    describe('Simple case with number', () => {
        it('Open cell with state == 1', () => {
            const playerField = openCell(
                [1,1],
                [
                    [h,h,h],
                    [h,h,h],
                    [h,h,h],
                ],
                [
                    [1,1,0],
                    [9,1,0],
                    [1,1,0],
                ]
            );
            expect(playerField).toStrictEqual([
                [h,h,h],
                [h,1,h],
                [h,h,h],
            ]);
        });
        it('Open cell with state == 3', () => {
            const playerField = openCell(
                [1,1],
                [
                    [h,h,h],
                    [h,h,h],
                    [h,h,h],
                ],
                [
                    [9,2,0],
                    [9,3,0],
                    [9,2,0],
                ]
            );
            expect(playerField).toStrictEqual([
                [h,h,h],
                [h,3,h],
                [h,h,h],
            ]);
        });
    });
    describe('Simple case with number', () => {
        it('Open empty cell, stimple 3x3 case', () => {
            const playerField = openCell(
                [1,2],
                [
                    [h,h,h],
                    [h,h,h],
                    [h,h,h],
                ],
                [
                    [1,1,0],
                    [9,1,0],
                    [1,1,0],
                ]
            );
            expect(playerField).toStrictEqual([
                [h,1,0],
                [h,1,0],
                [h,1,0],
            ]);
        });
        it('Open empty cell, stimple 5x5 case', () => {
            const playerField = openCell(
                [2,2],
                [
                    [h,h,h,h,h],
                    [h,h,h,h,h],
                    [h,h,h,h,h],
                    [h,h,h,h,h],
                    [h,h,h,h,h],
                ],
                [
                    [9,9,1,1,2],
                    [9,3,1,0,0],
                    [1,1,0,1,1],
                    [1,0,0,1,9],
                    [2,1,0,1,1],
                ]
            );
            expect(playerField).toStrictEqual([
                [h,h,1,1,2],
                [h,3,1,0,0],
                [1,1,0,1,1],
                [1,0,0,1,h],
                [2,1,0,1,h],
            ]);
        });
    });
});