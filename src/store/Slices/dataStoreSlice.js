import { createSlice } from "@reduxjs/toolkit";

// make a slice of the store
const initialState = {
  sheets: [],
  worksheets: []
}

export const dataStoreSlice = createSlice({
  name: 'dataStore',
  initialState,
  reducers: {
    load: (state, action) => {
      state.sheets = action.payload;
    }
  },
})

// export the actions
export const { actions, reducer } = dataStoreSlice;

export default dataStoreSlice.reducer