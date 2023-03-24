import http from "./HttpService";
import { BACKEND_URL_EDITORS } from "../Utils/constants";


// listing all the data sources available
let cancelGetAllDataSourcesService;
export function getAllDataSourcesService() {
  cancelGetAllDataSourcesService && cancelGetAllDataSourcesService.abort();
  cancelGetAllDataSourcesService = new AbortController();
  return http.get(BACKEND_URL_EDITORS + "get_datasource/", {
    signal: cancelGetAllDataSourcesService.signal
  });
}

// create new data source
let cancelCreateDataSourceService;
export function createDataSourceService(name, sheet_id) {
  let data = new FormData();
  data.append("name", name);
  data.append("sheet_id", sheet_id);
  cancelCreateDataSourceService && cancelCreateDataSourceService.abort();
  cancelCreateDataSourceService = new AbortController();
  return http.post(BACKEND_URL_EDITORS + "datasource_crud/", data, {
    signal: cancelCreateDataSourceService.signal
  });
}

// update data source
let cancelUpdateDataSourceService;
export function updateDataSourceService(id, name, sheet_id) {
  let data = new FormData();
  data.append("id", id);
  data.append("name", name);
  data.append("sheet_id", sheet_id);
  cancelUpdateDataSourceService && cancelUpdateDataSourceService.abort();
  cancelUpdateDataSourceService = new AbortController();
  return http.post(BACKEND_URL_EDITORS + "datasource_crud/", data, {
    signal: cancelUpdateDataSourceService.signal
  });
}

// delete data source
let cancelDeleteDataSourceService;
export function deleteDataSourceService(id) {
  cancelDeleteDataSourceService && cancelDeleteDataSourceService.abort();
  cancelDeleteDataSourceService = new AbortController();
  return http.delete(BACKEND_URL_EDITORS + "datasource_crud/?data_id=" + id, {}, {
    signal: cancelDeleteDataSourceService.signal
  });
}