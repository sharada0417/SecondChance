import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:8080/product/',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      console.log('Token being sent:', token); // Debug log
      if (token) headers.set('Authorization', `Bearer ${token}`);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    createProduct: builder.mutation({
      query: (formData) => ({
        url: 'create',
        method: 'POST',
        body: formData,
      }),
    }),
  }),
});

export const { useCreateProductMutation } = productApi;