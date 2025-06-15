import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const orderApi = createApi({
  reducerPath: 'orderApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:8080/',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      if (token) headers.set('Authorization', `Bearer ${token}`);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    saveAddress: builder.mutation({
      query: (address) => ({
        url: 'address/save',
        method: 'POST',
        body: address,
      }),
    }),
    createOrder: builder.mutation({
      query: (items) => ({
        url: 'order/create',
        method: 'POST',
        body: { items },
      }),
    }),
  }),
});

export const {
  useSaveAddressMutation,
  useCreateOrderMutation,
} = orderApi;
