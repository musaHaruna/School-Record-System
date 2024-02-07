// import { createSlice } from '@reduxjs/toolkit'
// import {
//   getUserFromLocalStorage,
//   removeUserFromLocalStorage,
// } from '../../utils/localStorage'

// import { toast } from 'react-toastify'
// const initialState = {
//   user: getUserFromLocalStorage(),
//   isLoginModalOpen: false,
//   isSignUpModalOpen: false,
//   otp: null,
// }

// export const userSlice = createSlice({
//   name: 'user',
//   initialState,
//   reducers: {
//     loginUser: (state, action) => {
//       state.user = action.payload
//     },
//     logoutUser: (state, action) => {
//       state.user = null
//       removeUserFromLocalStorage()
//       toast.success('Logged out succesfully')
//     },
//     openLoginModal: (state) => {
//       state.isLoginModalOpen = true
//     },
//     closeLoginModal: (state) => {
//       state.isLoginModalOpen = false
//     },
//     openSignUpModal: (state) => {
//       state.isSignUpModalOpen = true
//     },
//     closeSignUpModal: (state) => {
//       state.isSignUpModalOpen = false
//     },
//     setOTP: (state, { payload }) => {
//       state.otp = payload
//     },
//   },
// })

// export const {
//   loginUser,
//   openLoginModal,
//   closeLoginModal,
//   openSignUpModal,
//   closeSignUpModal,
//   setOTP,
//   logoutUser,
// } = userSlice.actions

// export default userSlice.reducer
