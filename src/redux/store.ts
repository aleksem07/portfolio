import { configureStore } from "@reduxjs/toolkit";
import navSlice from "./nav-slice/nav-slice";

export const store = configureStore({
  reducer: {
    navIsOpen: navSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
