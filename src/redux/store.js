import { configureStore } from '@reduxjs/toolkit';
import showSlice from './TvShows/showSlice';

export const store = configureStore({
  reducer: {
    shows: showSlice,
  },
});

export default store;
