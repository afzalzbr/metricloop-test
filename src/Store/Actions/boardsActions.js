import { actions as boardActions } from '../Slices/boardsSlice';
import { store } from '../index';
import { createNewBoardService, getBoardsService } from '../../Services/BoardsService';

const dispatch = store.dispatch;

export const getAllBoards = () => {
  dispatch(boardActions.load());
  getBoardsService()
    .then((res) => {
      console.log('getAllBoards response: ', res)
    })
    .catch((err) => {
      console.error('getAllBoards error: ', err);
    })
}

export const createNewBoard = (params) => {
  dispatch(boardActions.addLoading());
  createNewBoardService(params)
    .then((res) => {
      let { data } = res;
      console.log('createNewBoard Res: ', res)
      dispatch(boardActions.addSuccess(data))
    })
    .catch((err) => {
      dispatch(boardActions.addFail())
      console.error('createNewBoard error: ', err)
    })
}

export const resetAddBoard = () => {
  dispatch(boardActions.resetAddBoard())
}