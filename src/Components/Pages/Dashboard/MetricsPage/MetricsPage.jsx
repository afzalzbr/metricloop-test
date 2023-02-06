import { Checkbox, Pagination, Input } from "antd";
import { Button, Modal } from "antd";
import DeleteIcon from "../../../Assets/svgIcon/Deleteicon";
import PencilIcon from "../../../Assets/svgIcon/pencilicon";
import React, { useState } from "react";
import DeleteDialog from "../../../Component/DeleteDialog/DeleteDialog";
import AddMatricModel from "../../../Component/Metrics/AddMatric/AddMatricModel";
import EditMatricModel from "../../../Component/Metrics/EditMatric/EditMatricModel";
import CloseIcon from "../../../Assets/svgIcon/Closeicon";

function MatricsPage() {
  const [openAddModel, setAddModelOpen] = useState(false);
  const [openEditModel, setEditModelOpen] = useState(false);
  const [opendeleteDialog, SetDeleteDialog] = useState(false);

  return (
    <div className="MatricsPage">
      <div className="d-flex justify-space-between">
        <div className="heading1">Metrics</div>
        <button
          className="btn-primary"
          onClick={() => {
            setAddModelOpen(true);
          }}
        >
          Create Metric
        </button>
      </div>
      <div style={{ marginTop: "2%", maxWidth: "30%" }}>
        <div
          className="table-data d-flex"
          style={{ fontSize: "1.6rem", marginBottom: "2%", color: "#4E46DC" }}
        >
          <b> Search </b>
        </div>
        <Input placeholder="Search" />
      </div>
      {/* ------------------ Data table ----------------- */}
      <table
        className="w-100"
        style={{
          borderCollapse: "collapse",
          marginTop: "2%",
          marginBottom: "3%",
        }}
      >
        <tr style={{ background: "#4E46DC" }}>
          <td style={{ width: "5%", paddingTop: "3%" }}></td>
          <td style={{ width: "16%" }}>
            <div className="table-heading d-flex justify-center"> Name </div>
          </td>
          <td style={{ width: "16%" }}>
            <div className="table-heading  d-flex justify-center">
              Data points
            </div>
          </td>
          <td style={{ width: "16%" }}>
            <div className="table-heading  d-flex justify-center">
              Created date
            </div>
          </td>
          <td style={{ width: "16%" }}>
            <div className="table-heading  d-flex justify-center">
              Date Modified
            </div>
          </td>
          <td style={{ width: "27%" }}>
            <div className="table-heading  d-flex justify-center">Actions </div>
          </td>
        </tr>
        <tbody>
          <tr style={{ border: "1px solid #F0F0F0" }}>
            <td style={{ paddingTop: "1%", paddingBottom: "1%" }}>
              <div className="d-flex justify-center">
                <Checkbox value="A"></Checkbox>
              </div>
            </td>
            <td style={{ paddingTop: "1%", paddingBottom: "1%" }}>
              <div className="table-data d-flex justify-center ">Age Data</div>
            </td>
            <td style={{ paddingTop: "1%", paddingBottom: "1%" }}>
              <div className="table-data d-flex justify-center ">
                2 Data Points
              </div>
            </td>
            <td style={{ paddingTop: "1%", paddingBottom: "1%" }}>
              <div className="table-data d-flex justify-center ">12/5/2022</div>
            </td>
            <td style={{ paddingTop: "1%", paddingBottom: "1%" }}>
              <div className="table-data d-flex justify-center ">12/6/2022</div>
            </td>
            <td style={{ paddingTop: "1%", paddingBottom: "1%" }}>
              <div className="d-flex justify-center">
                <Button
                  type="text"
                  onClick={() => {
                    setEditModelOpen(true);
                  }}
                >
                  <PencilIcon></PencilIcon>
                </Button>
                <Button
                  type="text"
                  style={{ marginTop: "-1%" }}
                  onClick={() => SetDeleteDialog(true)}
                >
                  <DeleteIcon></DeleteIcon>
                </Button>
              </div>
            </td>
          </tr>
          <tr style={{ border: "1px solid #F0F0F0" }}>
            <td style={{ paddingTop: "1%", paddingBottom: "1%" }}>
              <div className="d-flex justify-center">
                <Checkbox value="A"></Checkbox>
              </div>
            </td>
            <td style={{ paddingTop: "1%", paddingBottom: "1%" }}>
              <div className="table-data d-flex justify-center ">Age Data</div>
            </td>
            <td style={{ paddingTop: "1%", paddingBottom: "1%" }}>
              <div className="table-data d-flex justify-center ">
                2 Data Points
              </div>
            </td>
            <td style={{ paddingTop: "1%", paddingBottom: "1%" }}>
              <div className="table-data d-flex justify-center ">12/5/2022</div>
            </td>
            <td style={{ paddingTop: "1%", paddingBottom: "1%" }}>
              <div className="table-data d-flex justify-center ">12/6/2022</div>
            </td>
            <td style={{ paddingTop: "1%", paddingBottom: "1%" }}>
              <div className="d-flex justify-center">
                <Button
                  type="text"
                  onClick={() => {
                    setEditModelOpen(true);
                  }}
                >
                  <PencilIcon></PencilIcon>
                </Button>
                <Button
                  type="text"
                  style={{ marginTop: "-1%" }}
                  onClick={() => SetDeleteDialog(true)}
                >
                  <DeleteIcon></DeleteIcon>
                </Button>
              </div>
            </td>
          </tr>
          <tr style={{ border: "1px solid #F0F0F0" }}>
            <td style={{ paddingTop: "1%", paddingBottom: "1%" }}>
              <div className="d-flex justify-center">
                <Checkbox value="A"></Checkbox>
              </div>
            </td>
            <td style={{ paddingTop: "1%", paddingBottom: "1%" }}>
              <div className="table-data d-flex justify-center ">Age Data</div>
            </td>
            <td style={{ paddingTop: "1%", paddingBottom: "1%" }}>
              <div className="table-data d-flex justify-center ">
                2 Data Points
              </div>
            </td>
            <td style={{ paddingTop: "1%", paddingBottom: "1%" }}>
              <div className="table-data d-flex justify-center ">12/5/2022</div>
            </td>
            <td style={{ paddingTop: "1%", paddingBottom: "1%" }}>
              <div className="table-data d-flex justify-center ">12/6/2022</div>
            </td>
            <td style={{ paddingTop: "1%", paddingBottom: "1%" }}>
              <div className="d-flex justify-center">
                <Button
                  type="text"
                  onClick={() => {
                    setEditModelOpen(true);
                  }}
                >
                  <PencilIcon></PencilIcon>
                </Button>
                <Button
                  type="text"
                  style={{ marginTop: "-1%" }}
                  onClick={() => SetDeleteDialog(true)}
                >
                  <DeleteIcon></DeleteIcon>
                </Button>
              </div>
            </td>
          </tr>
          <tr style={{ border: "1px solid #F0F0F0" }}>
            <td style={{ paddingTop: "1%", paddingBottom: "1%" }}>
              <div className="d-flex justify-center">
                <Checkbox value="A"></Checkbox>
              </div>
            </td>
            <td style={{ paddingTop: "1%", paddingBottom: "1%" }}>
              <div className="table-data d-flex justify-center ">Age Data</div>
            </td>
            <td style={{ paddingTop: "1%", paddingBottom: "1%" }}>
              <div className="table-data d-flex justify-center ">
                2 Data Points
              </div>
            </td>
            <td style={{ paddingTop: "1%", paddingBottom: "1%" }}>
              <div className="table-data d-flex justify-center ">12/5/2022</div>
            </td>
            <td style={{ paddingTop: "1%", paddingBottom: "1%" }}>
              <div className="table-data d-flex justify-center ">12/6/2022</div>
            </td>
            <td style={{ paddingTop: "1%", paddingBottom: "1%" }}>
              <div className="d-flex justify-center">
                <Button
                  type="text"
                  onClick={() => {
                    setEditModelOpen(true);
                  }}
                >
                  <PencilIcon></PencilIcon>
                </Button>
                <Button
                  type="text"
                  style={{ marginTop: "-1%" }}
                  onClick={() => SetDeleteDialog(true)}
                >
                  <DeleteIcon></DeleteIcon>
                </Button>
              </div>
            </td>
          </tr>
          <tr style={{ border: "1px solid #F0F0F0" }}>
            <td style={{ paddingTop: "1%", paddingBottom: "1%" }}>
              <div className="d-flex justify-center">
                <Checkbox value="A"></Checkbox>
              </div>
            </td>
            <td style={{ paddingTop: "1%", paddingBottom: "1%" }}>
              <div className="table-data d-flex justify-center ">Age Data</div>
            </td>
            <td style={{ paddingTop: "1%", paddingBottom: "1%" }}>
              <div className="table-data d-flex justify-center ">
                2 Data Points
              </div>
            </td>
            <td style={{ paddingTop: "1%", paddingBottom: "1%" }}>
              <div className="table-data d-flex justify-center ">12/5/2022</div>
            </td>
            <td style={{ paddingTop: "1%", paddingBottom: "1%" }}>
              <div className="table-data d-flex justify-center ">12/6/2022</div>
            </td>
            <td style={{ paddingTop: "1%", paddingBottom: "1%" }}>
              <div className="d-flex justify-center">
                <Button
                  type="text"
                  onClick={() => {
                    setEditModelOpen(true);
                  }}
                >
                  <PencilIcon></PencilIcon>
                </Button>
                <Button
                  type="text"
                  style={{ marginTop: "-1%" }}
                  onClick={() => SetDeleteDialog(true)}
                >
                  <DeleteIcon></DeleteIcon>
                </Button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      {/* ------------------ Pagination ----------------- */}
      <div className="d-flex justify-end">
        <Pagination
          total={85}
          showTotal={(total, range) =>
            `${range[0]}-${range[1]} of ${total} items`
          }
          defaultPageSize={20}
          defaultCurrent={1}
        />
      </div>
      {/* ------------------ Add Model ----------------- */}
      <Modal
        open={openAddModel}
        closeIcon={<CloseIcon />}
        onCancel={() => {
          setAddModelOpen(false);
        }}
        width={1800}
        footer={null}
      >
        <AddMatricModel
          onHide={() => {
            setAddModelOpen(false);
          }}
        ></AddMatricModel>
      </Modal>
      {/* ------------------ Edit Model ----------------- */}
      <Modal
        open={openEditModel}
        closeIcon={<CloseIcon />}
        onCancel={() => {
          setEditModelOpen(false);
        }}
        width={1800}
        footer={null}
      >
        <EditMatricModel
          onHide={() => {
            setEditModelOpen(false);
          }}
        ></EditMatricModel>
      </Modal>

      {/* ------------------ Delete Model ----------------- */}
      <DeleteDialog
        show={opendeleteDialog}
        onHide={() => {
          SetDeleteDialog(false);
        }}
      ></DeleteDialog>
    </div>
  );
}

export default MatricsPage;
