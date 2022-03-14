import { createSlice } from "@reduxjs/toolkit";

const modalSettingState = {
    showSettings: true,
    showEndGame: false,
    showMenu: false,
}

const modalSettingSlice = createSlice({
    name: 'modalSetting',
    modalSettingState,
    reducers: {
        
    }
});