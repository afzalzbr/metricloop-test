import { actions as editorActions } from '../Slices/editorSlice';
import { store } from '../index';
import { createNewNodeInBoardService, getNodesUsingBoardIdService } from '../../Services/EditorService';

const dispatch = store.dispatch;

export const getAllNodesOfBoard = (id) => {
  dispatch(editorActions.loadNodes());
  getNodesUsingBoardIdService(id)
    .then((res) => {
      console.log('getAll nodes of a board response: ', res)
      dispatch(editorActions.loadNodesSuccess(res.data));
    })
    .catch((err) => {
      dispatch(editorActions.loadNodesFail());
      console.error('getAll nodes of error: ', err);
    })
}

export const getAllEdgesOfBoard = (id) => {
  dispatch(editorActions.loadEdges());
  getNodesUsingBoardIdService(id)
    .then((res) => {
      console.log('getAll edges of a board response: ', res)
      dispatch(editorActions.loadEdgesSuccess(res.data));
    })
    .catch((err) => {
      dispatch(editorActions.loadEdgesFail());
      console.error('getAll edges of error: ', err);
    })
}

export const createNewNodeInBoard = (params) => {
  dispatch(editorActions.addNodeLoading());
  console.log('create New node in a Board params: ', params)
  return createNewNodeInBoardService(params)
    .then((res) => {
      let { data } = res;
      console.log('create New node in a Board Res: ', res)
      dispatch(editorActions.addEdgeSuccess(data));
      return res;
    })
    .catch((err) => {
      dispatch(editorActions.addNodeFail())
      console.error('createNewBoard error: ', err)
      return err;
    })
}

export const createNewEdgeInBoard = (params) => {
  dispatch(editorActions.addEdgeLoading());
  return createNewEdgeInBoard(params)
    .then((res) => {
      let { data } = res;
      console.log('create New edge in a Board Res: ', res)
      dispatch(editorActions.addEdgeSuccess(data));
    })
    .catch((err) => {
      dispatch(editorActions.addEdgeFail())
      console.error('createNewBoard error: ', err)
    })
}

export const resetAddNode = () => {
  dispatch(editorActions.resetAddNode())
}

export const resetAddEdge = () => {
  dispatch(editorActions.resetAddEdge())
}