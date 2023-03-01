import React, { useEffect, useState } from "react";
import { Modal, Input, Select } from "antd";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

import SmallCloseIcon from "../../Assets/svgIcon/SmallCloseIcon";

import {
  createNewBoard,
  resetAddBoard,
} from "../../../Store/Actions/boardsActions";

const OPTIONS = [
  {
    value: "Not Identified",
    label: "Not Identified",
  },
  {
    value: "Closed",
    label: "Closed",
  },
  {
    value: "Communicated",
    label: "Communicated",
  },
  {
    value: "Identified",
    label: "Identified",
  },
  {
    value: "Resolved",
    label: "Resolved",
  },
  {
    value: "Cancelled",
    label: "Cancelled",
  },
];

const initialState = {
  board_name: "",
  board_type: "",
  industry: "",
};

const AddNewBoard = (props) => {
  const [state, setState] = useState(initialState);
  const addBoardLoading = useSelector((state) => state.boards.addLoading);
  const addBoardSuccess = useSelector((state) => state.boards.addSuccess);
  const addBoardFail = useSelector((state) => state.boards.addFail);

  const CloseModel = () => {
    props.onHide(false);
  };

  const navigate = useNavigate();

  const handleOnChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setState((state) => ({ ...state, [name]: value }));
  };

  const onDropdownChange = (value, name) => {
    setState((state) => ({ ...state, [name]: value }));
  };

  const handleSubmit = () => {
    createNewBoard(state, redirectToBoards);
    navigate("/board");
  };

  const redirectToBoards = () => {
    // let route = window.location.pathname;
    // if (route === "/") {
    //   navigate("/board");
    // }
  };

  useEffect(() => {
    if (addBoardSuccess) {
      navigate("/board");
      CloseModel();
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Board created successfully",
        showConfirmButton: false,
        timer: 1500,
        toast: true,
      });
      if (props?.onSuccess) props?.onSuccess();
      setTimeout(() => {
        resetAddBoard();
        CloseModel();
      }, 1500);
      setState(initialState);
    } else if (addBoardFail) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Board not created",
        showConfirmButton: false,
        timer: 1500,
        toast: true,
      });
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
          <div className="spantext">Board Name</div>
          <Input
            style={{ marginTop: "3%", background: "#EBEBEB" }}
            value={state.board_name}
            onChange={handleOnChange}
            name="board_name"
          />
          <div className="spantext">Type</div>
          <Select
            showSearch
            style={{ width: "100%", marginTop: "3%" }}
            optionFilterProp="children"
            filterOption={(input, option) =>
              (option?.label ?? "").includes(input)
            }
            filterSort={(optionA, optionB) =>
              (optionA?.label ?? "")
                .toLowerCase()
                .localeCompare((optionB?.label ?? "").toLowerCase())
            }
            options={OPTIONS}
            value={state.board_type}
            name="board_type"
            onChange={(value) => onDropdownChange(value, "board_type")}
          />
          <div className="spantext">
            How are you planning to use Metricloop?
          </div>
          <Select
            showSearch
            style={{ width: "100%", marginTop: "3%" }}
            optionFilterProp="children"
            filterOption={(input, option) =>
              (option?.label ?? "").includes(input)
            }
            filterSort={(optionA, optionB) =>
              (optionA?.label ?? "")
                .toLowerCase()
                .localeCompare((optionB?.label ?? "").toLowerCase())
            }
            options={OPTIONS}
            value={state.industry}
            name="industry"
            onChange={(value) => onDropdownChange(value, "industry")}
          />
          <div
            className="d-flex align-center justify-end"
            style={{ marginTop: "11%" }}
          >
            <button
              disabled={addBoardLoading}
              className="btn-primary cancelbtn"
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
