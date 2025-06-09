// src/lib/api/categoryApi.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const categoryApi = createApi({
  reducerPath: 'categoryApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:8080/category/',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      if (token) headers.set('Authorization', `Bearer ${token}`);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    // Create subcategory
    createCategory: builder.mutation({
      query: ({ category, subcategory }) => ({
        url: 'create',
        method: 'POST',
        body: { category, subcategory },
      }),
    }),
    // Fetch all categories (with their subcategories)
    getAllCategories: builder.query({
      query: () => ({
        url: 'get-all',
        method: 'GET',
      }),
    }),
    // …you can add update/delete later
  }),
});

export const {
  useCreateCategoryMutation,
  useGetAllCategoriesQuery,    // <— new hook
} = categoryApi;
