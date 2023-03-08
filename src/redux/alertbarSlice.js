import { createSlice } from "@reduxjs/toolkit";

export const alertbarSlice = createSlice({
    name: "alertbar",
    initialState: {
        alert: false
    },
    reducers: {
        switchAlert: (state) => {
            state.alert = state.alert === false ? true : false;
        }
    }
});

export const selectAlert = state => state.alertbar;

export const { switchAlert } = alertbarSlice.actions;

export default alertbarSlice.reducer;