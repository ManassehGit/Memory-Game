import { configureStore } from "@reduxjs/toolkit";
import modalSetting from "./modalSettingSlice";
import gameSetting from './gameSettingSlice';


export const store = configureStore({
    reducer: {
        game: gameSetting,
        modals: modalSetting

    },
});