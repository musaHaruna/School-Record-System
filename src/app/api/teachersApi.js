import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const teachersApi = createApi({
  reducerPath: "teachersApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4000/api",
    credentials: "include",
  }),
  endpoints: (builder) => ({
    getAllTeachers: builder.query({
      query: () => "/",
    }),
    getTeacherDetails: builder.query({
      query: (id) => `/${id}`,
    }),
    createTeacher: builder.mutation({
      query: (body) => ({
        url: "",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const {
  useGetAllTeachersQuery,
  useGetTeacherDetailsQuery,
  useCreateTeacherMutation,
} = teachersApi;
