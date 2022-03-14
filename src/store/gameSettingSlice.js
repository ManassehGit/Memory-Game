import {createSlice} from "@reduxjs/toolkit";
import {randomNumber} from '../fxn/random';

const gameSettingState = {
    gridChoice: 4,
    isNumbers: true,
    gameTiles: [],
    numberOfPlayers: 1,
    isEndGame: false,
    activePlayer: 0,
    gridTotalTileNumber: 4 ** 2,
    moves: [],
    pairs: [],
    recentTwoMoves: []
}

const gameSettingSlice = createSlice({
    name: 'gameSetting',
    initialState: gameSettingState,
    reducers: {
        setGameSettings: (state, action) => {
            state.gridChoice = action.payload.gridChoice;
            state.isNumbers = action.payload.isNumbers;
            state.numberOfPlayers = action.payload.numberOfPlayers;
        },
        generateGameElements: (state) => {
            const gridcontentCount = state.gridTileNumber / 2;
            const gridContent = [];

            for(let i=0; i<gridcontentCount; i++){
                let randPos;
                let found = false;
                do{
                    randPos = randomNumber(gridcontentCount);
                    if(!gridContent[randPos]){
                        gridContent[randPos] = {
                            value: i + 1,
                            isVisible: false,
                            isActive: false,
                        }
                        found = true;
                    }
                }while(!found)
            }
        }
    }
});

export const{
    setGameSettings,
    generateGameElements
} = gameSettingSlice.actions;

export default gameSettingSlice.reducer;