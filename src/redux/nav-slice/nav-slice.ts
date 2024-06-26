import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type NavStateType = {
  value: boolean;
};

const initialState: NavStateType = {
  value: false,
};

const navIsOpenSlice = createSlice({
  name: "navIsOpen",
  initialState,
  reducers: {
    setIsOpenNav: (state, action: PayloadAction<boolean>) => {
      state.value = action.payload;
    },
  },
});

export const { setIsOpenNav } = navIsOpenSlice.actions;
export default navIsOpenSlice.reducer;
