import { createSlice } from "@reduxjs/toolkit";

export const tabtrackerSlice = createSlice({
    name: "tabtracker",
    initialState: {
        tabIndex: 1
    },
    reducers: {
        changeIndex: (state, action) => {
            state.tabIndex = action.payload;
        }
    }
});

export const selectTabtracker = state => state.tabtracker;

export const { changeIndex } = tabtrackerSlice.actions;

export default tabtrackerSlice.reducer;