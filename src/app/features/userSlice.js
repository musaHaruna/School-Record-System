import { createSlice } from "@reduxjs/toolkit";


const initialState ={
    user:null,
    isAuthenticated:false,
    isLoading:true

}

export const userSlice =createSlice({
    name:"userSlice",
    initialState:initialState,
    reducers:{
        setUser:(state, action)=>{
            state.user =action.payload
            state.isAuthenticated=true
        },
        setLoading:(state, action)=>{
            state.isLoading= action.payload
        },
        logOut:(state)=>{
            state.user =null
            state.isAuthenticated=false
        }
        
    }

})

export const {setUser, setLoading, logOut}=userSlice.actions

export default userSlice.reducer