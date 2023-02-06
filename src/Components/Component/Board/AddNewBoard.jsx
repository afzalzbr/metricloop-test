import { React } from "react";
import { Modal, Input, Select } from "antd";
import SmallCloseIcon from "../../Assets/svgIcon/SmallCloseIcon";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function AddNewBoard(props) {
  function CloseModel() {
    props.onHide(false);
  }
  const navigate = useNavigate();
  function submit() {
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
    setTimeout(() => {
      window.location.reload();
    }, 1500);
  }
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
          <Input style={{ marginTop: "3%", background: "#EBEBEB" }}></Input>
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
            options={[
              {
                value: "1",
                label: "Not Identified",
              },
              {
                value: "2",
                label: "Closed",
              },
              {
                value: "3",
                label: "Communicated",
              },
              {
                value: "4",
                label: "Identified",
              },
              {
                value: "5",
                label: "Resolved",
              },
              {
                value: "6",
                label: "Cancelled",
              },
            ]}
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
            options={[
              {
                value: "1",
                label: "Not Identified",
              },
              {
                value: "2",
                label: "Closed",
              },
              {
                value: "3",
                label: "Communicated",
              },
              {
                value: "4",
                label: "Identified",
              },
              {
                value: "5",
                label: "Resolved",
              },
              {
                value: "6",
                label: "Cancelled",
              },
            ]}
          />
          <div
            className="d-flex align-center justify-end"
            style={{ marginTop: "11%" }}
          >
            <button className=" btn-primary cancelbtn" onClick={CloseModel}>
              Cancel
            </button>
            <button className="btn-primary submit" onClick={submit}>
              Create new board
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default AddNewBoard;
