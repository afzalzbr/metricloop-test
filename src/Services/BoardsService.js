import http from "./HttpService";
import { BACKEND_URL_EDITORS } from "../Utils/constants";
import axios from "axios";

export function getBoardsService() {
  /* need to update it with the actual api  */
  return http.get(BACKEND_URL_EDITORS + "get_board/");
}

export function getBoardUsingIdService(boardId) {
  /* need to update it with the actual api  */
  return http.get(BACKEND_URL_EDITORS + "get_board/?board_id=" + boardId, {
    // headers: { "X-CSRFToken": getCSRFToken() },
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
