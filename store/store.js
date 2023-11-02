import { configureStore } from '@reduxjs/toolkit'
import studentReducer from './Reducers/studentReducers'

export const store = configureStore({
  reducer: {studentReducer},
})