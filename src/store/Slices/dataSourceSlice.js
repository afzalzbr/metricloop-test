import { createSlice } from "@reduxjs/toolkit";

// make a slice of the store
const initialState = {
  data: [],
  loading: false,
  createNew: {
    loading: false,
    success: false,
    fail: false,
    error: '',
  },
  update: {
    loading: false,
    success: false,
    fail: false,
    error: '',
  },
  delete: {
    loading: false,
    success: false,
    fail: false,
    error: '',
  }
}

export const dataSourceSlice = createSlice({
  name: 'dataSource',
  initialState,
  reducers: {
    load: (state) => {
      state.loading = true;
    },
    loadSuccess: (state, action) => {
      state.data = action.payload;
      state.loading = false;
    },
    loadFail: (state) => {
      state.loading = false;
    },
    createNew: (state) => {
      state.createNew.loading = true;
      state.createNew.success = false;
      state.createNew.fail = false;
    },
    createNewSuccess: (state) => {
      state.createNew.loading = false;
      state.createNew.success = true;
      state.createNew.fail = false;
    },
    createNewFail: (state, action) => {
      state.createNew.loading = false;
      state.createNew.success = false;
      state.createNew.fail = true;
      if (action.payload)
        state.createNew.error = action.payload;

    },
    resetCreateNew: (state) => {
      state.createNew.loading = false;
      state.createNew.success = false;
      state.createNew.fail = false;
      state.createNew.error = '';
    },
    update: (state) => {
      state.update.loading = true;
      state.update.success = false;
      state.update.fail = false;
    },
    updateSuccess: (state) => {
      state.update.loading = false;
      state.update.success = true;
      state.update.fail = false;
    },
    updateFail: (state, action) => {
      state.update.loading = false;
      state.update.success = false;
      state.update.fail = true;
      if (action.payload)
        state.update.error = action.payload;
    },
    resetUpdate: (state) => {
      state.update.loading = false;
      state.update.success = false;
      state.update.fail = false;
      state.update.error = '';
    },
    delete: (state) => {
      state.delete.loading = true;
      state.delete.success = false;
      state.delete.fail = false;
    },
    deleteSuccess: (state) => {
      state.delete.loading = false;
      state.delete.success = true;
      state.delete.fail = false;
    },
    deleteFail: (state, action) => {
      state.delete.loading = false;
      state.delete.success = false;
      state.delete.fail = true;
      if (action.payload)
        state.delete.error = action.payload;
    },
    resetDelete: (state) => {
      state.delete.loading = false;
      state.delete.success = false;
      state.delete.fail = false;
      state.delete.error = '';
    },
  },
})

// export the actions
export const { actions, reducer } = dataSourceSlice;

export default dataSourceSlice.reducer