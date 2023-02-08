import { actions as boardActions } from '../Slices/boardsSlice';
import { store } from '../index';
import { getBoardsService } from '../../Services/BoardsService';

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