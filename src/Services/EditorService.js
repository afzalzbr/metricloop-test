import http from "./HttpService";
import { BACKEND_URL_EDITORS } from "../Utils/constants";

let cancelTokenGetNodesUsingBoardIdService;
export function getNodesUsingBoardIdService(boardId) {
  /* need to update it with the actual api  */
  cancelTokenGetNodesUsingBoardIdService && cancelTokenGetNodesUsingBoardIdService.abort();
  cancelTokenGetNodesUsingBoardIdService = new AbortController();

  return http.get(BACKEND_URL_EDITORS + "get_node/?board_id=" + boardId, {
    signal: cancelTokenGetNodesUsingBoardIdService.signal
  });
}

let cancelTokenGetEdgesUsingBoardIdService;
export function getEdgesUsingBoardIdService(boardId) {
  /* need to update it with the actual api  */
  cancelTokenGetEdgesUsingBoardIdService && cancelTokenGetEdgesUsingBoardIdService.abort();
  cancelTokenGetEdgesUsingBoardIdService = new AbortController();

  return http.get(BACKEND_URL_EDITORS + "get_edges/?board_id=" + boardId, {
    signal: cancelTokenGetEdgesUsingBoardIdService.signal
  });
}

let cancelTokenCreateNewNodeInBoard;
export function createNewNodeInBoardService(params) {
  let data = new FormData();
  for (let key in params) {
    data.append(key, params[key]);
  }
  cancelTokenCreateNewNodeInBoard && cancelTokenCreateNewNodeInBoard.abort();
  cancelTokenCreateNewNodeInBoard = new AbortController();
  /* need to update it with the actual api  */
  return http.post(BACKEND_URL_EDITORS + "node_crud/", data, {
    signal: cancelTokenCreateNewNodeInBoard.signal
  });
}

// update node in a board
let cancelTokenUpdateNodeInBoard;
export function updateNodeInBoardService(params) {
  let data = new FormData();
  for (let key in params) {
    data.append(key, params[key]);
  }
  cancelTokenUpdateNodeInBoard && cancelTokenUpdateNodeInBoard.abort();

  // save the new request for cancellation
  cancelTokenUpdateNodeInBoard = new AbortController()

  return http.put(BACKEND_URL_EDITORS + "node_crud/", data, {
    signal: cancelTokenUpdateNodeInBoard.signal
  });
}

export function createNewEdgeInBoardService(params) {
  /* 
    board_id:3
    edge_name:testing edge
    edge_description:this is testing edge
    edge_source:1
    edge_target:2
  */
  let data = new FormData();
  for (let key in params) {
    data.append(key, params[key]);
  }
  /* need to update it with the actual api  */
  return http.post(BACKEND_URL_EDITORS + "create_edge/", data);
}