import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const baseUrl = process.env.REACT_APP_API_BASE_URL;

export const termsApi = createApi({
  reducerPath: "termsApi",
  tagTypes: ["Terms"],
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
    getAllTerms: builder.query({
      query: () => "/terms",
      providesTags: ["Terms"],
    }),
    getTermDetails: builder.query({
      query: (id) => `/terms/${id}`,
    }),
    createTerm: builder.mutation({
      query: (body) => ({
        url: "/terms",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Terms"],
    }),
    updateTerm: builder.mutation({
      query: (id, body) => ({
        url: `/terms/${id}/status`,
        body,
        method: "PUT",
      }),
      invalidatesTags: ["Terms"],
    }),
  }),
});

export const {
  useGetAllTermsQuery,
  useGetTermDetailsQuery,
  useCreateTermMutation,
  useUpdateTermMutation,
} = termsApi;
