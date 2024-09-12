import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
  const baseUrl = process.env.REACT_APP_API_BASE_URL;

// console.log("URL IS>>>>>>",baseUrl)
export const studentsApi = createApi({
  reducerPath: "studentsApi",
  tagTypes:["Students"],
  baseQuery: fetchBaseQuery({
     baseUrl,
    prepareHeaders:(headers, {getState})=>{
      const token =getState().auth.token || localStorage.getItem("token")

      // if we have a token set it in the headers
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers
    },
    credentials: "include",
  }),
  endpoints: (builder) => ({
    getAllStudents: builder.query({
      query: () => "/student",
      providesTags:["Students"]
    }),
    getStudentDetails: builder.query({
      query: (id) => `/student/${id}`,
    }),
    createStudent: builder.mutation({
      query: (body) => ({
        url: "/student",
        method: "POST",
        body,
      }),
      invalidatesTags:["Students"]
    }),
    updateStudent:builder.mutation({
      query: (id,body)=>({
        url:`/student/${id}/status`,
        body,
        method:"PUT"
      }),
      invalidatesTags:["Students"]
    })
  }),
});

export const {
  useGetAllStudentsQuery,
  useGetStudentDetailsQuery,
  useCreateStudentMutation,
  useUpdateStudentMutation
} = studentsApi;
