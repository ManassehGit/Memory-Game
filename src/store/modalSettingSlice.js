import { createSlice } from "@reduxjs/toolkit";

const modalSettingState = {
    showSettings: true,
    showEndGame: false,
    showMenu: false,
}

const modalSettingSlice = createSlice({
    name: 'modalSetting',
    initialState: modalSettingState,
    reducers: {
        switchSettingsView: (state) => {
            state.showSettings = !state.showSettings;
        },
        switchEndGameView: (state) => {
            state.showEndGame = !state.showEndGame;
        },
        switchMenu: (state) => {
            state.showMenu = !state.showMenu;
        }
    }
});

export const {
    switchSettingsView,
    switchEndGameView,
    switchMenu
} = modalSettingSlice.actions

export default modalSettingSlice.reducer;