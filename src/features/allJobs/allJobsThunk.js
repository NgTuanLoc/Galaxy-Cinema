import customFetch from '../../utils/axios';

export const getAllJobsThunk = async (thunkAPI) => {
  try {
    const response = await customFetch.get('/jobs');
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};
