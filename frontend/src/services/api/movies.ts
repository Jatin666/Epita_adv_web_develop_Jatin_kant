/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
/* eslint-disable import/no-unresolved */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// import { IPets } from 'interfaces';

export const moviesApi = createApi({
  reducerPath: 'moviesApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000' }),
  endpoints: (builder) => ({
    movies: builder.query<any, any>({
      query: (arg) => {
        console.log(`/${arg}`);

        return `/${arg}`;
      },
    }),
    watch: builder.mutation({
      query: (payload) => ({
        url: `/${payload.url}`,
        method: 'POST',
        body: payload.data,
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }),
    }),
    rating: builder.mutation({
      query: (payload) => ({
        url: `/${payload.url}`,
        method: 'POST',
        body: payload.data,
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }),
    }),
  }),
});

export const { useMoviesQuery, useWatchMutation, useRatingMutation } = moviesApi;
