/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */
import { createSlice } from '@reduxjs/toolkit';
// import { Imovies } from 'interfaces';

const initialState = {
  movies: [],
  movie: [],
};
const movies = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    moviesInfos(state, action) {
      console.log('action', action);
      state.movies = action.payload;
    },
    movieById(state, action) {
      const res = state.movies.filter((el: any) => {
        return el.id === parseInt(action.payload, 10);
      });
      state.movie = res;
      console.log(JSON.stringify(res));
    },
  },
});

export const { moviesInfos, movieById } = movies.actions;

export default movies;
