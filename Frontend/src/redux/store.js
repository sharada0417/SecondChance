// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import { employeeApi } from '../lib/employeeApi.js'; // Import the RTK Query API slice

export const store = configureStore({
  reducer: {
    // Removed counterReducer since it's not used, only employeeApi reducer remains
    [employeeApi.reducerPath]: employeeApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    // Include RTK Query middleware
    getDefaultMiddleware().concat(employeeApi.middleware),
});
