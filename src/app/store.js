import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "./api/authApi";
import { studentsApi } from "./api/studentsApi";
import { teachersApi } from "./api/teachersApi";

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [studentsApi.reducerPath]: studentsApi.reducer,
    [teachersApi.reducerPath]: teachersApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      authApi.middleware,
      studentsApi.middleware,
      teachersApi.middleware,
    ]),
});
