/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
/* eslint-disable import/no-unresolved */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// import { IPets } from 'interfaces';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000/users' }),
  endpoints: (builder) => ({
    addNewUser: builder.mutation({
      query: (payload) => ({
        url: `/${payload.url}`,
        method: 'POST',
        body: payload.data,
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }),
    }),
    login: builder.mutation({
      query: (payload) => ({
        url: `/${payload.url}`,
        method: 'POST',
        body: payload.data,
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }),
    }),
    // auth: builder.query<any, any>({
    //   query: (arg) => {
    //     console.log(`/${arg}`);

    //     return `/${arg}`;
    //   },
    // }),
  }),
});

export const { useAddNewUserMutation, useLoginMutation } = authApi;
