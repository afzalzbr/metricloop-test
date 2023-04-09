import { React, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Modal, Input } from "antd";

import CloseIcon from "../../../Assets/svgIcon/Closeicon";
import FileIcon from "../../../Assets/svgIcon/FileIcon";
import ActiveTabBottomLine from "../../../Assets/svgIcon/ActiveTabBottomLine";
import LinkIcon from "../../../Assets/svgIcon/LinkIcon";
import GridIcon from "../../../Assets/svgIcon/GridIcon";
import FolderIcon from "../../../Assets/svgIcon/FolderIcon";
import ExcelFile1Icon from "../../../Assets/svgIcon/ExcelFile1Icon";
import DeleteDialog from "../../DeleteDialog/DeleteDialog";
import GoBackButton from "../../../Assets/svgIcon/GoBackButton";

import {
  getAllSheets,
  getSelectedSheetData,
  getSelectedWorkSheetData,
  resetSelectedSheet,
} from "../../../../store/Actions/sheetsActions";

import TableRow from "./TableRow";
import { createNewDataSource } from "../../../../store/Actions/dataSourceActions";

function AddDataModel(props) {
  const [ShowTableDetail, setShowTableDetail] = useState(true);
  const [AllDataTableDetail, setAllDataTableDetail] = useState(false);
  const [openDeleteDialog, setDeleteDialog] = useState(false);

  const sheetsLoading = useSelector((state) => state.sheets.loading);
  const sheetsReducer = useSelector((state) => state.sheets.sheets);
  const selectedSheet = useSelector((state) => state.sheets.selectedSheet);
  const selectedWorksheet = useSelector(
    (state) => state.sheets.selectedSheet.selectedWorkSheet
  );

  const selectedSheetName = selectedSheet?.name;
  const worksheetsLoading = selectedSheet?.loading;
  const worksheetsReducer = selectedSheet?.worksheets;

  const selectedWorksheetName = selectedWorksheet?.name;
  const selectedWorksheetDataLoading = selectedWorksheet?.loading;
  const selectedWorksheetData = selectedWorksheet?.data;

  function CloseModel() {
    props.onHide(false);
    if (selectedSheetName) GoBackAllTable();
  }
  function TableDetail(sheetId, sheetName) {
    getSelectedSheetData(sheetId, sheetName);
    setAllDataTableDetail(true);
    setShowTableDetail(false);
  }
  function GoBackAllTable() {
    setAllDataTableDetail(false);
    setShowTableDetail(true);
    resetSelectedSheet();
  }

  function selectWorkSheet(name) {
    getSelectedWorkSheetData(selectedSheet.id, selectedSheet.name, name);
  }

  const handleAddNew = () => {
    createNewDataSource(selectedSheetName, selectedSheet.id);
  };

  useEffect(() => {
    if (
      selectedWorksheetData?.length === 0 &&
      worksheetsReducer?.length > 0 &&
      selectedSheetName
    ) {
      selectWorkSheet(worksheetsReducer[0]);
    }
  }, [selectedWorksheetData, worksheetsReducer, selectedSheetName]);

  useEffect(() => {
    getAllSheets();
    return () => {};
  }, []);

  return (
    <div>
      <Modal
        open={props.show}
        closeIcon={<CloseIcon />}
        onCancel={CloseModel}
        width={1800}
        footer={null}
      >
        <div className="DataPage">
          <div className="AddDialog">
            <div className="TopBar">
              <div
                className="d-flex align-center"
                style={{ position: "relative", marginLeft: "2%" }}
              >
                <div style={{ paddingLeft: "1%" }}>
                  <FileIcon></FileIcon>
                </div>
                <div className="heading1" style={{ marginLeft: "0.4%" }}>
                  Data
                </div>
                <div className="activeTabData">
                  <ActiveTabBottomLine></ActiveTabBottomLine>
                </div>
              </div>
            </div>
            <div className="contentBox">
              <div className="leftBarContent">
                <div className="ToolBox">
                  <div className="d-flex align-center justify-space-between  ">
                    <button
                      className={`Add-btn d-flex align-center justify-center ${
                        !selectedSheet.id || props.addLoading ? "disabled" : ""
                      }`}
                      onClick={handleAddNew}
                    >
                      Add New
                    </button>
                  </div>
                  <div className="itemsListBox">
                    {worksheetsLoading
                      ? "Loading work sheets..."
                      : worksheetsReducer.map((worksheet) => (
                          <button
                            className={
                              worksheet === selectedWorksheetName
                                ? " activeListButton"
                                : "listButton"
                            }
                            onClick={() => {
                              selectWorkSheet(worksheet);
                            }}
                          >
                            {worksheet}
                          </button>
                        ))}
                  </div>
                </div>
              </div>
              <div className="rightBarContent">
                <div className="Toolbar">
                  <div className="d-flex align-center">
                    <LinkIcon></LinkIcon>
                    <div style={{ marginLeft: "0.7%", fontSize: "20px" }}>
                      Link
                    </div>
                    <div style={{ marginLeft: "1.6%" }}>
                      <Input
                        placeholder="https://docs.google.com/spreadsheets/u/0/"
                        allowClear
                        className="inputField"
                      />
                    </div>
                    <div style={{ marginLeft: "1.6%" }}>
                      <button className="searchButton">
                        <div className="text"> Search </div>
                      </button>
                    </div>
                  </div>
                </div>
                {/* ----------------------------Table list---------------------- */}
                {!AllDataTableDetail ? (
                  <div className="Datatable">
                    <table
                      style={{ borderCollapse: "collapse", width: "100%" }}
                    >
                      <tr>
                        <td style={{ width: "40%", paddingTop: "3%" }}>
                          <div className="tableHeading"> Previous 7 days</div>
                        </td>
                        <td style={{ width: "13%", paddingTop: "3%" }}>
                          <div className="tableHeading">Owned by anyone</div>
                        </td>
                        <td style={{ width: "13%", paddingTop: "3%" }}>
                          <div className="tableHeading">Last opened by me</div>
                        </td>
                        <td style={{ width: "13%", paddingTop: "3%" }}>
                          <div className="d-flex align-center justify-end">
                            <button className="iconButton">
                              <GridIcon></GridIcon>
                            </button>
                            <button
                              style={{ marginLeft: "0.8%" }}
                              className="iconButton"
                            >
                              <FolderIcon></FolderIcon>
                            </button>
                          </div>
                        </td>
                      </tr>
                      <tbody>
                        {sheetsLoading
                          ? "loading..."
                          : sheetsReducer.map((sheet) => (
                              <TableRow
                                id={sheet.id}
                                name={sheet.name}
                                handleDetails={TableDetail}
                                lastModified={sheet.last_modified_time}
                                ownedBy={sheet?.owner?.name}
                              />
                            ))}
                        {/* <tr style={{ borderBottom: "1px solid #C7C7C7" }}>
                          <td
                            style={{
                              width: "40%",
                              paddingTop: "2%",
                              paddingBottom: "2%",
                            }}
                          >
                            <div className="d-flex align-center">
                              <ExcelFile1Icon></ExcelFile1Icon>
                              <div
                                className="tabledataspan"
                                style={{ marginLeft: "1.3%" }}
                              >
                                Project 1 data.xlsx
                              </div>
                            </div>
                          </td>
                          <td
                            style={{
                              width: "13%",
                              paddingTop: "2%",
                              paddingBottom: "2%",
                            }}
                          >
                            <div className="tabledataspan">Metricloop</div>
                          </td>
                          <td
                            style={{
                              width: "13%",
                              paddingTop: "2%",
                              paddingBottom: "2%",
                            }}
                          >
                            <div className="tabledataspan">12,15,2022</div>
                          </td>
                          <td
                            style={{
                              width: "13%",
                              paddingTop: "2%",
                              paddingBottom: "2%",
                            }}
                          >
                            <div
                              className="d-flex align-center justify-end"
                              style={{ position: "relative" }}
                            >
                              <button
                                className="iconButton"
                                onClick={() => setHidden((s) => !s)}
                              >
                                <VerticalDotsIcon></VerticalDotsIcon>
                              </button>
                              {!hidden ? (
                                <div className="customDropDown">
                                  <button
                                    className="menuBtn"
                                    style={{ marginTop: "11%" }}
                                    onClick={TableDetail}
                                  >
                                    <div className="d-flex align-center justify-center">
                                      <EyeOutlined
                                        style={{ fontSize: "1rem" }}
                                      />
                                      <div style={{ marginLeft: "11%" }}>
                                        Detail
                                      </div>
                                    </div>
                                  </button>
                                  <button
                                    className="menuBtn"
                                    style={{ marginBottom: "11%" }}
                                    onClick={() => setDeleteDialog(true)}
                                  >
                                    <div className="d-flex align-center justify-center">
                                      <DeleteOutlined
                                        style={{ fontSize: "1rem" }}
                                      />
                                      <div style={{ marginLeft: "11%" }}>
                                        Delete
                                      </div>
                                    </div>
                                  </button>
                                </div>
                              ) : null}
                            </div>
                          </td>
                        </tr> */}
                      </tbody>
                    </table>
                  </div>
                ) : null}

                {/* ------------------------------detail data table-------------- */}
                {!ShowTableDetail ? (
                  <div className="SigalDataTableDetail">
                    <div className="Datatable">
                      <div className="d-flex align-center justify-space-between">
                        <div className="d-flex align-center">
                          <button
                            className="GoBackButton"
                            onClick={GoBackAllTable}
                          >
                            <GoBackButton />
                          </button>
                          <div style={{ marginLeft: "2rem" }}>
                            <ExcelFile1Icon />
                          </div>
                          <div
                            style={{ marginLeft: "1rem" }}
                            className="heading1"
                          >
                            {selectedSheetName}
                          </div>
                        </div>
                      </div>
                      {selectedWorksheetDataLoading || worksheetsLoading ? (
                        "Loading..."
                      ) : selectedWorksheetData.length > 0 ? (
                        <table
                          style={{
                            borderCollapse: "collapse",
                            width: "100%",
                            marginTop: "3%",
                            border: "1px solid black",
                          }}
                        >
                          {/* <th style={{ width: "5%" }}>
                                <div className="tableHeading"> #</div>
                              </th> */}
                          <tr>
                            {selectedWorksheetData[0].map((header) => (
                              <th style={{ width: "11.5%" }}>
                                <div className="tableHeading">{header}</div>
                              </th>
                            ))}
                          </tr>
                          <tbody>
                            {selectedWorksheetData
                              .slice(1)
                              .map((row, index) => (
                                <tr>
                                  {row.map((cell) => (
                                    <th style={{ width: "11.5%" }}>
                                      <div className="tabledata"> {cell}</div>
                                    </th>
                                  ))}
                                </tr>
                              ))}
                          </tbody>
                        </table>
                      ) : (
                        "No data"
                      )}
                    </div>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </Modal>
      {/* ---------------------Delete MOdel */}
      <DeleteDialog
        show={openDeleteDialog}
        onHide={() => {
          setDeleteDialog(false);
        }}
      ></DeleteDialog>
    </div>
  );
}

export default AddDataModel;
