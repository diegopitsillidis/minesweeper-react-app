import { CellState, Coords, Field } from "./Field"
import { checkItemInField, getNeighboursItems } from "./CellsManipulator"
import { detectSolvedPuzzle } from "./detectSolvedPuzzle";


/** 
 * Open cell in the player field using game field info
 * @param {Coords} coords
 * @param {Field} playerField
 * @param {Field} gameField
 * @returns {[Field, boolean]}
 */

export const openCell = (
    coords: Coords,
    playerField: Field,
    gameField: Field
): [Field, boolean] => {
    const {empty, hidden, bomb, weakFlag, flag} = CellState;
    
    const [y, x] = coords;
    const gameCell = gameField[y][x];
    const playerCell = playerField[y][x];

    if(gameCell === bomb){
        throw new Error('Game Over');
    };

    if(playerCell === flag) {
        return [playerField, false]
    }

    playerField[y][x] = gameCell;

    if(gameCell === empty && [hidden, weakFlag].includes(playerCell)){
        const items = getNeighboursItems(coords);

        for( const [y,x] of Object.values(items)){
            if(checkItemInField([y,x], gameField)){
                [playerField] = openCell([y,x], playerField, gameField);

            }
        }
    };

    const [isSolved] = detectSolvedPuzzle(playerField, gameField)

    return [playerField, isSolved];
};