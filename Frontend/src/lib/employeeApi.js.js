import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const employeeApi = createApi({
  reducerPath: 'employeeApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8080/api/v1/employee/' }),
  tagTypes: ['Employees'],
  endpoints: (builder) => ({
    saveEmployee: builder.mutation({
      query: (employeeData) => ({
        url: 'saveEmployee',
        method: 'POST',
        body: employeeData,
      }),
      invalidatesTags: ['Employees'],
    }),
    getAllEmployees: builder.query({
      query: () => 'getAllEmployees',
      providesTags: ['Employees'],
    }),
    getEmployeeById: builder.query({
      query: (empID) => `searchEmployee/${empID}`,
      providesTags: (result, error, empID) => [{ type: 'Employee', id: empID }],
    }),
    updateEmployee: builder.mutation({
      query: (employeeData) => ({
        url: 'UPDATEEmployee',
        method: 'PUT',
        body: employeeData,
      }),
      invalidatesTags: ['Employees'],
    }),
    deleteEmployee: builder.mutation({
      query: (empID) => ({
        url: `deleteEmployee/${empID}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Employees'],
    }),
  }),
});

export const {
  useSaveEmployeeMutation,
  useGetAllEmployeesQuery,
  useGetEmployeeByIdQuery,
  useUpdateEmployeeMutation,
  useDeleteEmployeeMutation,
} = employeeApi;