import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { reducer as userReducer } from './Slices/userSlice'
import { reducer as boardsReducer } from './Slices/boardsSlice'

const rootReducer = combineReducers({
  user: userReducer,
  boards: boardsReducer,
})

export const store = configureStore({
  reducer: rootReducer,
})