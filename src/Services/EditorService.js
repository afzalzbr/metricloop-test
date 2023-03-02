import http from "./HttpService";
import { BACKEND_URL_EDITORS } from "../Utils/constants";

export function getNodesUsingBoardIdService(boardId) {
  /* need to update it with the actual api  */
  return http.get(BACKEND_URL_EDITORS + "get_node/?board_id=" + boardId);
}

export function getEdgesUsingIdService(boardId) {
  /* need to update it with the actual api  */
  return http.get(BACKEND_URL_EDITORS + "get_edges/?board_id=" + boardId, {
    // headers: { "X-CSRFToken": getCSRFToken() },
  });
}

export function createNewNodeInBoardService(params) {
  /* 
    board_id:3
    node_name:testing node
    node_style:circle
    node_description:this is testing node
  */
  let data = new FormData();
  for (let key in params) {
    data.append(key, params[key]);
  }
  /* need to update it with the actual api  */
  return http.post(BACKEND_URL_EDITORS + "node_crud/", data);
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