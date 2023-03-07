import http from "./HttpService";
import { BACKEND_URL_EDITORS } from "../Utils/constants";
import axios from "axios";

let cancelTokenGetAllBoardsService;
export function getBoardsService() {
  /* need to update it with the actual api  */
  cancelTokenGetAllBoardsService && cancelTokenGetAllBoardsService.abort();
  cancelTokenGetAllBoardsService = new AbortController();
  return http.get(BACKEND_URL_EDITORS + "get_board/", {
    signal: cancelTokenGetAllBoardsService.signal
  });
}

let cancelTokenGetBoardUsingIdService;
export function getBoardUsingIdService(boardId) {
  /* need to update it with the actual api  */
  cancelTokenGetBoardUsingIdService && cancelTokenGetBoardUsingIdService.abort();
  cancelTokenGetBoardUsingIdService = new AbortController();

  return http.get(BACKEND_URL_EDITORS + "get_board/?board_id=" + boardId, {
    signal: cancelTokenGetBoardUsingIdService.signal
  });
}

export function createNewBoardService(params) {
  let data = new FormData();

  for (let key in params) {
    data.append(key, params[key]);
  }

  /* need to update it with the actual api  */
  return http.post(BACKEND_URL_EDITORS + "board_crud/", data);
}
