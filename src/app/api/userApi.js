import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { setLoading, setUser } from "../features/userSlice";


export const userApi =createApi({
    reducerPath:"userApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://resultprocessingapi.onrender.com/",
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
    endpoints: (builder)=>({
        getUserProfile:builder.query({
            query:()=> "/user/profile",
            async onQueryStarted(_, {dispatch, queryFulfilled}){
                try{
                    const {data}= await queryFulfilled
                    dispatch(setUser(data))
                    dispatch(setLoading(false))
                }catch(error){
                    console.log(error)
                }
            }
        }),
        getAllUsers:builder.query({
            query:()=> "/user/all"
        })
    })
})

export const { useGetUserProfileQuery, useGetAllUsersQuery } = userApi;