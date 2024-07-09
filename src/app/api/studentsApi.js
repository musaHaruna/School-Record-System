import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const studentsApi = createApi({
  reducerPath: "studentsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4000/api",
    credentials: "include",
  }),
  endpoints: (builder) => ({
    getAllStudents: builder.query({
      query: () => "/",
    }),
    getStudentDetails: builder.query({
      query: (id) => `/${id}`,
    }),
    createStudent: builder.mutation({
      query: (body) => ({
        url: "",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const {
  useGetAllStudentsQuery,
  useGetStudentDetailsQuery,
  useCreateStudentMutation,
} = studentsApi;
