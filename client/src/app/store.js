import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice.ts'

export const store = configureStore({
  reducer: {
    auth: authReducer,
  }
});
