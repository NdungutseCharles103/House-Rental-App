import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";

const store = configureStore({
  reducer: combineReducers({
    user: userSlice,
  }),
});

export type ReduxStates = {
  user: {
    profile: any;
    isLoggedIn: boolean;
    logginData: any;
    isInitialising: boolean;
  };
};

export default store;
