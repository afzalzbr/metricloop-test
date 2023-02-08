import http from "./HttpService";
import { BACKEND_URL_EDITORS } from "../Utils/constants";

export function getBoardsService() {
  /* need to update it with the actual api  */

  var data = new FormData();
  return http.get(BACKEND_URL_EDITORS + "get_board/", {
    //headers: { "X-CSRFToken": getCSRFToken() },
    headers: {
      'Authorization': 'Token 6068f7634e0c5a1c2ccb01c3fb21986002937dec',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
      // ...data.getHeaders()
    },
  });
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
  return http.post(BACKEND_URL_EDITORS + "board_crud/", data, {
    //headers: { "X-CSRFToken": getCSRFToken() },
  });
}
