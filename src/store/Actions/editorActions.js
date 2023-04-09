import { actions as editorActions } from '../Slices/editorSlice';
import { store } from '../index';
import { createNewEdgeInBoardService, createNewNodeInBoardService, getEdgesUsingBoardIdService, getEdgesUsingIdService, getNodesUsingBoardIdService, updateNodeInBoardService } from '../../Services/EditorService';

const dispatch = store.dispatch;

/********************************
*             Nodes             *
*********************************/

export const getAllNodesOfBoard = (id) => {
  dispatch(editorActions.loadNodes());
  return getNodesUsingBoardIdService(id)
    .then((res) => {
      console.log('getAll nodes of a board response: ', res)
      dispatch(editorActions.loadNodesSuccess(res.data));
    })
    .catch((err) => {
      dispatch(editorActions.loadNodesFail());
      console.error('getAll nodes of error: ', err);
    })
}

export const createNewNodeInBoard = (params) => {
  dispatch(editorActions.addNodeLoading());
  console.log('create New node in a Board params: ', params)
  return createNewNodeInBoardService(params)
    .then((res) => {
      let { data } = res;
      console.log('create New node in a Board Res: ', res)
      dispatch(editorActions.addNodeSuccess(data));
      return res;
    })
    .catch((err) => {
      dispatch(editorActions.addNodeFail())
      console.error('createNewBoard error: ', err)
      return err;
    })
}

export const updateNodeInBoard = (params) => {
  console.log('update node in a Board params: ', params)
  // dispatch(editorActions.addNodeLoading());
  // console.log('update node in a Board params: ', params)
  return updateNodeInBoardService(params)
    .then((res) => {
      // let { data } = res;
      // console.log('update node in a Board Res: ', res)
      // dispatch(editorActions.addEdgeSuccess(data));
      return res;
    })
    .catch((err) => {
      // dispatch(editorActions.addNodeFail())
      console.error('update node error: ', err)
      return err;
    })
}

export const resetAddNode = () => {
  dispatch(editorActions.resetAddNode())
}

/********************************
*             Edges             *
*********************************/

export const getAllEdgesOfBoard = (id) => {
  dispatch(editorActions.loadEdges());
  return getEdgesUsingBoardIdService(id)
    .then((res) => {
      console.log('getAll edges of a board response: ', res)
      dispatch(editorActions.loadEdgesSuccess(res.data));
      return res;
    })
    .catch((err) => {
      dispatch(editorActions.loadEdgesFail());
      console.error('getAll edges of error: ', err);
    })
}

export const createNewEdgeInBoard = (params) => {
  dispatch(editorActions.addEdgeLoading());
  return createNewEdgeInBoardService(params)
    .then((res) => {
      let { data } = res;
      console.log('create New edge in a Board Res: ', res)
      dispatch(editorActions.addEdgeSuccess(data));
      return res;
    })
    .catch((err) => {
      dispatch(editorActions.addEdgeFail())
      console.error('createNewBoard error: ', err)
    })
}

export const resetAddEdge = () => {
  dispatch(editorActions.resetAddEdge())
}

// set selected node
export const setSelectedNode = (node) => {
  dispatch(editorActions.setSelectedNode(node));
}

// reset selected node
export const resetSelectedNode = () => {
  dispatch(editorActions.resetSelectedNode());
}
