import { configureStore } from '@reduxjs/toolkit';

import counterSlice from './counterSlice';

const store = configureStore({
  reducer: {
    counter: counterSlice,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),

  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
