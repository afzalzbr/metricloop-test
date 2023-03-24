import React, { useEffect, useState } from "react";
import { Modal, Input, Select } from "antd";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";

import SmallCloseIcon from "../../../Assets/svgIcon/SmallCloseIcon";

import { resetAddNode } from "../../../../store/Actions/editorActions";

const OPTIONS = [
  {
    value: "standard",
    label: "Standard",
  },
  {
    value: "single",
    label: "Single",
  },
  {
    value: "multi",
    label: "Multi",
  },
  {
    value: "decision",
    label: "Decision",
  },
];

const initialState = {
  node_name: "",
  node_style: "",
  node_description: "",
};

const AddNewNode = (props) => {
  const { onCreateNode, show, onHide } = props;
  const [state, setState] = useState(initialState);
  const [error, setError] = useState(false);
  const addNodeLoading = useSelector((state) => state.editor.addNode.loading);
  const addNodeSuccess = useSelector((state) => state.editor.addNode.success);
  const addNodeFail = useSelector((state) => state.editor.addNode.fail);

  const CloseModel = () => {
    onHide && onHide();
  };

  const handleOnChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setState((state) => ({ ...state, [name]: value }));
  };

  const onDropdownChange = (value, name) => {
    setState((state) => ({ ...state, [name]: value }));
  };

  const handleSubmit = () => {
    console.log("state", state);
    if (state.node_name === "" || state.node_style === "") {
      setError(true);
      return;
    }
    if (onCreateNode) onCreateNode({ ...state });
  };

  useEffect(() => {
    if (addNodeSuccess) {
      CloseModel();
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Node created successfully",
        showConfirmButton: false,
        timer: 1500,
        toast: true,
      });
      if (props?.onSuccess) props?.onSuccess();
      setTimeout(() => {
        resetAddNode();
        CloseModel();
      }, 1500);
      setState(initialState);
    } else if (addNodeFail) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Board not created",
        showConfirmButton: false,
        timer: 1500,
        toast: true,
      });
      setTimeout(() => {
        resetAddNode();
      }, 1500);
      setState(initialState);
    }
  }, [addNodeLoading, addNodeFail]);

  return (
    <Modal
      title=""
      open={show}
      centered
      closeIcon={<SmallCloseIcon />}
      onCancel={CloseModel}
      footer={null}
    >
      <div className="Homepage">
        <div className="AddModel">
          {error && <div style={{ color: "red" }}>Enter data the fields!</div>}
          <div className="spantext">Node Name</div>
          <Input
            style={{ marginTop: "3%", background: "#EBEBEB" }}
            value={state.node_name}
            onChange={handleOnChange}
            name="node_name"
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
            value={state.node_style}
            name="node_style"
            onChange={(value) => onDropdownChange(value, "node_style")}
          />
          <div
            className="d-flex align-center justify-end"
            style={{ marginTop: "11%" }}
          >
            <button
              disabled={addNodeLoading}
              className="btn-primary cancelbtn"
              onClick={CloseModel}
            >
              Cancel
            </button>
            <button
              className="btn-primary submit"
              disabled={addNodeLoading}
              onClick={handleSubmit}
            >
              Create new node
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default AddNewNode;
