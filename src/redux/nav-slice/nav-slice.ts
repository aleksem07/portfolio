import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type NavStateType = {
  isOpen: boolean;
};

const initialState: NavStateType = {
  isOpen: false,
};

const navIsOpenSlice = createSlice({
  name: "navIsOpen",
  initialState,
  reducers: {
    setIsOpenNav: (state, action: PayloadAction<boolean>) => {
      state.isOpen = action.payload;
    },
  },
});

export const { setIsOpenNav } = navIsOpenSlice.actions;
export default navIsOpenSlice.reducer;
