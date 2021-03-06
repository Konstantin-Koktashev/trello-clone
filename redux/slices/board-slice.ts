import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store";

const initialState = {
  value: 0,
  status: "idle",
  counter: 0,
};

export const boardSlice = createSlice({
  name: "board",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
  // The `extraReducers` field lets the slice handle actions defined elsewhere,
  // including actions generated by createAsyncThunk or in other slices.
  extraReducers: (builder) => {},
});

export const { increment, decrement, incrementByAmount } = boardSlice.actions;

export const selectCount = (state: RootState) => state.board.counter;

export default boardSlice.reducer;
