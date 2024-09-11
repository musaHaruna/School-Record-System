import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "./api/authApi";
import { userApi } from "./api/userApi";
import { studentsApi } from "./api/studentsApi";
import { teachersApi } from "./api/teachersApi";
import {classesApi} from "./api/classApi"
// import { studentsApi } from "./api/studentsApi";
import {allSubjectApi} from  "./api/allSubjectApi"
import {sessionApi} from "./api/sessionsApi"
import authReducer from "./features/authSlice";
import userReducer from "./features/userSlice"
import { sessionsApi } from "./api/sessionsApi";
import { termsApi } from "./api/termApi";
import { assessmentsApi } from "./api/assessmentsApi";
import { resultsApi } from "./api/resultsApi";


export const store = configureStore({
  reducer: {
    auth:authReducer,
    user:userReducer,
    [authApi.reducerPath]: authApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    [studentsApi.reducerPath]: studentsApi.reducer,
    [teachersApi.reducerPath]: teachersApi.reducer,
    [allSubjectApi.reducerPath]: allSubjectApi.reducer,
    [classesApi.reducerPath]: classesApi.reducer,
    [sessionsApi.reducerPath]: sessionsApi.reducer,
    [termsApi.reducerPath]: termsApi.reducer,
    [assessmentsApi.reducerPath]: assessmentsApi.reducer,
    [resultsApi.reducerPath]: resultsApi.reducer,
    // [studentsApi.reducerPath]: studentsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      authApi.middleware,
      userApi.middleware,
      studentsApi.middleware,
      teachersApi.middleware,
      allSubjectApi.middleware,
      classesApi.middleware,
      sessionApi.middleware,
      // studentsApi.middleware,
    ]),
});
