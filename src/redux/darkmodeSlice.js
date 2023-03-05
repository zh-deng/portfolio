import { createSlice } from "@reduxjs/toolkit";

export const darkmodeSlice = createSlice({
    name: "darkmode",
    initialState: {
        darkmode: false
    },
    reducers: {
        switchDarkmode: (state) => {
            state.darkmode = state.darkmode === false ? true : false;
        }
    }
});

export const selectDarkmode = state => state.darkmode;

export const { switchDarkmode } = darkmodeSlice.actions;

export default darkmodeSlice.reducer;