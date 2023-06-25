import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://api.tvmaze.com/shows';

const initialState = {
  Shows: [],
  isLoading: true,
  categories: [],
};

export const fetchShows = createAsyncThunk('getshows/', async () => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw Error('Failed to fetch books');
  }
});

const showSlice = createSlice({
  name: 'showlist',
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchShows.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchShows.fulfilled, (state, action) => {
        state.isLoading = false;
        state.Shows = action.payload.map((show) => ({
          id: show.id,
          name: show.name,
          category: show.genres,
          summary: show.summary,
          image: show.image,
          rating: show.rating,
          official: show.officialSite,
          language: show.language,
        }));
        const genresSet = new Set();
        action.payload.forEach((show) => {
          show.genres.forEach((genre) => {
            genresSet.add(genre);
          });
        });
        state.categories = Array.from(genresSet);
      })
      .addCase(fetchShows.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export default showSlice.reducer;
