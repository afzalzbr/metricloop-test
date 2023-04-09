import React, { useEffect, useState } from 'react';
import { Modal, Input } from 'antd';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import SmallCloseIcon from '../../Assets/svgIcon/SmallCloseIcon';

import {
  createNewBoard,
  resetAddBoard,
} from '../../../store/Actions/boardsActions';
import useSweetAlert from '../../../hooks/useSweetAlert';

const initialState = {
  board_name: '',
  // board_type: '',
  industry: '',
};


const AddNewBoard = (props) => {
  const [state, setState] = useState(initialState);
  const addBoardLoading = useSelector((state) => state.boards.addLoading);
  const addBoardSuccess = useSelector((state) => state.boards.addSuccess);
  const addBoardFail = useSelector((state) => state.boards.addFail);

  // sweet alert hook
  const showAlert = useSweetAlert();

  const CloseModel = () => {
    props.onHide(false);
  };

  const navigate = useNavigate();

  const handleOnChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setState((state) => ({ ...state, [name]: value }));
  };

  const handleSubmit = () => {
    createNewBoard(state).then(() => {
      if (window.location.pathname === '/') {
        navigate('/board');
      }
    });
  };

  useEffect(() => {
    if (addBoardSuccess) {
      navigate('/board');
      CloseModel();
      showAlert('success', { title: 'Board created successfully' });
      if (props?.onSuccess) props?.onSuccess();
      setTimeout(() => {
        resetAddBoard();
        CloseModel();
      }, 1500);
      setState(initialState);
    } else if (addBoardFail) {
      showAlert('error', { title: 'Board not created' });
      setTimeout(() => {
        resetAddBoard();
      }, 1500);
      setState(initialState);
    }
  }, [addBoardSuccess, addBoardFail]);

  return (
    <Modal
      title=""
      open={props.show}
      centered
      closeIcon={<SmallCloseIcon />}
      onCancel={CloseModel}
      footer={null}
    >
      <div className="Homepage">
        <div className="AddModel">
          <div className="span-text">Board Name</div>
          <Input
            style={{ marginTop: '3%', background: '#EBEBEB' }}
            value={state.board_name}
            onChange={handleOnChange}
            name="board_name"
          />
          <div className="span-text">Description</div>
          <Input.TextArea
            className="input-textarea"
            style={{ marginTop: '3%', background: '#EBEBEB' }}
            value={state.industry}
            onChange={handleOnChange}
            name="industry"
            maxLength={100}
            autoSize={{ minRows: 2, maxRows: 8 }}
            showCount
          />
          <div
            className="d-flex align-center justify-end"
            style={{ marginTop: '11%' }}
          >
            <button
              disabled={addBoardLoading}
              className="btn-primary cancel-btn"
              onClick={CloseModel}
            >
              Cancel
            </button>
            <button
              className="btn-primary submit"
              disabled={addBoardLoading}
              onClick={handleSubmit}
            >
              Create new board
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default AddNewBoard;
