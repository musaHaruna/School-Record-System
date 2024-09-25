import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
const baseUrl = process.env.REACT_APP_API_BASE_URL;

export const allSubjectApi = createApi({
    reducerPath:"allSubjectApi",
    tagTypes:["Subjects"],
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
    endpoints:(builder)=>({
        getAllSubjects:builder.query({
            query: ()=> "/subjects",
            providesTags:["Subjects"]
        }),
        getSingleSubject : builder.query({
            query: (id)=> `/subjects/${id}`
        }),
        createSubject: builder.mutation({
            query:(body)=>({
                url:"/subjects",
                body,
                method:"POST"
            }),
           invalidatesTags:["Subjects"]
        }),
        updateSubject: builder.mutation({
            query:(id,body)=>({
                url:`/subjects/${id}`,
                body,
                method:"PUT"
            }),
            invalidatesTags:["Subjects"]
        }),
        deleteSubject : builder.mutation({
            query: (id)=>({
                url:`/subjects/${id}`,
                method:"DELETE"
            }),
            invalidatesTags:["Subjects"]
        }),
    })
})

export const {
    useCreateSubjectMutation, useDeleteSubjectMutation, useGetAllSubjectsQuery, useGetSingleSubjectQuery,useUpdateSubjectMutation
}= allSubjectApi