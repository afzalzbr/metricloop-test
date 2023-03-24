import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { reducer as userReducer } from './Slices/userSlice'
import { reducer as boardsReducer } from './Slices/boardsSlice'
import { reducer as editorReducer } from './Slices/editorSlice'
import { reducer as sheetsReducer } from './Slices/sheetsSlice'
import { reducer as dataSourceReducer } from './Slices/dataSourceSlice'

const rootReducer = combineReducers({
  user: userReducer,
  boards: boardsReducer,
  editor: editorReducer,
  sheets: sheetsReducer,
  dataSources: dataSourceReducer
})

export const store = configureStore({
  reducer: rootReducer,
})