import { createSlice } from "@reduxjs/toolkit";

export const formtrackerSlice = createSlice({
    name: "formtracker",
    initialState: {
        firstName: "",
        lastName: "",
        email: "",
        message: ""
    },
    reducers: {
        updateFirstName: (state, action) => {
            state.firstName = action.payload;
        },
        updateLastName: (state, action) => {
            state.lastName = action.payload;
        },
        updateEmail: (state, action) => {
            state.email = action.payload;
        },
        updateMessage: (state, action) => {
            state.message = action.payload;
        },
        resetForm: (state) => {
            state.firstName = "";
            state.lastName = "";
            state.email = "";
            state.message = "";
        }
    }
});

export const { updateFirstName, updateLastName, updateEmail, updateMessage, resetForm } = formtrackerSlice.actions;

export default formtrackerSlice.reducer;