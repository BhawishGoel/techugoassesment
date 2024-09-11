// src/redux/store.js
import {configureStore} from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import modulesSlice from './slices/relaxSlice';

const store = configureStore({
  reducer: {
    users: userReducer,
    relax: modulesSlice,
  },
});

export default store;
