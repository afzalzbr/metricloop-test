import { Checkbox, Input } from "antd";
import { Button, Pagination } from "antd";
import DeleteIcon from "../../../Assets/svgIcon/Deleteicon";
import PencilIcon from "../../../Assets/svgIcon/pencilicon";
import React, { useEffect, useState } from "react";
import DeleteDialog from "../../../Component/DeleteDialog/DeleteDialog";
import AddDataModel from "../../../Component/DataPage/AddData/AddDataModel";
import EditDataModel from "../../../Component/DataPage/EditData/EditDataModel";
import { useSelector } from "react-redux";
import {
  deleteDataSource,
  getAllDataSources,
  resetCreateNewDataSource,
  resetDeleteDataSource,
} from "../../../../store/Actions/dataSourceActions";
import Swal from "sweetalert2";

const toastMessageConfig = {
  position: "top-end",
  showConfirmButton: false,
  timer: 1500,
  toast: true,
};

function DataPage() {
  // const [openEditModel, setEditModelOpen] = useState(false);
  const [openAddModel, setAddModelOpen] = useState(false);
  const [openEditModel, setEditModelOpen] = useState(false);
  const [opendeleteDialog, SetDeleteDialog] = useState(false);

  const [toBeDeletedId, setToBeDeletedId] = useState(null);

  const dataSources = useSelector((state) => state.dataSources.data);
  const dataSourcesLoading = useSelector((state) => state.dataSources.loading);

  const createNewDataSourceReducer = useSelector(
    (state) => state.dataSources.createNew
  );
  const updateDataSourceReducer = useSelector(
    (state) => state.dataSources.update
  );
  const deleteDataSourceReducer = useSelector(
    (state) => state.dataSources.delete
  );

  const createNewDataSourceLoading = createNewDataSourceReducer?.loading;
  const updateDataSourceLoading = updateDataSourceReducer?.loading;
  const deleteDataSourceLoading = deleteDataSourceReducer?.loading;

  const createNewDataSourceSuccess = createNewDataSourceReducer?.success;
  const updateDataSourceSuccess = updateDataSourceReducer?.success;
  const deleteDataSourceSuccess = deleteDataSourceReducer?.success;

  const createNewDataSourceError = createNewDataSourceReducer?.error;
  const updateDataSourceError = updateDataSourceReducer?.error;
  const deleteDataSourceError = deleteDataSourceReducer?.error;

  const createNewDataSourceFail = createNewDataSourceReducer?.fail;
  const updateDataSourceFail = updateDataSourceReducer?.fail;
  const deleteDataSourceFail = deleteDataSourceReducer?.fail;

  const handleClickDelete = (id) => {
    setToBeDeletedId(id);
    SetDeleteDialog(true);
  };

  const handleDeleteConfirm = () => {
    if (toBeDeletedId) {
      deleteDataSource(toBeDeletedId);
    }
  };

  useEffect(() => {
    if (deleteDataSourceSuccess) {
      Swal.fire({
        ...toastMessageConfig,
        icon: "success",
        title: "Delete successfully",
      });
      setToBeDeletedId(null);
      getAllDataSources();
      SetDeleteDialog(false);
      resetDeleteDataSource();
    } else if (deleteDataSourceError || deleteDataSourceFail) {
      Swal.fire({
        ...toastMessageConfig,
        icon: "error",
        title: "Delete failed",
      });
      setToBeDeletedId(null);
      SetDeleteDialog(false);
      resetDeleteDataSource();
    }
  }, [deleteDataSourceSuccess, deleteDataSourceError, deleteDataSourceFail]);

  useEffect(() => {
    if (createNewDataSourceSuccess) {
      Swal.fire({
        ...toastMessageConfig,
        icon: "success",
        title: "Create successfully",
      });
      setAddModelOpen(false);
      getAllDataSources();
      resetCreateNewDataSource();
    } else if (createNewDataSourceError || createNewDataSourceFail) {
      Swal.fire({
        ...toastMessageConfig,
        icon: "error",
        title: "Create failed",
      });
      resetCreateNewDataSource();
    }
  }, [
    createNewDataSourceSuccess,
    createNewDataSourceFail,
    createNewDataSourceError,
  ]);

  useEffect(() => {
    getAllDataSources();
    return () => {};
  }, []);

  const HEADER = [
    "Name",
    "Data Points",
    "Created date",
    "Date Modified",
    "Actions",
  ];
  const HEADER_KEYS = [
    "name",
    "dataPoints",
    "created_at",
    "updated_at",
    // "actions",
  ];

  return (
    <div className="DataPage">
      <div className="d-flex justify-space-between">
        <div className="heading1">Data</div>
        <button
          className="btn-primary"
          onClick={() => {
            setAddModelOpen(true);
          }}
        >
          Add Source
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
      {dataSourcesLoading ? (
        "Loading..."
      ) : (
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
            {HEADER.map((item, index) => (
              <td style={{ width: "16%" }}>
                <div className="table-heading"> {item} </div>
              </td>
            ))}
          </tr>
          <tbody>
            {dataSources?.map((item, index) => {
              return (
                <tr style={{ border: "1px solid #F0F0F0" }}>
                  <td style={{ paddingTop: "1%", paddingBottom: "1%" }}>
                    <Checkbox value="A"></Checkbox>
                  </td>
                  {HEADER_KEYS.map((key, index) => {
                    return (
                      <td style={{ paddingTop: "1%", paddingBottom: "1%" }}>
                        <div className="table-data">
                          {" "}
                          {key === "dataPoints" ? item[key] ?? 0 : item[key]}
                        </div>
                      </td>
                    );
                  })}
                  <td style={{ paddingTop: "1%", paddingBottom: "1%" }}>
                    <div>
                      {/* 
                        <Button
                          type="text"
                          onClick={() => setEditModelOpen(true)}
                        >
                          <PencilIcon />
                        </Button>
                       */}
                      <Button
                        type="text"
                        onClick={() => handleClickDelete(item["id"])}
                      >
                        <DeleteIcon />
                      </Button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
      {/* ------------------ Pagination ----------------- */}
      {/* {dataSourcesLoading ? null : (
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
      )} */}
      {/* ------------------ Add Modal ----------------- */}
      <AddDataModel
        show={openAddModel}
        onHide={() => {
          setAddModelOpen(false);
        }}
        addLoading={createNewDataSourceLoading}
      />
      {/* ------------------ Edit Modal ----------------- */}
      <EditDataModel
        show={openEditModel}
        onHide={() => {
          setEditModelOpen(false);
        }}
      />
      {/* ------------------ Delete Modal ----------------- */}
      <DeleteDialog
        show={opendeleteDialog}
        onHide={() => SetDeleteDialog(false)}
        onConfirm={handleDeleteConfirm}
        loading={deleteDataSourceLoading}
      />
    </div>
  );
}

export default DataPage;
