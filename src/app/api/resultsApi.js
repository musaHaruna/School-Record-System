import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const baseUrl = process.env.REACT_APP_API_BASE_URL;

export const resultsApi = createApi({
  reducerPath: "resultsApi",
  tagTypes: ["Results"],
  baseQuery: fetchBaseQuery({
    baseUrl,
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token || localStorage.getItem("token");

      // if we have a token set it in the headers
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
    credentials: "include",
  }),
  endpoints: (builder) => ({
    getAllResults: builder.query({
      query: () => "/results",
      providesTags: ["Results"],
    }),

    getResultDetails: builder.query({
      query: (id) => `/results/${id}`,
    }),
    createResult: builder.mutation({
      query: (body) => ({
        url: "/results",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Results"],
    }),
    updateResult: builder.mutation({
      query: (id, body) => ({
        url: `/results/${id}/status`,
        body,
        method: "PUT",
      }),
      invalidatesTags: ["Results"],
    }),
  }),
});

export const {
  useGetAllResultsQuery,
  useGetResultDetailsQuery,
  useCreateResultMutation,
  useUpdateResultMutation,
} = resultsApi;
