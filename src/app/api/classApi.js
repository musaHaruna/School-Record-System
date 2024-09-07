import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
const baseUrl = process.env.REACT_APP_API_BASE_URL;

export const classesApi = createApi({
    reducerPath:"classesApi",
    tagTypes:["Classes"],
    baseQuery: fetchBaseQuery({
        baseUrl,
        prepareHeaders:(headers, {getState})=>{
            const token =getState().auth.token || localStorage.getItem("token")
      
            // if we have a token set it in the headers
            if (token) {
              headers.set('Authorization', `Bearer ${token}`);
            }
            headers.set('Content-Type', 'application/json'); // Set the Content-Type to application/json
            return headers;
          },
        credentials: "include",
        
    }),
    endpoints:(builder)=>({
        getAllClasses:builder.query({
            query: ()=> "/classes",
            providesTags:["Classes"]
        }),
        getSingleClasses : builder.query({
            query: (id)=> `/classes/${id}`
        }),
        createClass: builder.mutation({
            query:(body)=>({
                url:"/classes",
                body,
                method:"POST"
            }),
            invalidatesTags:["Classes"]
        }),
        updateClasses: builder.mutation({
            query:(id,body)=>({
                url:`/Classes/${id}`,
                body,
                method:"PUT"
            }),
            invalidatesTags:["Classes"]
        }),
        deleteClasses : builder.mutation({
            query: (id)=>({
                url:`/Classes/${id}`,
                method:"DELETE"
            }),
            invalidatesTags:["Classes"]
        }),
    })
})

export const {
    useCreateClassMutation, useDeleteClassesMutation, useGetAllClassesQuery, useGetSingleClassesQuery,useUpdateClassesMutation
}= classesApi