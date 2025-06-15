import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:8080/product/',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      if (token) headers.set('Authorization', `Bearer ${token}`);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    // Fetch list by category
    getProductsByCategory: builder.query({
      query: ({ categoryId, subid }) => `get-by-category-id/${categoryId}/${subid}`,
      transformResponse: (response) => response.productList,
    }),
    // Fetch single product by ID
    getProductById: builder.query({
      query: (productId) => `get-by-product-id/${productId}`,
      transformResponse: (response) => response.product,
    }),
    createProduct: builder.mutation({
      query: (formData) => ({ url: 'create', method: 'POST', body: formData }),
    }),
    // New endpoint for searching products
    searchProducts: builder.query({
      query: (searchTerm) => `search?searchValue=${searchTerm}`,
      transformResponse: (response) => response.productList,
    }),
  }),
});

export const {
  useGetProductsByCategoryQuery,
  useGetProductByIdQuery,
  useCreateProductMutation,
  useSearchProductsQuery, // Added new hook
} = productApi;