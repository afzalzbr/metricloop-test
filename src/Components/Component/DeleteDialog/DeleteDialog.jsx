import { React } from "react";
import { Modal } from "antd";
import BlackCloseIcon from "../../Assets/svgIcon/BlackCloseIcon";
import OutlineDeleteIcon from "../../Assets/svgIcon/OutlineDeleteIcon";
import Swal from "sweetalert2";

function DeleteDialog(props) {
  function CloseModel() {
    props.onHide(false);
  }
  function submit() {
    props.onConfirm && props.onConfirm();
    // CloseModel();
    // Swal.fire({
    //   position: "top-end",
    //   icon: "success",
    //   title: "Delete successfully",
    //   showConfirmButton: false,
    //   timer: 1500,
    //   toast: true,
    // });
  }
  return (
    <div className="DeleteModelStyle">
      <Modal
        open={props.show}
        closeIcon={<BlackCloseIcon />}
        onCancel={CloseModel}
        centered
        footer={null}
      >
        <div className="DeleteModelStyle">
          <div className="d-flex justify-center" style={{ marginTop: "4%" }}>
            <OutlineDeleteIcon></OutlineDeleteIcon>
          </div>
          <div
            className="d-flex justify-center"
            style={{ marginTop: "1%", marginBottom: "2%" }}
          >
            <div className="heading1">Are you sure?</div>
          </div>
          <div className="d-flex justify-center">
            <div className="subtext">
              Do you really want to delete this chart?
            </div>
          </div>
          <div className="d-flex justify-center">
            <div className="subtext">This process cannot be undone.</div>
          </div>
          <div
            className="d-flex justify-center"
            style={{ marginTop: "7%", marginBottom: "3%" }}
          >
            <button
              className={`cancelButton ${props?.loading ? "disabled" : ""}`}
              onClick={CloseModel}
            >
              Cancel
            </button>
            <button
              className={`DeleteButton ${props?.loading ? "disabled" : ""}`}
              onClick={submit}
            >
              Delete
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default DeleteDialog;
