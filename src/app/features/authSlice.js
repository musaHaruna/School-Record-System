import { createSlice } from "@reduxjs/toolkit";

const initiateState = {
  token: null,
};

export const authSlice = createSlice({
  name: "user",
  initialState: initiateState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
      localStorage.setItem("token", action.payload);
      // to store the token immediately into the localstorage
    },
    // to logout
    clearToken: (state, action) => {
      state.token = null;
      localStorage.removeItem("token");
    },
  },
});

export const { setToken, clearToken } = authSlice.actions;

export default authSlice.reducer;
