import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  totalBoards: 0,
  boards: [],
  loading: false,
  addLoading: false,
  addFail: false,
  addSuccess: false,
}

export const boardsSlice = createSlice({
  name: 'boards',
  initialState,
  reducers: {
    load: (state, action) => {
      state.loading = true;
    },
    loadSuccess: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.boards = [...state.boards, ...action.payload];
      state.totalBoards = action.totalBoards;
      state.loading = false;
    },
    loadFail: (state, action) => {
      state.loading = false;
    },
    addLoading: (state, action) => {
      state.addLoading = true;
      state.addFail = false;
      state.addSuccess = false;
    },
    addSuccess: (state, action) => {
      state.addLoading = false;
      state.addSuccess = true;
      state.boards = [action.payload, ...state.boards];
    },
    addFail: (state, action) => {
      state.addFail = true;
      state.addLoading = false;
      state.addSuccess = false;
    },
    resetAddBoard: (state) => {
      state.addFail = false;
      state.addLoading = false;
      state.addSuccess = false;
    },
    deleteBoard: (state, action) => {
      state.boards = state.boards.filter((board) => board.id !== action.payload)
    },
    reset: () => initialState,
  },
})

// Action creators are generated for each case reducer function
export const { actions, reducer } = boardsSlice;

export default boardsSlice.reducer