import { configureStore } from '@reduxjs/toolkit';
import authReducer from './api/authSlice';
import { authApi } from './api/authApi';
import { categoryApi } from './api/categoryApi';
import { productApi } from './api/productApi';
 import { orderApi } from './api/orderApi';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    [authApi.reducerPath]: authApi.reducer,
    [categoryApi.reducerPath]: categoryApi.reducer,
    [productApi.reducerPath]: productApi.reducer,
  [orderApi.reducerPath]: orderApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(authApi.middleware)
      .concat(categoryApi.middleware)
      .concat(productApi.middleware)
    .concat(orderApi.middleware),
});
