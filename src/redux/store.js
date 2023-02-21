import { configureStore } from '@reduxjs/toolkit';
import tabtrackerReducer from './tabtrackerSlice';
import formtrackerReducer from "./formtrackerSlice";

export const store = configureStore({
  reducer: {
    tabtracker: tabtrackerReducer,
    formtracker: formtrackerReducer
  }
});
