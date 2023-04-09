import { React, useEffect, useState } from "react";
import {
  Modal,
  Input,
  Pagination,
  Checkbox,
  Button,
  Row,
  Col,
  Select,
} from "antd";
import SmallCloseIcon from "../../../Assets/svgIcon/SmallCloseIcon";
import ActiveTabBottomLine from "../../../Assets/svgIcon/ActiveTabBottomLine";
import FileIcon from "../../../Assets/svgIcon/FileIcon";
import SignalIcon from "../../../Assets/svgIcon/Signalicon";
import { DeleteOutlined, EyeOutlined } from "@ant-design/icons";
import LinkIcon from "../../../Assets/svgIcon/LinkIcon";
import GridIcon from "../../../Assets/svgIcon/GridIcon";
import FolderIcon from "../../../Assets/svgIcon/FolderIcon";
import ExcelFile1Icon from "../../../Assets/svgIcon/ExcelFile1Icon";
import VerticalDotsIcon from "../../../Assets/svgIcon/VerticalDotsIcon";
import GoBackButton from "../../../Assets/svgIcon/GoBackButton";
import DeleteDialog from "../../DeleteDialog/DeleteDialog";
import PencilIcon from "../../../Assets/svgIcon/pencilicon";
import DeleteIcon from "../../../Assets/svgIcon/Deleteicon";

function EditorView(props) {
  const [dataSection, setDataSection] = useState(true);
  const [metricSection, setMetricSection] = useState(false);
  const [addMetricSection, setAddMetricSection] = useState(false);
  const [addSegmentSection, setAddSegmentSection] = useState(false);
  const [segmentSection, setSegmentSection] = useState(false);
  const [isActive1, SetIsActive1] = useState(false);
  const [isActive2, SetIsActive2] = useState(false);
  const [isActive3, SetIsActive3] = useState(false);
  const [isActive4, SetIsActive4] = useState(false);
  const [isActive5, SetIsActive5] = useState(false);
  const [hidden, setHidden] = useState(true);
  const [ShowTableDetail, setShowTableDetail] = useState(true);
  const [AllDataTableDetail, setAllDataTableDetail] = useState(false);
  const [opendeleteDialog, SetDeleteDialog] = useState(false);
  const [segmentCheckBoxActive, setSegmentCheckBoxActive] = useState(false);
  const [metricCheckBoxActive1, setMetricCheckBoxActive1] = useState(false);
  const [metricCheckBoxActive2, setMetricCheckBoxActive2] = useState(false);
  const [metricCheckBoxActive3, setMetricCheckBoxActive3] = useState(false);

  useEffect(() => {
    console.log("checkbox => ", segmentCheckBoxActive);
  });

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
    <div className="EditorLayoutStyle">
      <Modal
        open={props.show}
        closeIcon={<SmallCloseIcon />}
        onCancel={CloseModel}
        centered
        width={1800}
        className="EditorLayoutStyle"
        footer={null}
      >
        <div className="EditorViewBox">
          {/* ------------------ TopBar----------- */}
          <div className="TopBar">
            <div className="headingTab">
              <div
                className="d-flex align-center"
                onClick={() => {
                  setDataSection(true);
                  setMetricSection(false);
                  setSegmentSection(false);
                  setAddMetricSection(false);
                  setAddSegmentSection(false);
                }}
                style={{
                  position: "relative",
                  marginLeft: "2%",
                  cursor: "pointer",
                }}
              >
                <div style={{ paddingLeft: "1rem" }}>
                  <FileIcon></FileIcon>
                </div>
                <div className="heading1" style={{ marginLeft: "0.5rem" }}>
                  Data
                </div>
                <div className="activeTabData">
                  {dataSection ? (
                    <ActiveTabBottomLine></ActiveTabBottomLine>
                  ) : null}
                </div>
              </div>
              <div
                onClick={() => {
                  setDataSection(false);
                  setMetricSection(true);
                  setSegmentSection(false);
                  setAddSegmentSection(false);
                }}
                className="d-flex align-center"
                style={{
                  position: "relative",
                  marginLeft: "2%",
                  cursor: "pointer",
                }}
              >
                <div style={{ paddingLeft: "1rem" }}>
                  <SignalIcon></SignalIcon>
                </div>
                <div className="heading1" style={{ marginLeft: "0.5rem" }}>
                  Metric
                </div>
                <div className="activeTabData">
                  {metricSection ? (
                    <ActiveTabBottomLine></ActiveTabBottomLine>
                  ) : null}
                </div>
              </div>
              <div
                className="d-flex align-center"
                onClick={() => {
                  setDataSection(false);
                  setMetricSection(false);
                  setSegmentSection(true);
                  setAddMetricSection(false);
                }}
                style={{
                  position: "relative",
                  marginLeft: "2%",
                  cursor: "pointer",
                }}
              >
                <div style={{ paddingLeft: "0.3rem" }}>
                  <svg
                    width="21"
                    height="21"
                    viewBox="0 0 21 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.575 6.44994C19.3314 6.69383 19.042 6.88719 18.7234 7.01892C18.4049 7.15065 18.0635 7.21815 17.7188 7.21754C17.5076 7.21755 17.2971 7.19225 17.0919 7.1422L14.9075 11.1989C14.9323 11.2219 14.9571 11.2448 14.9812 11.2689C15.3283 11.6161 15.5711 12.0536 15.682 12.5319C15.7929 13.0102 15.7675 13.51 15.6086 13.9745C15.4497 14.439 15.1637 14.8497 14.7831 15.1598C14.4025 15.47 13.9425 15.6672 13.4555 15.729C12.9684 15.7909 12.4738 15.7149 12.0278 15.5097C11.5817 15.3045 11.2022 14.9784 10.9322 14.5683C10.6623 14.1582 10.5127 13.6806 10.5006 13.1898C10.4885 12.699 10.6142 12.2146 10.8635 11.7917L9.20836 10.1365C8.61707 10.4832 7.91405 10.5861 7.2482 10.4234L5.06378 14.4801C5.08856 14.5031 5.11334 14.5261 5.13742 14.5501C5.50454 14.9172 5.75456 15.385 5.85586 15.8942C5.95716 16.4034 5.90519 16.9312 5.70652 17.4108C5.50785 17.8905 5.1714 18.3005 4.73972 18.5889C4.30804 18.8774 3.80052 19.0314 3.28134 19.0314C2.76216 19.0314 2.25463 18.8774 1.82294 18.589C1.39125 18.3006 1.05478 17.8906 0.856092 17.411C0.657399 16.9313 0.605403 16.4035 0.706679 15.8943C0.807955 15.3851 1.05795 14.9173 1.42506 14.5502L1.4251 14.5501C1.74455 14.231 2.14088 13.9997 2.57583 13.8784C3.01078 13.7571 3.46964 13.7501 3.90811 13.8579L6.09249 9.80128C6.06772 9.77829 6.04293 9.75534 6.01885 9.73127C5.52731 9.23859 5.25125 8.57106 5.25125 7.87512C5.25124 7.17917 5.52728 6.51164 6.01881 6.01895L6.01885 6.01887C6.47067 5.56711 7.07173 5.29564 7.70939 5.25533C8.34704 5.21502 8.9775 5.40864 9.48261 5.79991C9.98772 6.19117 10.3328 6.75322 10.4532 7.3807C10.5735 8.00819 10.4609 8.65803 10.1365 9.20844L11.7916 10.8636C12.3828 10.5166 13.086 10.4137 13.7519 10.5767L15.9362 6.52C15.9115 6.49705 15.8867 6.4741 15.8626 6.45003C15.3711 5.95736 15.095 5.28983 15.095 4.59388C15.095 3.89793 15.371 3.2304 15.8626 2.73771L15.8626 2.73763C16.355 2.24576 17.0225 1.96955 17.7185 1.96973C18.4145 1.9699 19.0819 2.24645 19.574 2.73857C20.0661 3.23068 20.3427 3.89809 20.3428 4.59405C20.343 5.29002 20.0668 5.95757 19.575 6.44995V6.44994Z"
                      fill="#4E46DC"
                    />
                  </svg>
                </div>
                <div className="heading1" style={{ marginLeft: "0.4rem" }}>
                  Segments
                </div>
                <div className="activeTabData">
                  {segmentSection ? (
                    <ActiveTabBottomLine></ActiveTabBottomLine>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
          {/* ------------------ Data section----------- */}
          {dataSection ? (
            <div className="DataSection">
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
                      Link
                    </div>
                    <div style={{ marginLeft: "1.6%", position: "relative" }}>
                      <Input
                        placeholder="https://docs.google.com/spreadsheets/u/0/"
                        allowClear
                        className="inputField"
                      />
                      <div
                        className="InvalidInputLink"
                        style={{ position: "absolute", bottom: "-2rem" }}
                      >
                        There seems to be a problem or change in the data sheet
                        connection.
                      </div>
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
          ) : null}

          {/* ------------------ Metric section----------- */}
          {metricSection ? (
            <div className="MetricSection">
              {/* ----------------- Add or Edit Section for Metric --- and data table section also----- */}
              {addMetricSection ? (
                <div className="ContentBox">
                  <Row gutter={{ xs: 8, sm: 16, md: 48, lg: 48 }}>
                    <Col md={8}>
                      <div
                        className="heading2"
                        style={{ marginBottom: "1.8%" }}
                      >
                        Metric Type
                      </div>
                      <div className="selectCustomStyle">
                        <Select
                          showSearch
                          bordered={false}
                          style={{ width: "100%" }}
                          optionFilterProp="children"
                          filterOption={(input, option) =>
                            (option?.label ?? "").includes(input)
                          }
                          filterSort={(optionA, optionB) =>
                            (optionA?.label ?? "")
                              .toLowerCase()
                              .localeCompare(
                                (optionB?.label ?? "").toLowerCase()
                              )
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
                      </div>
                    </Col>
                    <Col md={8}>
                      <div
                        className="heading2"
                        style={{ marginBottom: "1.8%" }}
                      >
                        Metric Name
                      </div>
                      <div className="selectCustomStyle">
                        <Input bordered={false} style={{ width: "100%" }} />
                      </div>
                    </Col>
                    <Col md={8}>
                      <div
                        className="heading2"
                        style={{ marginBottom: "1.8%" }}
                      >
                        Database
                      </div>
                      <div className="selectCustomStyle">
                        <Select
                          showSearch
                          bordered={false}
                          style={{ width: "100%" }}
                          optionFilterProp="children"
                          filterOption={(input, option) =>
                            (option?.label ?? "").includes(input)
                          }
                          filterSort={(optionA, optionB) =>
                            (optionA?.label ?? "")
                              .toLowerCase()
                              .localeCompare(
                                (optionB?.label ?? "").toLowerCase()
                              )
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
                      </div>
                    </Col>
                  </Row>
                  <Row
                    gutter={{ xs: 8, sm: 16, md: 48, lg: 48 }}
                    style={{ marginTop: "2%" }}
                  >
                    <Col md={8}>
                      <Row>
                        <Col flex="auto">
                          {" "}
                          <div className="selectCustomStyle">
                            <Select
                              showSearch
                              bordered={false}
                              style={{ width: "100%" }}
                              optionFilterProp="children"
                              filterOption={(input, option) =>
                                (option?.label ?? "").includes(input)
                              }
                              filterSort={(optionA, optionB) =>
                                (optionA?.label ?? "")
                                  .toLowerCase()
                                  .localeCompare(
                                    (optionB?.label ?? "").toLowerCase()
                                  )
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
                          </div>
                        </Col>
                        <Col flex="40px">
                          <div className="OfSpan">of</div>
                        </Col>
                        <Col flex="auto">
                          <div className="selectCustomStyle">
                            <Select
                              showSearch
                              bordered={false}
                              style={{ width: "100%" }}
                              optionFilterProp="children"
                              filterOption={(input, option) =>
                                (option?.label ?? "").includes(input)
                              }
                              filterSort={(optionA, optionB) =>
                                (optionA?.label ?? "")
                                  .toLowerCase()
                                  .localeCompare(
                                    (optionB?.label ?? "").toLowerCase()
                                  )
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
                          </div>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                  {/* ------------------------------- Based on conditions of */}
                  <div className="heading1" style={{ marginTop: "3%" }}>
                    Based on conditions of
                  </div>
                  <Row
                    gutter={{ xs: 8, sm: 16, md: 48, lg: 48 }}
                    style={{ marginTop: "1.6%" }}
                  >
                    <Col md={8}>
                      <div className="selectCustomStyle">
                        <Select
                          showSearch
                          bordered={false}
                          style={{ width: "100%" }}
                          optionFilterProp="children"
                          filterOption={(input, option) =>
                            (option?.label ?? "").includes(input)
                          }
                          filterSort={(optionA, optionB) =>
                            (optionA?.label ?? "")
                              .toLowerCase()
                              .localeCompare(
                                (optionB?.label ?? "").toLowerCase()
                              )
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
                      </div>
                    </Col>
                    <Col md={8}>
                      <div className="selectCustomStyle">
                        <Select
                          showSearch
                          bordered={false}
                          style={{ width: "100%" }}
                          optionFilterProp="children"
                          filterOption={(input, option) =>
                            (option?.label ?? "").includes(input)
                          }
                          filterSort={(optionA, optionB) =>
                            (optionA?.label ?? "")
                              .toLowerCase()
                              .localeCompare(
                                (optionB?.label ?? "").toLowerCase()
                              )
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
                      </div>
                    </Col>
                    <Col md={8}>
                      <div className="selectCustomStyle">
                        <Select
                          showSearch
                          bordered={false}
                          style={{ width: "100%" }}
                          optionFilterProp="children"
                          filterOption={(input, option) =>
                            (option?.label ?? "").includes(input)
                          }
                          filterSort={(optionA, optionB) =>
                            (optionA?.label ?? "")
                              .toLowerCase()
                              .localeCompare(
                                (optionB?.label ?? "").toLowerCase()
                              )
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
                      </div>
                    </Col>
                  </Row>
                  <Row
                    gutter={{ xs: 8, sm: 16, md: 48, lg: 48 }}
                    style={{ marginTop: "1.6%" }}
                  >
                    <Col md={8}>
                      <Row>
                        <Col flex="auto">
                          {" "}
                          <div className="selectCustomStyle">
                            <Select
                              showSearch
                              bordered={false}
                              style={{ width: "100%" }}
                              optionFilterProp="children"
                              filterOption={(input, option) =>
                                (option?.label ?? "").includes(input)
                              }
                              filterSort={(optionA, optionB) =>
                                (optionA?.label ?? "")
                                  .toLowerCase()
                                  .localeCompare(
                                    (optionB?.label ?? "").toLowerCase()
                                  )
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
                          </div>
                        </Col>
                        <Col flex="60px">
                          <div
                            className="OfSpan"
                            style={{ fontSize: "16px", maring: "0" }}
                          >
                            And
                          </div>
                        </Col>
                        <Col flex="auto">
                          <div className="selectCustomStyle">
                            <Select
                              showSearch
                              bordered={false}
                              style={{ width: "100%" }}
                              optionFilterProp="children"
                              filterOption={(input, option) =>
                                (option?.label ?? "").includes(input)
                              }
                              filterSort={(optionA, optionB) =>
                                (optionA?.label ?? "")
                                  .toLowerCase()
                                  .localeCompare(
                                    (optionB?.label ?? "").toLowerCase()
                                  )
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
                          </div>
                        </Col>
                      </Row>
                    </Col>
                    <Col md={8}>
                      <div className="selectCustomStyle">
                        <Select
                          showSearch
                          bordered={false}
                          style={{ width: "100%" }}
                          optionFilterProp="children"
                          filterOption={(input, option) =>
                            (option?.label ?? "").includes(input)
                          }
                          filterSort={(optionA, optionB) =>
                            (optionA?.label ?? "")
                              .toLowerCase()
                              .localeCompare(
                                (optionB?.label ?? "").toLowerCase()
                              )
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
                      </div>
                    </Col>
                    <Col md={8}>
                      <div className="selectCustomStyle">
                        <Select
                          showSearch
                          bordered={false}
                          style={{ width: "100%" }}
                          optionFilterProp="children"
                          filterOption={(input, option) =>
                            (option?.label ?? "").includes(input)
                          }
                          filterSort={(optionA, optionB) =>
                            (optionA?.label ?? "")
                              .toLowerCase()
                              .localeCompare(
                                (optionB?.label ?? "").toLowerCase()
                              )
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
                      </div>
                    </Col>
                  </Row>
                  <Row
                    gutter={{ xs: 8, sm: 16, md: 48, lg: 48 }}
                    style={{ marginTop: "1.6%" }}
                  >
                    <Col md={8}>
                      <div className="selectCustomStyle">
                        <Select
                          showSearch
                          bordered={false}
                          style={{ width: "100%" }}
                          optionFilterProp="children"
                          filterOption={(input, option) =>
                            (option?.label ?? "").includes(input)
                          }
                          filterSort={(optionA, optionB) =>
                            (optionA?.label ?? "")
                              .toLowerCase()
                              .localeCompare(
                                (optionB?.label ?? "").toLowerCase()
                              )
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
                      </div>
                    </Col>
                    <Col md={8}>
                      <div className="selectCustomStyle">
                        <Select
                          showSearch
                          bordered={false}
                          style={{ width: "100%" }}
                          optionFilterProp="children"
                          filterOption={(input, option) =>
                            (option?.label ?? "").includes(input)
                          }
                          filterSort={(optionA, optionB) =>
                            (optionA?.label ?? "")
                              .toLowerCase()
                              .localeCompare(
                                (optionB?.label ?? "").toLowerCase()
                              )
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
                      </div>
                    </Col>
                  </Row>

                  <div className="actionButton d-flex align-center justify-end">
                    <button
                      className="cancel-btn"
                      onClick={() => setAddMetricSection(false)}
                    >
                      Cancel
                    </button>
                    <button
                      className="saveBtn"
                      onClick={() => setAddMetricSection(false)}
                    >
                      Save
                    </button>
                  </div>
                </div>
              ) : (
                //  data table Metric
                <div>
                  <div className="d-flex justify-space-between">
                    <div className="heading1">Metrics</div>
                    <button
                      className="btn-primary"
                      onClick={() => setAddMetricSection(true)}
                    >
                      Create Metric
                    </button>
                  </div>
                  <div
                    className="d-flex justify-space-between align-center"
                    style={{ marginTop: "2%" }}
                  >
                    <div style={{ fontFamily: "Sulphur Point" }}>
                      Track the leading and lagging indicators that drive your
                      business.
                    </div>
                    {/* ------------------ Pagination ----------------- */}
                    <Pagination
                      total={85}
                      showTotal={(total, range) =>
                        `${range[0]}-${range[1]} of ${total} items`
                      }
                      defaultPageSize={20}
                      defaultCurrent={1}
                    />
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
                        <div className="table-heading d-flex justify-center">
                          Name
                        </div>
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
                        <div className="table-heading  d-flex justify-center">
                          Actions
                        </div>
                      </td>
                    </tr>
                    <tbody>
                      <tr
                        style={{ border: "1px solid #F0F0F0" }}
                        className={`${
                          metricCheckBoxActive1 ? "activeRowDataTable" : ""
                        } `}
                      >
                        <td style={{ paddingTop: "1%", paddingBottom: "1%" }}>
                          <div className="d-flex justify-center">
                            <Checkbox
                              checked={metricCheckBoxActive1}
                              onClick={(e) =>
                                setMetricCheckBoxActive1(e.target.checked)
                              }
                            ></Checkbox>
                          </div>
                        </td>
                        <td style={{ paddingTop: "1%", paddingBottom: "1%" }}>
                          <div className="table-data d-flex justify-center ">
                            Age Data
                          </div>
                        </td>
                        <td style={{ paddingTop: "1%", paddingBottom: "1%" }}>
                          <div className="table-data d-flex justify-center ">
                            2 Data Points
                          </div>
                        </td>
                        <td style={{ paddingTop: "1%", paddingBottom: "1%" }}>
                          <div className="table-data d-flex justify-center ">
                            12/5/2022
                          </div>
                        </td>
                        <td style={{ paddingTop: "1%", paddingBottom: "1%" }}>
                          <div className="table-data d-flex justify-center ">
                            12/6/2022
                          </div>
                        </td>
                        <td style={{ paddingTop: "1%", paddingBottom: "1%" }}>
                          <div className="d-flex justify-center">
                            <Button
                              type="text"
                              onClick={() => setAddMetricSection(true)}
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
                      <tr
                        style={{ border: "1px solid #F0F0F0" }}
                        className={`${
                          metricCheckBoxActive2 ? "activeRowDataTable" : ""
                        } `}
                      >
                        <td style={{ paddingTop: "1%", paddingBottom: "1%" }}>
                          <div className="d-flex justify-center">
                            <Checkbox
                              checked={metricCheckBoxActive2}
                              onClick={(e) =>
                                setMetricCheckBoxActive2(e.target.checked)
                              }
                            ></Checkbox>
                          </div>
                        </td>
                        <td style={{ paddingTop: "1%", paddingBottom: "1%" }}>
                          <div className="table-data d-flex justify-center ">
                            Age Data
                          </div>
                        </td>
                        <td style={{ paddingTop: "1%", paddingBottom: "1%" }}>
                          <div className="table-data d-flex justify-center ">
                            2 Data Points
                          </div>
                        </td>
                        <td style={{ paddingTop: "1%", paddingBottom: "1%" }}>
                          <div className="table-data d-flex justify-center ">
                            12/5/2022
                          </div>
                        </td>
                        <td style={{ paddingTop: "1%", paddingBottom: "1%" }}>
                          <div className="table-data d-flex justify-center ">
                            12/6/2022
                          </div>
                        </td>
                        <td style={{ paddingTop: "1%", paddingBottom: "1%" }}>
                          <div className="d-flex justify-center">
                            <Button
                              type="text"
                              onClick={() => setAddMetricSection(true)}
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
                      <tr
                        style={{ border: "1px solid #F0F0F0" }}
                        className={`${
                          metricCheckBoxActive3 ? "activeRowDataTable" : ""
                        } `}
                      >
                        <td style={{ paddingTop: "1%", paddingBottom: "1%" }}>
                          <div className="d-flex justify-center">
                            <Checkbox
                              checked={metricCheckBoxActive3}
                              onClick={(e) =>
                                setMetricCheckBoxActive3(e.target.checked)
                              }
                            ></Checkbox>
                          </div>
                        </td>
                        <td style={{ paddingTop: "1%", paddingBottom: "1%" }}>
                          <div className="table-data d-flex justify-center ">
                            Age Data
                          </div>
                        </td>
                        <td style={{ paddingTop: "1%", paddingBottom: "1%" }}>
                          <div className="table-data d-flex justify-center ">
                            2 Data Points
                          </div>
                        </td>
                        <td style={{ paddingTop: "1%", paddingBottom: "1%" }}>
                          <div className="table-data d-flex justify-center ">
                            12/5/2022
                          </div>
                        </td>
                        <td style={{ paddingTop: "1%", paddingBottom: "1%" }}>
                          <div className="table-data d-flex justify-center ">
                            12/6/2022
                          </div>
                        </td>
                        <td style={{ paddingTop: "1%", paddingBottom: "1%" }}>
                          <div className="d-flex justify-center">
                            <Button
                              type="text"
                              onClick={() => setAddMetricSection(true)}
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
                </div>
              )}
            </div>
          ) : null}
          {/* ------------------ Segments section----------- */}
          {segmentSection ? (
            <div>Segment section</div>
            // <div className="MetricSection">
            //   {/* ----------------- Add or Edit Section for Metric --- and data table section also----- */}
            //   {addSegmentSection ? (
            //     <div className="ContentBox">
            //       <Row gutter={{ xs: 8, sm: 16, md: 48, lg: 48 }}>
            //         <Col md={8}>
            //           <div
            //             className="heading2"
            //             style={{ marginBottom: "1.8%" }}
            //           >
            //             Database
            //           </div>
            //           <div className="selectCustomStyle">
            //             <Select
            //               showSearch
            //               bordered={false}
            //               style={{ width: "100%" }}
            //               optionFilterProp="children"
            //               filterOption={(input, option) =>
            //                 (option?.label ?? "").includes(input)
            //               }
            //               filterSort={(optionA, optionB) =>
            //                 (optionA?.label ?? "")
            //                   .toLowerCase()
            //                   .localeCompare(
            //                     (optionB?.label ?? "").toLowerCase()
            //                   )
            //               }
            //               options={[
            //                 {
            //                   value: "1",
            //                   label: "Not Identified",
            //                 },
            //                 {
            //                   value: "2",
            //                   label: "Closed",
            //                 },
            //                 {
            //                   value: "3",
            //                   label: "Communicated",
            //                 },
            //                 {
            //                   value: "4",
            //                   label: "Identified",
            //                 },
            //                 {
            //                   value: "5",
            //                   label: "Resolved",
            //                 },
            //                 {
            //                   value: "6",
            //                   label: "Cancelled",
            //                 },
            //               ]}
            //             />
            //           </div>
            //         </Col>
            //         <Col md={8}>
            //           <div
            //             className="heading2"
            //             style={{ marginBottom: "1.8%" }}
            //           >
            //             Segment Name
            //           </div>
            //           <div className="selectCustomStyle">
            //             <Input bordered={false} style={{ width: "100%" }} />
            //           </div>
            //         </Col>
            //         <Col md={8}>
            //           <div
            //             className="heading2"
            //             style={{ marginBottom: "1.8%" }}
            //           >
            //             Select User Form
            //           </div>
            //           <div className="selectCustomStyle">
            //             <Select
            //               showSearch
            //               bordered={false}
            //               style={{ width: "100%" }}
            //               optionFilterProp="children"
            //               filterOption={(input, option) =>
            //                 (option?.label ?? "").includes(input)
            //               }
            //               filterSort={(optionA, optionB) =>
            //                 (optionA?.label ?? "")
            //                   .toLowerCase()
            //                   .localeCompare(
            //                     (optionB?.label ?? "").toLowerCase()
            //                   )
            //               }
            //               options={[
            //                 {
            //                   value: "1",
            //                   label: "Not Identified",
            //                 },
            //                 {
            //                   value: "2",
            //                   label: "Closed",
            //                 },
            //                 {
            //                   value: "3",
            //                   label: "Communicated",
            //                 },
            //                 {
            //                   value: "4",
            //                   label: "Identified",
            //                 },
            //                 {
            //                   value: "5",
            //                   label: "Resolved",
            //                 },
            //                 {
            //                   value: "6",
            //                   label: "Cancelled",
            //                 },
            //               ]}
            //             />
            //           </div>
            //         </Col>
            //       </Row>

            //       {/* ------------------------------- Based on conditions of */}
            //       <div className="heading1" style={{ marginTop: "3%" }}>
            //         Based on conditions of
            //       </div>
            //       <Row
            //         gutter={{ xs: 8, sm: 16, md: 48, lg: 48 }}
            //         style={{ marginTop: "1.6%" }}
            //       >
            //         <Col md={8}>
            //           <div className="selectCustomStyle">
            //             <Select
            //               showSearch
            //               bordered={false}
            //               placeholder="Value of"
            //               style={{ width: "100%" }}
            //               optionFilterProp="children"
            //               filterOption={(input, option) =>
            //                 (option?.label ?? "").includes(input)
            //               }
            //               filterSort={(optionA, optionB) =>
            //                 (optionA?.label ?? "")
            //                   .toLowerCase()
            //                   .localeCompare(
            //                     (optionB?.label ?? "").toLowerCase()
            //                   )
            //               }
            //               options={[
            //                 {
            //                   value: "1",
            //                   label: "Not Identified",
            //                 },
            //                 {
            //                   value: "2",
            //                   label: "Closed",
            //                 },
            //                 {
            //                   value: "3",
            //                   label: "Communicated",
            //                 },
            //                 {
            //                   value: "4",
            //                   label: "Identified",
            //                 },
            //                 {
            //                   value: "5",
            //                   label: "Resolved",
            //                 },
            //                 {
            //                   value: "6",
            //                   label: "Cancelled",
            //                 },
            //               ]}
            //             />
            //           </div>
            //         </Col>
            //         <Col md={8}>
            //           <div className="selectCustomStyle">
            //             <Select
            //               showSearch
            //               bordered={false}
            //               style={{ width: "100%" }}
            //               placeholder="User"
            //               optionFilterProp="children"
            //               filterOption={(input, option) =>
            //                 (option?.label ?? "").includes(input)
            //               }
            //               filterSort={(optionA, optionB) =>
            //                 (optionA?.label ?? "")
            //                   .toLowerCase()
            //                   .localeCompare(
            //                     (optionB?.label ?? "").toLowerCase()
            //                   )
            //               }
            //               options={[
            //                 {
            //                   value: "1",
            //                   label: "Not Identified",
            //                 },
            //                 {
            //                   value: "2",
            //                   label: "Closed",
            //                 },
            //                 {
            //                   value: "3",
            //                   label: "Communicated",
            //                 },
            //                 {
            //                   value: "4",
            //                   label: "Identified",
            //                 },
            //                 {
            //                   value: "5",
            //                   label: "Resolved",
            //                 },
            //                 {
            //                   value: "6",
            //                   label: "Cancelled",
            //                 },
            //               ]}
            //             />
            //           </div>
            //         </Col>
            //         <Col md={8}>
            //           <Row>
            //             <Col flex="auto">
            //               {" "}
            //               <div className="selectCustomStyle">
            //                 <Select
            //                   showSearch
            //                   bordered={false}
            //                   style={{ width: "100%" }}
            //                   optionFilterProp="children"
            //                   filterOption={(input, option) =>
            //                     (option?.label ?? "").includes(input)
            //                   }
            //                   filterSort={(optionA, optionB) =>
            //                     (optionA?.label ?? "")
            //                       .toLowerCase()
            //                       .localeCompare(
            //                         (optionB?.label ?? "").toLowerCase()
            //                       )
            //                   }
            //                   options={[
            //                     {
            //                       value: "1",
            //                       label: "Not Identified",
            //                     },
            //                     {
            //                       value: "2",
            //                       label: "Closed",
            //                     },
            //                     {
            //                       value: "3",
            //                       label: "Communicated",
            //                     },
            //                     {
            //                       value: "4",
            //                       label: "Identified",
            //                     },
            //                     {
            //                       value: "5",
            //                       label: "Resolved",
            //                     },
            //                     {
            //                       value: "6",
            //                       label: "Cancelled",
            //                     },
            //                   ]}
            //                 />
            //               </div>
            //             </Col>
            //             <Col flex="40px">
            //               <div
            //                 className="OfSpan"
            //                 style={{ fontSize: "16px", maring: "0" }}
            //               ></div>
            //             </Col>
            //             <Col flex="auto">
            //               <div className="selectCustomStyle">
            //                 <Select
            //                   showSearch
            //                   bordered={false}
            //                   style={{ width: "100%" }}
            //                   optionFilterProp="children"
            //                   filterOption={(input, option) =>
            //                     (option?.label ?? "").includes(input)
            //                   }
            //                   filterSort={(optionA, optionB) =>
            //                     (optionA?.label ?? "")
            //                       .toLowerCase()
            //                       .localeCompare(
            //                         (optionB?.label ?? "").toLowerCase()
            //                       )
            //                   }
            //                   options={[
            //                     {
            //                       value: "1",
            //                       label: "Not Identified",
            //                     },
            //                     {
            //                       value: "2",
            //                       label: "Closed",
            //                     },
            //                     {
            //                       value: "3",
            //                       label: "Communicated",
            //                     },
            //                     {
            //                       value: "4",
            //                       label: "Identified",
            //                     },
            //                     {
            //                       value: "5",
            //                       label: "Resolved",
            //                     },
            //                     {
            //                       value: "6",
            //                       label: "Cancelled",
            //                     },
            //                   ]}
            //                 />
            //               </div>
            //             </Col>
            //           </Row>
            //         </Col>
            //       </Row>
            //       <Row
            //         gutter={{ xs: 8, sm: 16, md: 48, lg: 48 }}
            //         style={{ marginTop: "1.6%" }}
            //       >
            //         <Col md={8}>
            //           <Row>
            //             <Col flex="50%">
            //               <div className="selectCustomStyle">
            //                 <Select
            //                   showSearch
            //                   bordered={false}
            //                   style={{ width: "100%" }}
            //                   placeholder="Add"
            //                   optionFilterProp="children"
            //                   filterOption={(input, option) =>
            //                     (option?.label ?? "").includes(input)
            //                   }
            //                   filterSort={(optionA, optionB) =>
            //                     (optionA?.label ?? "")
            //                       .toLowerCase()
            //                       .localeCompare(
            //                         (optionB?.label ?? "").toLowerCase()
            //                       )
            //                   }
            //                   options={[
            //                     {
            //                       value: "1",
            //                       label: "Not Identified",
            //                     },
            //                     {
            //                       value: "2",
            //                       label: "Closed",
            //                     },
            //                     {
            //                       value: "3",
            //                       label: "Communicated",
            //                     },
            //                     {
            //                       value: "4",
            //                       label: "Identified",
            //                     },
            //                     {
            //                       value: "5",
            //                       label: "Resolved",
            //                     },
            //                     {
            //                       value: "6",
            //                       label: "Cancelled",
            //                     },
            //                   ]}
            //                 />
            //               </div>
            //             </Col>
            //           </Row>
            //         </Col>
            //       </Row>

            //       <div className="actionButton d-flex align-center justify-end">
            //         <button
            //           className="cancel-btn"
            //           onClick={() => setAddSegmentSection(false)}
            //         >
            //           Cancel
            //         </button>
            //         <button
            //           className="saveBtn"
            //           onClick={() => setAddSegmentSection(false)}
            //         >
            //           Save
            //         </button>
            //       </div>
            //     </div>
            //   ) : (
            //     // ----------  data table Metric
            //     <div>
            //       <div className="d-flex justify-space-between">
            //         <div className="heading1">Segments</div>
            //         <button
            //           className="btn-primary"
            //           onClick={() => setAddSegmentSection(true)}
            //         >
            //           Create Segments
            //         </button>
            //       </div>
            //       <div
            //         className="d-flex justify-end align-center"
            //         style={{ marginTop: "2%" }}
            //       >
            //         {/* ------------------ Pagination ----------------- */}
            //         <Pagination
            //           total={85}
            //           showTotal={(total, range) =>
            //             `${range[0]}-${range[1]} of ${total} items`
            //           }
            //           defaultPageSize={20}
            //           defaultCurrent={1}
            //         />
            //       </div>

            //       {/* ------------------ Data table ----------------- */}
            //       <table
            //         className="w-100"
            //         style={{
            //           borderCollapse: "collapse",
            //           marginTop: "2%",
            //           marginBottom: "3%",
            //         }}
            //       >
            //         <tr style={{ background: "#4E46DC" }}>
            //           <td style={{ width: "5%", paddingTop: "3%" }}></td>
            //           <td style={{ width: "16%" }}>
            //             <div className="table-heading d-flex justify-center">
            //               Name
            //             </div>
            //           </td>
            //           <td style={{ width: "16%" }}>
            //             <div className="table-heading  d-flex justify-center">
            //               Data points
            //             </div>
            //           </td>
            //           <td style={{ width: "16%" }}>
            //             <div className="table-heading  d-flex justify-center">
            //               Created date
            //             </div>
            //           </td>
            //           <td style={{ width: "16%" }}>
            //             <div className="table-heading  d-flex justify-center">
            //               Date Modified
            //             </div>
            //           </td>
            //           <td style={{ width: "27%" }}>
            //             <div className="table-heading  d-flex justify-center">
            //               Actions
            //             </div>
            //           </td>
            //         </tr>
            //         <tbody>
            //           <tr
            //             style={{ border: "1px solid #F0F0F0" }}
            //             className={`${
            //               segmentCheckBoxActive ? "activeRowDataTable" : ""
            //             } `}
            //           >
            //             <td style={{ paddingTop: "1%", paddingBottom: "1%" }}>
            //               <div className="d-flex justify-center">
            //                 <Checkbox
            //                   checked={segmentCheckBoxActive}
            //                   onClick={(e) =>
            //                     setSegmentCheckBoxActive(e.target.checked)
            //                   }
            //                 ></Checkbox>
            //               </div>
            //             </td>
            //             <td style={{ paddingTop: "1%", paddingBottom: "1%" }}>
            //               <div className="table-data d-flex justify-center ">
            //                 Age Data
            //               </div>
            //             </td>
            //             <td style={{ paddingTop: "1%", paddingBottom: "1%" }}>
            //               <div className="table-data d-flex justify-center ">
            //                 2 Data Points
            //               </div>
            //             </td>
            //             <td style={{ paddingTop: "1%", paddingBottom: "1%" }}>
            //               <div className="table-data d-flex justify-center ">
            //                 12/5/2022
            //               </div>
            //             </td>
            //             <td style={{ paddingTop: "1%", paddingBottom: "1%" }}>
            //               <div className="table-data d-flex justify-center ">
            //                 12/6/2022
            //               </div>
            //             </td>
            //             <td style={{ paddingTop: "1%", paddingBottom: "1%" }}>
            //               <div className="d-flex justify-center">
            //                 <Button
            //                   type="text"
            //                   onClick={() => setAddSegmentSection(true)}
            //                 >
            //                   <PencilIcon></PencilIcon>
            //                 </Button>
            //                 <Button
            //                   type="text"
            //                   style={{ marginTop: "-1%" }}
            //                   onClick={() => SetDeleteDialog(true)}
            //                 >
            //                   <DeleteIcon></DeleteIcon>
            //                 </Button>
            //               </div>
            //             </td>
            //           </tr>
            //         </tbody>
            //       </table>
            //     </div>
            //   )}
            // </div>
          ) : null}
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

export default EditorView;
