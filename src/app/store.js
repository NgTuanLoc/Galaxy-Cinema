import { configureStore } from '@reduxjs/toolkit';

import userReducer from '../features/user/userSlice';
import jobReducer from '../features/job/jobSlice';
import allJobReducer from '../features/allJobs/allJobSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    job: jobReducer,
    allJob: allJobReducer,
  },
});
