import { actions as sheetsActions } from '../Slices/sheetsSlice';
import { store } from '../index';
import { getAllSheetsService, getSheetUsingIdService, getWorksheetUsingIdService } from '../../Services/SheetsService.js';

const dispatch = store.dispatch;

/********************************
*          All Sheets           *
*********************************/

export const getAllSheets = () => {
  dispatch(sheetsActions.load());
  return getAllSheetsService()
    .then((res) => {
      dispatch(sheetsActions.loadSuccess(res?.data?.files));
    })
    .catch((err) => {
      console.error('getAllSheets error: ', err);
    })
}

export const getSelectedSheetData = (id, name) => {
  dispatch(sheetsActions.selectSheet({ id, name }));
  dispatch(sheetsActions.loadWorkSheets());
  return getSheetUsingIdService(id, name)
    .then((res) => {
      dispatch(sheetsActions.loadWorkSheetsSuccess(res?.data?.data));
    })
    .catch((err) => {
      console.error('getSelectedSheetData error: ', err);
    })
}

// reset selected sheet
export const resetSelectedSheet = () => {
  dispatch(sheetsActions.resetSelectedSheet());
}

// get selected worksheet data
export const getSelectedWorkSheetData = (id, sheetName, worksheetName) => {
  dispatch(sheetsActions.selectWorkSheet({ name: worksheetName }));
  dispatch(sheetsActions.loadWorkSheetData());
  return getWorksheetUsingIdService(id, sheetName, worksheetName)
    .then((res) => {
      dispatch(sheetsActions.loadWorkSheetDataSuccess(res?.data));
    })
    .catch((err) => {
      console.error('getSelectedWorkSheetData error: ', err);
    })
}


