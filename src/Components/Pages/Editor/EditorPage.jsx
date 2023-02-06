import React, { useEffect, useState } from "react";
import "../../Assets/styles/Layout.scss";
import { Layout, Menu, Avatar, Input } from "antd";
import SingleLine from "../../Assets/svgIcon/EditorSvgIcon/SingleLIne";
import LeftArrow from "../../Assets/svgIcon/EditorSvgIcon/LeftArrow";
import TriangleArrow from "../../Assets/svgIcon/EditorSvgIcon/TriangleArrow";
import ReverseTriangle from "../../Assets/svgIcon/EditorSvgIcon/ReverseTriangle";
import Circle from "../../Assets/svgIcon/EditorSvgIcon/Circle";
import DiamondArrow from "../../Assets/svgIcon/EditorSvgIcon/DiamondArrow";
import DividerLinesvg from "../../Assets/svgIcon/EditorSvgIcon/DividerLinesvg";
import RoundIcon from "../../Assets/svgIcon/EditorSvgIcon/RoundIcon";
import SquareIcon from "../../Assets/svgIcon/EditorSvgIcon/SquareIcon";
import OvelIcon from "../../Assets/svgIcon/FlowchartIcon/OvelIcon";
import SquareFlowChartIcon from "../../Assets/svgIcon/FlowchartIcon/SquareFlowChartIcon";
import RectangleFlowChartIcon from "../../Assets/svgIcon/FlowchartIcon/RectangleFlowChartIcon";
import DiamondFlowChartIcon from "../../Assets/svgIcon/FlowchartIcon/DiamondFlowChartIcon";
import ShareModel from "../../Component/Editor/ShareModel/ShareModel";
import EditorView from "../../Component/Editor/editorView/EditorView";
import DataSegmentArea from "../../Component/Editor/DataSegmentArea/DataSegmentArea";

const { Sider, Content, Header } = Layout;

function EditorPage() {
  const [NodeSection, SetNodeSection] = useState(true);
  const [DataSegment, SetDataSegment] = useState(false);
  const [openShareModel, setShareModelOpen] = useState(false);
  const [projectName, setProjectName] = useState(true);
  const [projectNameValue, setProjectNameValue] = useState("Project 1");
  const [DataDropdown, setDataDropDown] = useState(false);
  const [SegmentDropdown, setSegmentDropDown] = useState(false);
  const [MetricDropdown, setMetricDropDown] = useState(false);
  const [viewModel, setViewModel] = useState(false);

  function ShowNodeSection() {
    SetNodeSection(true);
    SetDataSegment(false);
  }
  function ShowDataSection() {
    SetNodeSection(false);
    SetDataSegment(true);
  }
  useEffect(() => {
    console.log(projectNameValue);
  });

  return (
    <div>
      <Layout className="EditorLayoutStyle">
        <Sider className="editorSidebar">
          <Menu className="bg-transparent ToolMenu" mode="inline">
            <div className="customTogglebtn">
              <button
                className={`NodeButton ${NodeSection ? "bgblue" : ""} `}
                onClick={ShowNodeSection}
              >
                Node Editor
              </button>

              <button
                className={`DataSegmentButton ${
                  DataSegment ? "bgDataSegmentColor" : ""
                } `}
                onClick={ShowDataSection}
              >
                Data Segments
              </button>
            </div>
            {/* ------------------ Node Editor */}
            {NodeSection ? (
              <div
                className="NodeSectinStyle"
                style={{ marginTop: "20%", marginLeft: "-0.7rem" }}
              >
                <div
                  className="heading1"
                  style={{ marginBottom: "18%", marginLeft: "-1rem" }}
                >
                  Edge properties
                </div>

                <div className="box">
                  <div className="d-flex align-center ">
                    <SingleLine></SingleLine>
                    <div className="spantext" style={{ marginLeft: "5%" }}>
                      None
                    </div>
                  </div>
                </div>
                <div className="box">
                  <div className="d-flex align-center ">
                    <LeftArrow></LeftArrow>
                    <div className="spantext" style={{ marginLeft: "5%" }}>
                      Line arrow
                    </div>
                  </div>
                </div>
                <div className="box">
                  <div className="d-flex align-center ">
                    <TriangleArrow></TriangleArrow>
                    <div className="spantext" style={{ marginLeft: "5%" }}>
                      Triangle arrow
                    </div>
                  </div>
                </div>
                <div className="box">
                  <div className="d-flex align-center ">
                    <ReverseTriangle></ReverseTriangle>
                    <div className="spantext" style={{ marginLeft: "5%" }}>
                      Reversed triangle
                    </div>
                  </div>
                </div>
                <div className="box">
                  <div className="d-flex align-center ">
                    <Circle></Circle>
                    <div className="spantext" style={{ marginLeft: "5%" }}>
                      Circle arrow
                    </div>
                  </div>
                </div>
                <div className="box">
                  <div className="d-flex align-center ">
                    <DiamondArrow></DiamondArrow>
                    <div className="spantext" style={{ marginLeft: "5%" }}>
                      Diamond arrow
                    </div>
                  </div>
                </div>
                <div style={{ marginTop: "10%" }}>
                  <DividerLinesvg></DividerLinesvg>
                </div>
                <div className="box">
                  <div className="d-flex align-center ">
                    <RoundIcon></RoundIcon>
                    <div className="spantext" style={{ marginLeft: "5%" }}>
                      Round
                    </div>
                  </div>
                </div>
                <div className="box">
                  <div className="d-flex align-center ">
                    <SquareIcon></SquareIcon>
                    <div className="spantext" style={{ marginLeft: "5%" }}>
                      Square
                    </div>
                  </div>
                </div>
                <div
                  className="heading1"
                  style={{ marginTop: "3rem", marginLeft: "-3.5rem" }}
                >
                  Flowchart
                </div>
                <div className="box">
                  <div className="d-flex align-center">
                    <div>
                      <OvelIcon></OvelIcon>
                    </div>
                    <div style={{ marginLeft: "1rem" }}>
                      <SquareFlowChartIcon></SquareFlowChartIcon>
                    </div>
                  </div>
                </div>
                <div className="box">
                  <div className="d-flex align-center">
                    <div>
                      <RectangleFlowChartIcon></RectangleFlowChartIcon>
                    </div>
                    <div style={{ marginLeft: "2rem" }}>
                      <DiamondFlowChartIcon></DiamondFlowChartIcon>
                    </div>
                  </div>
                </div>
                <div className="box">
                  <div className="d-flex align-center">
                    <div>
                      <svg
                        width="53"
                        height="25"
                        viewBox="0 0 53 25"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0.637517 24.4705L6.28104 1.47046H52.3625L46.719 24.4705H0.637517Z"
                          stroke="#7B7979"
                        />
                      </svg>
                    </div>
                    <div style={{ marginLeft: "2rem" }}>
                      <DiamondFlowChartIcon></DiamondFlowChartIcon>
                    </div>
                  </div>
                </div>
                <div className="box">
                  <div className="d-flex align-center">
                    <div>
                      <svg
                        width="51"
                        height="24"
                        viewBox="0 0 51 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4.62689 3.16595C5.01097 1.60065 6.41433 0.5 8.02606 0.5H46.8999C49.1706 0.5 50.8401 2.62877 50.299 4.83406L46.3731 20.8341C45.989 22.3994 44.5857 23.5 42.9739 23.5H4.10014C1.82944 23.5 0.159854 21.3712 0.700966 19.1659L4.62689 3.16595Z"
                          stroke="#7B7979"
                        />
                      </svg>
                    </div>
                    <div style={{ marginLeft: "2.5rem" }}>
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          x="0.5"
                          y="0.5"
                          width="23"
                          height="23"
                          rx="11.5"
                          stroke="#7B7979"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ) : null}
            {/* ------------------ Data Segments */}
            {DataSegment ? (
              <div className="NodeSectinStyle" style={{ marginTop: "10%" }}>
                <div className="box" style={{ marginLeft: "1rem" }}>
                  <div className="d-flex align-center ">
                    <button
                      className="iconButton d-flex align-center"
                      onClick={() => {
                        setDataDropDown(() => !DataDropdown);
                      }}
                    >
                      {!DataDropdown ? (
                        <div>
                          <svg
                            width="11"
                            height="11"
                            viewBox="0 0 8 11"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M6.93441 4.70021C7.46736 5.10023 7.46736 5.89978 6.93441 6.29979L2.10028 9.92806C1.44109 10.4228 0.5 9.95249 0.500001 9.12828L0.500001 1.87172C0.500001 1.04751 1.44109 0.577177 2.10028 1.07194L6.93441 4.70021Z"
                              fill="#575757"
                            />
                          </svg>
                        </div>
                      ) : (
                        <svg
                          width="10"
                          height="7"
                          viewBox="0 0 10 7"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5.79979 6.43441C5.39977 6.96736 4.60023 6.96736 4.20021 6.43441L0.571936 1.60028C0.0771767 0.941092 0.547515 -3.82242e-09 1.37172 6.82322e-08L8.62828 7.0262e-07C9.45249 7.74675e-07 9.92282 0.941094 9.42806 1.60028L5.79979 6.43441Z"
                            fill="#575757"
                          />
                        </svg>
                      )}

                      <div
                        className="spantext"
                        style={{
                          marginLeft: "0.7rem",
                          color: "black",
                          fontSize: "18px",
                        }}
                      >
                        Data
                      </div>
                    </button>
                  </div>
                  {DataDropdown ? (
                    <div className="dropdownTextStyle">
                      <div>
                        <button className="item iconButton"> File 1 </button>
                      </div>
                      <div>
                        <button className="item iconButton"> File 1 </button>
                      </div>
                      <div>
                        <button className="item iconButton"> File 1 </button>
                      </div>
                      <div>
                        <button className="item iconButton"> File 1 </button>
                      </div>
                      <div>
                        <button className="item iconButton"> File 1 </button>
                      </div>
                      <div>
                        <button className="item iconButton"> File 1 </button>
                      </div>
                    </div>
                  ) : null}
                </div>
                <div style={{ marginTop: "10%" }}>
                  <DividerLinesvg></DividerLinesvg>
                </div>
                <div
                  className="box"
                  style={{ marginLeft: "1rem", marginTop: "1.6rem" }}
                >
                  <div className="d-flex align-center ">
                    <button
                      className="iconButton d-flex align-center"
                      onClick={() => {
                        setSegmentDropDown(() => !SegmentDropdown);
                      }}
                    >
                      {!SegmentDropdown ? (
                        <div>
                          <svg
                            width="11"
                            height="11"
                            viewBox="0 0 8 11"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M6.93441 4.70021C7.46736 5.10023 7.46736 5.89978 6.93441 6.29979L2.10028 9.92806C1.44109 10.4228 0.5 9.95249 0.500001 9.12828L0.500001 1.87172C0.500001 1.04751 1.44109 0.577177 2.10028 1.07194L6.93441 4.70021Z"
                              fill="#575757"
                            />
                          </svg>
                        </div>
                      ) : (
                        <svg
                          width="10"
                          height="7"
                          viewBox="0 0 10 7"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5.79979 6.43441C5.39977 6.96736 4.60023 6.96736 4.20021 6.43441L0.571936 1.60028C0.0771767 0.941092 0.547515 -3.82242e-09 1.37172 6.82322e-08L8.62828 7.0262e-07C9.45249 7.74675e-07 9.92282 0.941094 9.42806 1.60028L5.79979 6.43441Z"
                            fill="#575757"
                          />
                        </svg>
                      )}

                      <div
                        className="spantext"
                        style={{
                          marginLeft: "0.7rem",
                          color: "black",
                          fontSize: "18px",
                        }}
                      >
                        Segments
                      </div>
                    </button>
                  </div>
                  {SegmentDropdown ? (
                    <div className="dropdownTextStyle">
                      <div>
                        <button className="item iconButton"> File 1 </button>
                      </div>
                      <div>
                        <button className="item iconButton"> File 1 </button>
                      </div>
                      <div>
                        <button className="item iconButton"> File 1 </button>
                      </div>
                      <div>
                        <button className="item iconButton"> File 1 </button>
                      </div>
                      <div>
                        <button className="item iconButton"> File 1 </button>
                      </div>
                      <div>
                        <button className="item iconButton"> File 1 </button>
                      </div>
                    </div>
                  ) : null}
                </div>
                <div style={{ marginTop: "10%" }}>
                  <DividerLinesvg></DividerLinesvg>
                </div>
                <div className="box" style={{ marginLeft: "1rem" }}>
                  <div className="d-flex align-center ">
                    <button
                      className="iconButton d-flex align-center"
                      onClick={() => {
                        setMetricDropDown(() => !MetricDropdown);
                      }}
                    >
                      {!MetricDropdown ? (
                        <div>
                          <svg
                            width="11"
                            height="11"
                            viewBox="0 0 8 11"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M6.93441 4.70021C7.46736 5.10023 7.46736 5.89978 6.93441 6.29979L2.10028 9.92806C1.44109 10.4228 0.5 9.95249 0.500001 9.12828L0.500001 1.87172C0.500001 1.04751 1.44109 0.577177 2.10028 1.07194L6.93441 4.70021Z"
                              fill="#575757"
                            />
                          </svg>
                        </div>
                      ) : (
                        <svg
                          width="10"
                          height="7"
                          viewBox="0 0 10 7"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5.79979 6.43441C5.39977 6.96736 4.60023 6.96736 4.20021 6.43441L0.571936 1.60028C0.0771767 0.941092 0.547515 -3.82242e-09 1.37172 6.82322e-08L8.62828 7.0262e-07C9.45249 7.74675e-07 9.92282 0.941094 9.42806 1.60028L5.79979 6.43441Z"
                            fill="#575757"
                          />
                        </svg>
                      )}

                      <div
                        className="spantext"
                        style={{
                          marginLeft: "0.7rem",
                          color: "black",
                          fontSize: "18px",
                        }}
                      >
                        Metrics
                      </div>
                    </button>
                  </div>
                  {MetricDropdown ? (
                    <div className="dropdownTextStyle">
                      <div>
                        <button className="item iconButton"> File 1 </button>
                      </div>
                      <div>
                        <button className="item iconButton"> File 1 </button>
                      </div>
                      <div>
                        <button className="item iconButton"> File 1 </button>
                      </div>
                      <div>
                        <button className="item iconButton"> File 1 </button>
                      </div>
                      <div>
                        <button className="item iconButton"> File 1 </button>
                      </div>
                      <div>
                        <button className="item iconButton"> File 1 </button>
                      </div>
                    </div>
                  ) : null}
                </div>
              </div>
            ) : null}
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ padding: 0 }} className="header">
            <div className="d-flex justify-space-between">
              <div className="d-flex">
                {projectName ? (
                  <div style={{ marginLeft: "2rem" }}>
                    <div className="heading1">{projectNameValue}</div>
                  </div>
                ) : (
                  <div>
                    <Input
                      style={{ marginLeft: "2rem", width: "80%" }}
                      placeholder="Project 1"
                      defaultValue={projectNameValue}
                      onChange={(e) => setProjectNameValue(e.target.value)}
                    />
                  </div>
                )}

                <div style={{ marginLeft: "1rem", marginTop: "0.1rem" }}>
                  <button
                    className="iconButton"
                    onClick={async () => {
                      setProjectName(() => !projectName);
                    }}
                  >
                    <svg
                      width="13"
                      height="16"
                      viewBox="0 0 13 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.988 13.7239H1.68137C1.48612 13.7239 1.29886 13.8014 1.1608 13.9395C1.02274 14.0776 0.945175 14.2648 0.945175 14.4601C0.945175 14.6553 1.02274 14.8426 1.1608 14.9806C1.29886 15.1187 1.48612 15.1963 1.68137 15.1963H11.988C12.1833 15.1963 12.3705 15.1187 12.5086 14.9806C12.6467 14.8426 12.7242 14.6553 12.7242 14.4601C12.7242 14.2648 12.6467 14.0776 12.5086 13.9395C12.3705 13.8014 12.1833 13.7239 11.988 13.7239Z"
                        fill="#575757"
                      />
                      <path
                        d="M1.68165 12.2514H1.74791L4.81782 11.9717C5.15411 11.9382 5.46864 11.79 5.70861 11.552L12.3343 4.92632C12.5915 4.65464 12.7305 4.2921 12.7208 3.91814C12.7111 3.54417 12.5536 3.18929 12.2828 2.93125L10.2656 0.914085C10.0024 0.666796 9.65738 0.524904 9.29631 0.515403C8.93524 0.505901 8.58327 0.629451 8.30736 0.862552L1.68165 7.48826C1.44369 7.72824 1.29552 8.04276 1.26202 8.37905L0.945462 11.449C0.935544 11.5568 0.949536 11.6655 0.986439 11.7673C1.02334 11.8691 1.08225 11.9615 1.15896 12.0379C1.22775 12.1061 1.30933 12.1601 1.39902 12.1968C1.48872 12.2334 1.58476 12.252 1.68165 12.2514V12.2514ZM9.24233 1.94475L11.2521 3.95455L9.77974 5.39012L7.80675 3.41713L9.24233 1.94475ZM2.69023 8.50421L6.83498 4.3889L8.8227 6.37662L4.70003 10.4993L2.49146 10.7054L2.69023 8.50421Z"
                        fill="#575757"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="d-flex align-center">
                <div>
                  <button
                    className="shareButton"
                    onClick={() => {
                      setViewModel(true);
                    }}
                    style={{ marginRight: "2rem" }}
                  >
                    View
                  </button>
                </div>
                <Avatar
                  style={{
                    backgroundColor: "#f56a00",
                    verticalAlign: "middle",
                    marginRight: "0.8rem",
                  }}
                >
                  M
                </Avatar>
                <div>
                  <button
                    className="shareButton"
                    style={{ marginLeft: "1rem" }}
                    onClick={() => {
                      setShareModelOpen(true);
                    }}
                  >
                    Share
                  </button>
                </div>

                <div
                  style={{
                    marginLeft: "1.6rem",
                    marginTop: "0.3rem",
                    marginRight: "3rem",
                  }}
                >
                  <svg
                    width="16"
                    height="17"
                    viewBox="0 0 16 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15 6.76795C16.3333 7.53775 16.3333 9.46225 15 10.2321L3.75 16.7272C2.41667 17.497 0.750001 16.5348 0.750001 14.9952L0.750002 2.00481C0.750002 0.465209 2.41667 -0.497042 3.75 0.272758L15 6.76795Z"
                      fill="black"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </Header>
          <Content
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: "calc(100vh - 113px)",
            }}
          >
            <div style={{ textAlign: "left" }}>
              {DataSegment ? (
                <div style={{ textAlign: "left" }}>
                  <DataSegmentArea></DataSegmentArea>
                </div>
              ) : (
                <div>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo
                  quae quidem earum corrupti nisi fugiat quia nam? Aliquam
                  impedit laboriosam deserunt, temporibus esse, labore illo quod
                  in sint rerum omnis?
                </div>
              )}
            </div>
          </Content>
        </Layout>
      </Layout>
      {/* ------------------- Share Model ---------- */}
      <ShareModel
        show={openShareModel}
        onHide={() => {
          setShareModelOpen(false);
        }}
      ></ShareModel>
      {/* ------------------- View Model ---------- */}
      <EditorView
        show={viewModel}
        onHide={() => {
          setViewModel(false);
        }}
      ></EditorView>
    </div>
  );
}
export default EditorPage;
