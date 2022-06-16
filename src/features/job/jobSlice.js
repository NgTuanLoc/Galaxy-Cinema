import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { getUserFromLocalStorage } from '../../utils/localStorageHandler';

import { createJobThunk, deleteJobThunk } from './jobThunk';

const initialState = {
  isLoading: false,
  position: '',
  company: '',
  jobLocation: '',
  jobTypeOptions: ['full-time', 'part-time', 'remote', 'internship'],
  jobType: 'full-time',
  statusOptions: ['interview', 'declined', 'pending'],
  status: 'pending',
  isEditing: false,
  editJobId: '',
};

export const createJob = createAsyncThunk('job/createJob', async (job, thunkAPI) => {
  return createJobThunk('/jobs', job, thunkAPI);
});

export const deleteJob = createAsyncThunk('allJobs/deleteJob', async (jobId, thunkAPI) => {
  return deleteJobThunk('/jobs', jobId, thunkAPI);
});

const jobSlice = createSlice({
  name: 'job',
  initialState,
  reducers: {
    handleChange: (state, { payload: { name, value } }) => {
      state[name] = value;
    },
    clearValue: () => {
      return { ...initialState, jobLocation: getUserFromLocalStorage()?.location || '' };
    },
  },
  extraReducers: {
    [createJob.pending]: (state) => {
      state.isLoading = true;
    },
    [createJob.fulfilled]: (state) => {
      state.isLoading = false;
      toast.success('Job Created');
    },
    [createJob.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    },
    [deleteJob.fulfilled]: (_, { payload }) => {
      toast.success(payload);
    },
    [deleteJob.rejected]: (_, { payload }) => {
      console.log(payload);
      toast.error(payload);
    },
  },
});

export default jobSlice.reducer;
export const { handleChange, clearValue } = jobSlice.actions;
