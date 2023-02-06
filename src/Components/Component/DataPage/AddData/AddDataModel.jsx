import { React, useState } from "react";
import { Modal } from "antd";
import CloseIcon from "../../../Assets/svgIcon/Closeicon";
import FileIcon from "../../../Assets/svgIcon/FileIcon";
import ActiveTabBottomLine from "../../../Assets/svgIcon/ActiveTabBottomLine";

import LinkIcon from "../../../Assets/svgIcon/LinkIcon";
import { Input } from "antd";
import GridIcon from "../../../Assets/svgIcon/GridIcon";
import FolderIcon from "../../../Assets/svgIcon/FolderIcon";
import ExcelFile1Icon from "../../../Assets/svgIcon/ExcelFile1Icon";
import VerticalDotsIcon from "../../../Assets/svgIcon/VerticalDotsIcon";
import { DeleteOutlined, EyeOutlined } from "@ant-design/icons";
import DeleteDialog from "../../DeleteDialog/DeleteDialog";
import GoBackButton from "../../../Assets/svgIcon/GoBackButton";

function AddDataModel(props) {
  const [isActive1, SetIsActive1] = useState(false);
  const [isActive2, SetIsActive2] = useState(false);
  const [isActive3, SetIsActive3] = useState(false);
  const [isActive4, SetIsActive4] = useState(false);
  const [isActive5, SetIsActive5] = useState(false);
  const [hidden, setHidden] = useState(true);
  const [ShowTableDetail, setShowTableDetail] = useState(true);
  const [AllDataTableDetail, setAllDataTableDetail] = useState(false);
  const [opendeleteDialog, SetDeleteDialog] = useState(false);

  function CloseModel() {
    props.onHide(false);
  }
  function TableDetail() {
    setAllDataTableDetail(true);
    setShowTableDetail(false);
    setHidden(true);
  }
  function GoBackAllTable() {
    setAllDataTableDetail(false);
    setShowTableDetail(true);
  }
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
                    <button className="Add-btn d-flex align-center justify-center">
                      Add New
                    </button>
                  </div>
                  <div className="itemsListBox">
                    <button
                      className={isActive1 ? " activeListButton" : "listButton"}
                      onClick={async () => {
                        SetIsActive1(() => !isActive1);
                        SetIsActive2(false);
                        SetIsActive3(false);
                        SetIsActive4(false);
                        SetIsActive5(false);

                      }}
                    >
                      Order
                    </button>
                    <button
                      className={isActive2 ? " activeListButton" : "listButton"}
                      onClick={async () => {
                        SetIsActive2(() => !isActive2);
                        SetIsActive1(false);                        
                        SetIsActive5(false);                        
                        SetIsActive3(false);                        
                        SetIsActive4(false);                        

                      }}
                    >
                      Employees
                    </button>
                    <button
                      className={isActive3 ? " activeListButton" : "listButton"}
                      onClick={async () => {
                        SetIsActive3(() => !isActive3);
                        SetIsActive1(false);
                        SetIsActive2(false);
                        SetIsActive4(false);
                        SetIsActive4(false);
                      }}
                    >
                      Clients
                    </button>
                    <button
                      className={isActive4 ? " activeListButton" : "listButton"}
                      onClick={async () => {
                        SetIsActive4(() => !isActive4);
                        SetIsActive1(false);
                        SetIsActive2(false);
                        SetIsActive3(false);
                        SetIsActive5(false);
                      }}
                    >
                      Clients1
                    </button>
                    <button
                      className={isActive5 ? " activeListButton" : "listButton"}
                      onClick={async () => {
                        SetIsActive5(() => !isActive5);
                        SetIsActive1(false);
                        SetIsActive2(false);
                        SetIsActive3(false);
                        SetIsActive4(false);
                      }}
                    >
                      Clients2
                    </button>
                  </div>
                </div>
              </div>
              <div className="rightBarContent">
                <div className="Toolbar">
                  <div className="d-flex align-center">
                    <LinkIcon></LinkIcon>
                    <div style={{ marginLeft: "0.7%", fontSize: "20px" }}>
                      {" "}
                      Link{" "}
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
                        <tr style={{ borderBottom: "1px solid #C7C7C7" }}>
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
                              {/* ---------------- Dropdown menu */}
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
                                    onClick={() => SetDeleteDialog(true)}
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
                        </tr>
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
                            <GoBackButton></GoBackButton>
                          </button>
                          <div style={{ marginLeft: "2rem" }}>
                            <ExcelFile1Icon></ExcelFile1Icon>
                          </div>
                          <div
                            style={{ marginLeft: "1rem" }}
                            className="heading1"
                          >
                            Project 1 data
                          </div>
                        </div>
                      </div>
                      <table
                        style={{
                          borderCollapse: "collapse",
                          width: "100%",
                          marginTop: "3%",
                          border: "1px solid black",
                        }}
                      >
                        <tr>
                          <th style={{ width: "5%" }}>
                            <div className="tableHeading"> #</div>
                          </th>
                          <th style={{ width: "11.5%" }}>
                            <div className="tableHeading"> Name</div>
                          </th>
                          <th style={{ width: "11.5%" }}>
                            <div className="tableHeading"> Address</div>
                          </th>
                          <th style={{ width: "11.5%" }}>
                            <div className="tableHeading"> Location</div>
                          </th>
                          <th style={{ width: "11.5%" }}>
                            <div className="tableHeading"> Email</div>
                          </th>
                          <th style={{ width: "11.5%" }}>
                            <div className="tableHeading"> phone number</div>
                          </th>
                          <th style={{ width: "11.5%" }}>
                            <div className="tableHeading"> Product</div>
                          </th>
                          <th style={{ width: "11.5%" }}>
                            <div className="tableHeading"> Product ID</div>
                          </th>
                        </tr>
                        <tbody>
                          <tr>
                            <th style={{ width: "5%" }}>
                              <div className="tabledata"> 1</div>
                            </th>
                            <th style={{ width: "11.5%" }}>
                              <div className="tabledata"> John max</div>
                            </th>
                            <th style={{ width: "11.5%" }}>
                              <div className="tabledata"> 13 downtown</div>
                            </th>
                            <th style={{ width: "11.5%" }}>
                              <div className="tabledata"> Newyork</div>
                            </th>
                            <th style={{ width: "11.5%" }}>
                              <div className="tabledata"> Loop@gmail.com</div>
                            </th>
                            <th style={{ width: "11.5%" }}>
                              <div className="tabledata"> 3242 5263 346</div>
                            </th>
                            <th style={{ width: "11.5%" }}>
                              <div className="tabledata"> wireless case</div>
                            </th>
                            <th style={{ width: "11.5%" }}>
                              <div className="tabledata"> 834232144323</div>
                            </th>
                          </tr>
                          <tr>
                            <th style={{ width: "5%" }}>
                              <div className="tabledata"> 2</div>
                            </th>
                            <th style={{ width: "11.5%" }}>
                              <div className="tabledata"> John max</div>
                            </th>
                            <th style={{ width: "11.5%" }}>
                              <div className="tabledata"> 13 downtown</div>
                            </th>
                            <th style={{ width: "11.5%" }}>
                              <div className="tabledata"> Newyork</div>
                            </th>
                            <th style={{ width: "11.5%" }}>
                              <div className="tabledata"> Loop@gmail.com</div>
                            </th>
                            <th style={{ width: "11.5%" }}>
                              <div className="tabledata"> 3242 5263 346</div>
                            </th>
                            <th style={{ width: "11.5%" }}>
                              <div className="tabledata"> wireless case</div>
                            </th>
                            <th style={{ width: "11.5%" }}>
                              <div className="tabledata"> 834232144323</div>
                            </th>
                          </tr>
                          <tr>
                            <th style={{ width: "5%" }}>
                              <div className="tabledata"> 3</div>
                            </th>
                            <th style={{ width: "11.5%" }}>
                              <div className="tabledata"> John max</div>
                            </th>
                            <th style={{ width: "11.5%" }}>
                              <div className="tabledata"> 13 downtown</div>
                            </th>
                            <th style={{ width: "11.5%" }}>
                              <div className="tabledata"> Newyork</div>
                            </th>
                            <th style={{ width: "11.5%" }}>
                              <div className="tabledata"> Loop@gmail.com</div>
                            </th>
                            <th style={{ width: "11.5%" }}>
                              <div className="tabledata"> 3242 5263 346</div>
                            </th>
                            <th style={{ width: "11.5%" }}>
                              <div className="tabledata"> wireless case</div>
                            </th>
                            <th style={{ width: "11.5%" }}>
                              <div className="tabledata"> 834232144323</div>
                            </th>
                          </tr>
                          <tr>
                            <th style={{ width: "5%" }}>
                              <div className="tabledata"> 4</div>
                            </th>
                            <th style={{ width: "11.5%" }}>
                              <div className="tabledata"> John max</div>
                            </th>
                            <th style={{ width: "11.5%" }}>
                              <div className="tabledata"> 13 downtown</div>
                            </th>
                            <th style={{ width: "11.5%" }}>
                              <div className="tabledata"> Newyork</div>
                            </th>
                            <th style={{ width: "11.5%" }}>
                              <div className="tabledata"> Loop@gmail.com</div>
                            </th>
                            <th style={{ width: "11.5%" }}>
                              <div className="tabledata"> 3242 5263 346</div>
                            </th>
                            <th style={{ width: "11.5%" }}>
                              <div className="tabledata"> wireless case</div>
                            </th>
                            <th style={{ width: "11.5%" }}>
                              <div className="tabledata"> 834232144323</div>
                            </th>
                          </tr>
                        </tbody>
                      </table>
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
        show={opendeleteDialog}
        onHide={() => {
          SetDeleteDialog(false);
        }}
      ></DeleteDialog>
    </div>
  );
}

export default AddDataModel;
