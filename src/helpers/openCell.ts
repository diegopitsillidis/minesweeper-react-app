import { CellState, Coords, Field } from "./Field"
import { checkItemInField, getNeighboursItems } from "./CellsManipulator"

/** 
 * Open cell in the player field using game field info
 * @param {Coords} coords
 * @param {Field} playerField
 * @param {Field} gameField
 * @returns {Field}
 */

export const openCell = (
    coords: Coords,
    playerField: Field,
    gameField: Field
): Field => {
    const {empty, hidden, bomb} = CellState;
    
    const [y, x] = coords;
    const gameCell = gameField[y][x];

    if(gameCell === bomb){
        throw new Error('Game Over');
    };

    if(gameCell === empty){
        playerField[y][x] = gameCell;

        const items = getNeighboursItems(coords);

        for( const coords of Object.values(items)){
            if(checkItemInField(coords, gameField)){
                const [y, x] = coords;

                const gameCell = gameField[y][x];
                const playerCell = playerField[y][x];

                if(gameCell === empty && playerCell === hidden){
                    playerField = openCell(coords, playerField, gameField);
                }

                if(gameCell < bomb){
                    playerField[y][x] = gameCell;

                }
            }
        }
    };

    playerField[y][x] = gameCell;
    return playerField;
};