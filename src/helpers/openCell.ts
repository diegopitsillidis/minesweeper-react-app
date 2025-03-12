import { CellState, Coords, Field } from "./Field"
import { checkItemInField, getNeighboursItems } from "./CellsManipulator"
import { detectSolvedPuzzle } from "./detectSolvedPuzzle";


/** 
 * Open cell in the player field using game field info
 * @param {Coords} coords
 * @param {Field} playerField
 * @param {Field} gameField
 * @returns {[Field, boolean, number]}
 */

export const openCell = (
    coords: Coords,
    playerField: Field,
    gameField: Field
): [Field, boolean, number] => {
    const {empty, hidden, bomb} = CellState;
    
    const [y, x] = coords;
    const gameCell = gameField[y][x];

    if(gameCell === bomb){
        throw new Error('Game Over');
    };

    if(gameCell === empty){
        playerField[y][x] = gameCell;

        const items = getNeighboursItems(coords);

        for( const [y,x] of Object.values(items)){
            if(checkItemInField([y,x], gameField)){
                const gameCell = gameField[y][x];
                const playerCell = playerField[y][x];

                if(playerCell === hidden && gameCell !== bomb){
                    [playerField] = openCell([y,x], playerField, gameField);
                }
            }
        }
    };

    playerField[y][x] = gameCell;

    const [isSolved, flagCounter] = detectSolvedPuzzle(playerField, gameField)

    return [playerField, isSolved, flagCounter];
};