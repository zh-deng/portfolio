import { createSlice } from "@reduxjs/toolkit";

export const mobileswitchSlice = createSlice({
    name: "mobileswitch",
    initialState: {
        mobile: false
    },
    reducers: {
        switchScreenversion: (state) => {
            state.mobile = state.mobile === false ? true : false;
            state.mobile === false ? document.body.style.overflow="auto" : document.body.style.overflow="hidden";
        }
    }
});

export const selectMobileswitch = state => state.mobileswitch;

export const { switchScreenversion } = mobileswitchSlice.actions;

export default mobileswitchSlice.reducer;