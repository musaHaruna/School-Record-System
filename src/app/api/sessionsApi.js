import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
// const baseUrl = process.env.REACT_APP_API_BASE_URL;

export const sessionApi = createApi({
    reducerPath:"sessionApi",
    tagTypes:["Sessions"],
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
    endpoints:(builder)=>({
        getAllSessions:builder.query({
            query: ()=> "/sessions",
            providesTags:["Session"]
        }),
        getSingleSessions : builder.query({
            query: (id)=> `/sessions/${id}`
        }),
        createSession: builder.mutation({
            query:(body)=>({
                url:"/sessions",
                body,
                method:"POST"
            }),
           invalidatesTags:["Sessions"]
        }),
        updateSession: builder.mutation({
            query:(id,body)=>({
                url:`/sessions/${id}`,
                body,
                method:"PUT"
            }),
            invalidatesTags:["Sessions"]
        }),
        deleteSession: builder.mutation({
            query: (id)=>({
                url:`/sessions/${id}`,
                method:"DELETE"
            }),
            invalidatesTags:["Subjects"]
        }),
    })
})

export const {
    useCreateSessionMutation, useGetAllSessionsQuery, useGetSingleSessionsQuery, useUpdateSessionMutation, useDeleteSessionMutation
}= sessionApi