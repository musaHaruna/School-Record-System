import { createSlice } from "@reduxjs/toolkit";
import { classesApi } from "../api/classApi";

const classResultSlice = createSlice({
  name: "classResults",
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {
    setClassResults: (state, action) => {
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
export const { setClassResults, setLoading, setError } = classResultSlice.actions;

// Async function to fetch class results using the API query
export const fetchClassResults = (classId, termId) => async (dispatch, getState) => {
  dispatch(setLoading(true));
  try {
    const response = await dispatch(classesApi.endpoints.getClassResults.initiate({ classId, termId })).unwrap();
    console.log("result is", response);
    dispatch(setClassResults(response)); // Set the results to the state
  } catch (error) {
    console.error("Failed to fetch class results: ", error);
    dispatch(setError(error)); // Set the error state
  } finally {
    dispatch(setLoading(false));
  }
};

// Export the reducer
export default classResultSlice.reducer;
