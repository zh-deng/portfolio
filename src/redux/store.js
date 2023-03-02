import { configureStore } from '@reduxjs/toolkit';
import tabtrackerReducer from './tabtrackerSlice';
import formtrackerReducer from "./formtrackerSlice";
import mobileswitchReducer from "./mobileswitchSlice";
import projectinfoReducer from "./projectinfoSlice";

export const store = configureStore({
  reducer: {
    tabtracker: tabtrackerReducer,
    formtracker: formtrackerReducer,
    mobileswitch: mobileswitchReducer,
    projectinfo: projectinfoReducer,
  }
});
