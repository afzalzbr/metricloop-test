import http from "./HttpService";
import { BACKEND_URL_EDITORS } from "../Utils/constants";

// listing all the sheets available
let cancelGetAllSheetsService;
export function getAllSheetsService() {
  cancelGetAllSheetsService && cancelGetAllSheetsService.abort();
  cancelGetAllSheetsService = new AbortController();
  return http.post(BACKEND_URL_EDITORS + "all_sheets/", {}, {
    signal: cancelGetAllSheetsService.signal
  });
}

// listing all the worksheets available in a sheet using sheet id and sheet name
let cancelGetSheetUsingIdService;
export function getSheetUsingIdService(sheetId, sheetName) {
  cancelGetSheetUsingIdService && cancelGetSheetUsingIdService.abort();
  cancelGetSheetUsingIdService = new AbortController();
  let data = new FormData();
  data.append("sheet_id", sheetId);
  data.append("sheet_name", sheetName);
  return http.post(BACKEND_URL_EDITORS + "access_single_sheet_v2/", data, {
    signal: cancelGetSheetUsingIdService.signal
  });
}

// list data of a worksheet using sheet id, sheet name and worksheet name
let cancelGetWorksheetUsingIdService;
export function getWorksheetUsingIdService(sheetId, sheetName, worksheetName) {
  cancelGetWorksheetUsingIdService && cancelGetWorksheetUsingIdService.abort();
  cancelGetWorksheetUsingIdService = new AbortController();
  let data = new FormData();
  data.append("sheet_id", sheetId);
  data.append("sheet_name", sheetName);
  data.append("worksheet_name", worksheetName);
  return http.post(BACKEND_URL_EDITORS + "access_single_worksheet/", data, {
    signal: cancelGetWorksheetUsingIdService.signal
  });
}

