import {createSlice} from "@reduxjs/toolkit";

const gameSettingState = {
    gridChoice: 4,
    isNumbers: true,
    gameTiles: [],
    numberOfPlayers: 1,
    
    
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
        generateGameElements: (state) => {}
    }
});