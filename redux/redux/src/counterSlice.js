import { createSlice } from '@reduxjs/toolkit';
const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    countValue: 0,
    inputValue: '',
  },
  reducers: {
    increment: (state) => {
      state.countValue += 1;
    },
    decrement: (state) => {
      state.countValue -= 1;
    },
    changeByAmount: (state, { payload }) => {
      if (payload.type === 'artir') {
        state.countValue += 1;
      }
      if (payload.type === 'test') {
        state.countValue += payload.payload;
      }
    },
    changeInputValue: (state, { payload }) => {
      state.inputValue = payload.payload;
    },
  },
});

export const { increment, decrement, changeByAmount, changeInputValue } =
  counterSlice.actions;

export default counterSlice.reducer;
