import { actions as sheetsActions } from '../Slices/sheetsSlice';
import { store } from '../index';
import { getAllSheetsService, getSheetUsingIdService } from '../../Services/SheetsService.js';

const dispatch = store.dispatch;

/********************************
*          All Sheets           *
*********************************/

export const getAllSheets = () => {
  dispatch(sheetsActions.load());
  return getAllSheetsService()
    .then((res) => {
      console.log('getAllSheets response: ', res)
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
      console.log('getSelectedSheetData response: ', res)
      dispatch(sheetsActions.loadWorkSheetsSuccess(res?.data?.data));
    })
    .catch((err) => {
      console.error('getSelectedSheetData error: ', err);
    })
}

// get selected worksheet data
export const getSelectedWorkSheetData = (id, sheetName, name) => {
  dispatch(sheetsActions.selectWorkSheet({ name }));
  dispatch(sheetsActions.loadWorkSheetData());
  // return getSheetUsingIdService(id, name, sheetName)
  //   .then((res) => {
  //     console.log('getSelectedWorkSheetData response: ', res)
  //     dispatch(sheetsActions.loadWorkSheetDataSuccess(res?.data?.data));
  //   })
  //   .catch((err) => {
  //     console.error('getSelectedWorkSheetData error: ', err);
  //   })
}