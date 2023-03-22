import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  sheets: [],
  loading: false,
  selectedSheet: {
    id: '',
    name: '',
    worksheets: [],
    loading: false,
    selectedWorkSheet: {
      // id: '',
      name: '',
      data: [],
      loading: false,
    }
  }
}

export const sheetsSlice = createSlice({
  name: 'sheets',
  initialState,
  reducers: {
    load: (state) => {
      state.loading = true;
    },
    loadSuccess: (state, action) => {
      state.sheets = action.payload;
      state.loading = false;
    },
    loadFail: (state) => {
      state.loading = false;
    },
    selectSheet: (state, action) => {
      state.selectedSheet.id = action.payload.id;
      state.selectedSheet.name = action.payload.name;
    },
    loadWorkSheets: (state) => {
      state.selectedSheet.loading = true;
    },
    loadWorkSheetsSuccess: (state, action) => {
      state.selectedSheet.worksheets = action.payload;
      state.selectedSheet.loading = false;
    },
    loadWorkSheetsFail: (state) => {
      state.selectedSheet.loading = false;
    },
    selectWorkSheet: (state, action) => {
      // state.selectedSheet.selectedWorkSheet.id = action.payload.id;
      state.selectedSheet.selectedWorkSheet.name = action.payload.name;
    },
    loadWorkSheetData: (state) => {
      state.selectedSheet.selectedWorkSheet.loading = true;
    },
    loadWorkSheetDataSuccess: (state, action) => {
      state.selectedSheet.selectedWorkSheet.data = action.payload;
      state.selectedSheet.selectedWorkSheet.loading = false;
    },
    loadWorkSheetDataFail: (state) => {
      state.selectedSheet.selectedWorkSheet.loading = false;
    },
  },
})

// export the actions
export const { actions, reducer } = sheetsSlice;

export default sheetsSlice.reducer