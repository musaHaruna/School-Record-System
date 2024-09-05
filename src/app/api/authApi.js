import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { userApi } from "./userApi";
import { setToken } from "../features/authSlice";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://resultprocessingapi.onrender.com/",
    credentials: "include",
  }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (body) => ({
        url: "/admin/login",
        method: "POST",
        body,
      }),
      transformResponse: (result) =>result.token,
      async onQueryStarted(_, {dispatch, queryFulfilled}){
        try{
          const {data}= await queryFulfilled
          dispatch(setToken(data))
          await dispatch(userApi.endpoints.getUserProfile.initiate(null))
        }catch(error){
          console.log(error)
        }
      }
    }),

    register: builder.mutation({
      query: (body) => ({
        url: "/admin/create",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation } = authApi;
