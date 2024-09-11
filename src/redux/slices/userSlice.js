import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

// const API_URL = 'https://jsonplaceholder.typicode.com/users';
const API_URL = 'https://api.restful-api.dev/objects';

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  const response = await axios.get(API_URL);
  return response.data;
});

const userSlice = createSlice({
  name: 'users',
  initialState: {
    users: [],
    loading: false,
    error: null,
  },

  // add set modules
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchUsers.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default userSlice.reducer;
