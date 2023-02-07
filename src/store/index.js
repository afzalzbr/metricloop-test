import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { reducer as userReducer } from './slices/userSlice'
import { reducer as boardsReducer } from './slices/boardsSlice'

const rootReducer = combineReducers({
  user: userReducer,
  boards: boardsReducer,
})

export const store = configureStore({
  reducer: rootReducer,
})