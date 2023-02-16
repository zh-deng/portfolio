import { configureStore } from '@reduxjs/toolkit';
import tabtrackerReducer from './tabtracker';

export const store = configureStore({
  reducer: {
    tabtracker: tabtrackerReducer
  }
});
