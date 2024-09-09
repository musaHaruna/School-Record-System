import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const baseUrl = process.env.REACT_APP_API_BASE_URL;

export const sessionsApi = createApi({
  reducerPath: "sessionsApi",
  tagTypes:["Sessions"],
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
    getAllSessions: builder.query({
      query: () => "/sessions",
      providesTags:["Sessions"]
    }),
    getSessionDetails: builder.query({
      query: (id) => `/sessions/${id}`,
    }),
    createSession: builder.mutation({
      query: (body) => ({
        url: "/sessions",
        method: "POST",
        body,
      }),
      invalidatesTags:["Sessions"]
    }),
    updateSession:builder.mutation({
      query: (id,body)=>({
        url:`/sessions/${id}/status`,
        body,
        method:"PUT"
      }),
      invalidatesTags:["Sessions"]
    })
  }),
});

export const {
  useGetAllSessionsQuery,
  useGetSessionDetailsQuery,
  useCreateSessionMutation,
  useUpdateSessionMutation
} = sessionsApi;
