import { createSlice } from "@reduxjs/toolkit";

const subjectsSlice = createSlice({
  name: "subjects",
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {
    setSubjects: (state, action) => {
      state.data = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

// Extract the actions
export const { setSubjects, setLoading, setError } = subjectsSlice.actions;


// Export the reducer
export default subjectsSlice.reducer;
