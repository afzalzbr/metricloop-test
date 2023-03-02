import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { reducer as userReducer } from './Slices/userSlice'
import { reducer as boardsReducer } from './Slices/boardsSlice'
import { reducer as editorReducer } from './Slices/editorSlice'

const rootReducer = combineReducers({
  user: userReducer,
  boards: boardsReducer,
  editor: editorReducer,
})

export const store = configureStore({
  reducer: rootReducer,
})