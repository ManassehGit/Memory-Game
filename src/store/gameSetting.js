import {createSlice} from "@reduxjs/toolkit";

const gameSettingState = {
    gridChoice: 4,
    isNumbers: true,
    gameTiles: [],
    numberOfPlayers: 1,
    isEndGame: false,
    activePlayer: 0,
    gridTileNumber: state.gridChoice ** 2;


    
}

const gameSettingSlice = createSlice({
    name: 'gameSettingSlice',
    gameSettingState,
    reducers: {
        setGameSettings: (state, action) => {
            state.gridChoice = action.payload.gridChoice;
            state.isNumbers = action.payload.isNumbers;
            state.numberOfPlayers = action.payload.numberOfPlayers;
        },
        generateGameElements: (state) => {
            const gridcontent = state.gr
        }
    }
});