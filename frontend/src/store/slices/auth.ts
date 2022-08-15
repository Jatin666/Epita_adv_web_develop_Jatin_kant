/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */
import { createSlice } from '@reduxjs/toolkit';
// import { Imovies } from 'interfaces';

const initialState = {
  user: null,
};
const user = createSlice({
  name: 'user',
  initialState,
  reducers: {
    userInfos(state, action) {
      console.log('action', action);
      state.user = action.payload;
    },
    logout(state, action) {
      console.log('action', action);
      state.user = action.payload;
    },
    // movieById(state, action) {
    //   const res = state.movies.filter((el: any) => {
    //     return el.id === parseInt(action.payload, 10);
    //   });
    //   state.movies = res;
    //   console.log(JSON.stringify(res));
    // },
  },
});

export const { userInfos, logout } = user.actions;

export default user;
