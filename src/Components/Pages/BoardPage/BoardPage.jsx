import { React,useState } from "react";
import BuildingIcon from "../../Assets/svgIcon/BuildingIcon";
import { Row, Col, Avatar } from "antd";
import { useNavigate } from "react-router-dom";
import AddNewBoard from "../../Component/Board/AddNewBoard";

function BoardPage() {
  const [AddBoard, setAddBoard] = useState(false);
  const navigate = useNavigate();
  function GoToEditorBoard() {
    navigate("/editor");
  }
  return (
    <div className="BoardPage">
      <div className="d-flex justify-space-between">
        <div className="heading1">Boards</div>
        <button
          className="btn-primary d-flex align-center"
          onClick={() => {
            setAddBoard(true);
          }}
        >
          New Board <div style={{ width: "1rem" }}></div>
          <svg
            width="22"
            height="23"
            viewBox="0 0 22 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <ellipse cx="11" cy="11.0233" rx="11" ry="11.0233" fill="white" />
            <path
              d="M16.0179 10.4352H12.2517V6.66052C12.2517 6.41649 12.155 6.18234 11.9827 6.00962C11.8103 5.83689 11.5764 5.73975 11.3324 5.73975C11.0884 5.73975 10.8545 5.83689 10.6821 6.00962C10.5098 6.18234 10.413 6.41649 10.413 6.66052V10.4352H6.6469C6.4029 10.4352 6.169 10.5323 5.99663 10.7051C5.82427 10.8778 5.72754 11.1119 5.72754 11.356C5.72754 11.6 5.82427 11.8341 5.99663 12.0069C6.169 12.1796 6.4029 12.2767 6.6469 12.2767H10.413V16.0514C10.413 16.2954 10.5098 16.5296 10.6821 16.7023C10.8545 16.875 11.0884 16.9722 11.3324 16.9722C11.5764 16.9722 11.8103 16.875 11.9827 16.7023C12.155 16.5296 12.2517 16.2954 12.2517 16.0514V12.2767H16.0179C16.2619 12.2767 16.4958 12.1796 16.6682 12.0069C16.8405 11.8341 16.9372 11.6 16.9372 11.356C16.9372 11.1119 16.8405 10.8778 16.6682 10.7051C16.4958 10.5323 16.2619 10.4352 16.0179 10.4352Z"
              fill="#4E46DC"
              stroke="#4E46DC"
              stroke-width="0.5"
            />
          </svg>
        </button>
      </div>
      <div className="container">
        <div className="box" onClick={GoToEditorBoard}>
          <div className="sectionOne">
            <div style={{ height: "100%" }}>
              <div className="d-flex">
                <BuildingIcon></BuildingIcon>
                <div className="heading1" style={{ marginLeft: "3%" }}>
                  Rootpointers
                </div>
              </div>
              <div className="d-flex" style={{ marginTop: "7%" }}>
                <div className="heading1">IT Soluions ...</div>
              </div>
              <div
                style={{ marginTop: "3%", textAlign: "start" }}
                className="d-flex"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
                animi sequi
              </div>
              <img
                src={require("../../Assets/images/pic1.png")}
                className="picArea"
                alt=""
              />
            </div>
          </div>
          <div className="sectionTwo">
            <Row>
              <Col flex="70%">
                <div>
                  <div
                    style={{ color: "white", fontSize: "16px" }}
                    className="d-flex"
                  >
                    Metricloop
                  </div>
                  <div
                    className="d-flex align-center"
                    style={{ marginTop: "2%" }}
                  >
                    <div style={{ color: "white", fontSize: "10px" }}>
                      1/9/2023-11:32pm
                    </div>
                    <div
                      style={{
                        color: "#EDDFDF",
                        fontSize: "10px",
                        marginLeft: "5%",
                      }}
                    >
                      Edited 1 hour ago
                    </div>
                  </div>
                </div>
              </Col>
              <Col flex="30%">
                <Avatar
                  style={{
                    backgroundColor: "#f56a00",
                    verticalAlign: "middle",
                  }}
                >
                  U
                </Avatar>
                <Avatar
                  style={{
                    backgroundColor: "#7265e6",
                    verticalAlign: "middle",
                    marginLeft: "7%",
                  }}
                >
                  U
                </Avatar>
              </Col>
            </Row>
          </div>
        </div>
        <div className="box" onClick={GoToEditorBoard}>
          <div className="sectionOne">
            <div style={{ height: "100%" }}>
              <div className="d-flex">
                <BuildingIcon></BuildingIcon>
                <div className="heading1" style={{ marginLeft: "3%" }}>
                  Rootpointers
                </div>
              </div>
              <div className="d-flex" style={{ marginTop: "7%" }}>
                <div className="heading1">IT Soluions ...</div>
              </div>
              <div
                style={{ marginTop: "3%", textAlign: "start" }}
                className="d-flex"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
                animi sequi
              </div>
              <img
                src={require("../../Assets/images/pic1.png")}
                className="picArea"
                alt=""
              />
            </div>
          </div>
          <div className="sectionTwo">
            <Row>
              <Col flex="70%">
                <div>
                  <div
                    style={{ color: "white", fontSize: "16px" }}
                    className="d-flex"
                  >
                    Metricloop
                  </div>
                  <div
                    className="d-flex align-center"
                    style={{ marginTop: "2%" }}
                  >
                    <div style={{ color: "white", fontSize: "10px" }}>
                      1/9/2023-11:32pm
                    </div>
                    <div
                      style={{
                        color: "#EDDFDF",
                        fontSize: "10px",
                        marginLeft: "5%",
                      }}
                    >
                      Edited 1 hour ago
                    </div>
                  </div>
                </div>
              </Col>
              <Col flex="30%">
                <Avatar
                  style={{
                    backgroundColor: "#f56a00",
                    verticalAlign: "middle",
                  }}
                >
                  U
                </Avatar>
                <Avatar
                  style={{
                    backgroundColor: "#7265e6",
                    verticalAlign: "middle",
                    marginLeft: "7%",
                  }}
                >
                  U
                </Avatar>
              </Col>
            </Row>
          </div>
        </div>
        <div className="box" onClick={GoToEditorBoard}>
          <div className="sectionOne">
            <div style={{ height: "100%" }}>
              <div className="d-flex">
                <BuildingIcon></BuildingIcon>
                <div className="heading1" style={{ marginLeft: "3%" }}>
                  Rootpointers
                </div>
              </div>
              <div className="d-flex" style={{ marginTop: "7%" }}>
                <div className="heading1">IT Soluions ...</div>
              </div>
              <div
                style={{ marginTop: "3%", textAlign: "start" }}
                className="d-flex"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
                animi sequi
              </div>
              <img
                src={require("../../Assets/images/pic1.png")}
                className="picArea"
                alt=""
              />
            </div>
          </div>
          <div className="sectionTwo">
            <Row>
              <Col flex="70%">
                <div>
                  <div
                    style={{ color: "white", fontSize: "16px" }}
                    className="d-flex"
                  >
                    Metricloop
                  </div>
                  <div
                    className="d-flex align-center"
                    style={{ marginTop: "2%" }}
                  >
                    <div style={{ color: "white", fontSize: "10px" }}>
                      1/9/2023-11:32pm
                    </div>
                    <div
                      style={{
                        color: "#EDDFDF",
                        fontSize: "10px",
                        marginLeft: "5%",
                      }}
                    >
                      Edited 1 hour ago
                    </div>
                  </div>
                </div>
              </Col>
              <Col flex="30%">
                <Avatar
                  style={{
                    backgroundColor: "#f56a00",
                    verticalAlign: "middle",
                  }}
                >
                  U
                </Avatar>
                <Avatar
                  style={{
                    backgroundColor: "#7265e6",
                    verticalAlign: "middle",
                    marginLeft: "7%",
                  }}
                >
                  U
                </Avatar>
              </Col>
            </Row>
          </div>
        </div>
        <div className="box" onClick={GoToEditorBoard}>
          <div className="sectionOne">
            <div style={{ height: "100%" }}>
              <div className="d-flex">
                <BuildingIcon></BuildingIcon>
                <div className="heading1" style={{ marginLeft: "3%" }}>
                  Rootpointers
                </div>
              </div>
              <div className="d-flex" style={{ marginTop: "7%" }}>
                <div className="heading1">IT Soluions ...</div>
              </div>
              <div
                style={{ marginTop: "3%", textAlign: "start" }}
                className="d-flex"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
                animi sequi
              </div>
              <img
                src={require("../../Assets/images/pic1.png")}
                className="picArea"
                alt=""
              />
            </div>
          </div>
          <div className="sectionTwo">
            <Row>
              <Col flex="70%">
                <div>
                  <div
                    style={{ color: "white", fontSize: "16px" }}
                    className="d-flex"
                  >
                    Metricloop
                  </div>
                  <div
                    className="d-flex align-center"
                    style={{ marginTop: "2%" }}
                  >
                    <div style={{ color: "white", fontSize: "10px" }}>
                      1/9/2023-11:32pm
                    </div>
                    <div
                      style={{
                        color: "#EDDFDF",
                        fontSize: "10px",
                        marginLeft: "5%",
                      }}
                    >
                      Edited 1 hour ago
                    </div>
                  </div>
                </div>
              </Col>
              <Col flex="30%">
                <Avatar
                  style={{
                    backgroundColor: "#f56a00",
                    verticalAlign: "middle",
                  }}
                >
                  U
                </Avatar>
                <Avatar
                  style={{
                    backgroundColor: "#7265e6",
                    verticalAlign: "middle",
                    marginLeft: "7%",
                  }}
                >
                  U
                </Avatar>
              </Col>
            </Row>
          </div>
        </div>
        <div className="box" onClick={GoToEditorBoard}>
          <div className="sectionOne">
            <div style={{ height: "100%" }}>
              <div className="d-flex">
                <BuildingIcon></BuildingIcon>
                <div className="heading1" style={{ marginLeft: "3%" }}>
                  Rootpointers
                </div>
              </div>
              <div className="d-flex" style={{ marginTop: "7%" }}>
                <div className="heading1">IT Soluions ...</div>
              </div>
              <div
                style={{ marginTop: "3%", textAlign: "start" }}
                className="d-flex"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
                animi sequi
              </div>
              <img
                src={require("../../Assets/images/pic1.png")}
                className="picArea"
                alt=""
              />
            </div>
          </div>
          <div className="sectionTwo">
            <Row>
              <Col flex="70%">
                <div>
                  <div
                    style={{ color: "white", fontSize: "16px" }}
                    className="d-flex"
                  >
                    Metricloop
                  </div>
                  <div
                    className="d-flex align-center"
                    style={{ marginTop: "2%" }}
                  >
                    <div style={{ color: "white", fontSize: "10px" }}>
                      1/9/2023-11:32pm
                    </div>
                    <div
                      style={{
                        color: "#EDDFDF",
                        fontSize: "10px",
                        marginLeft: "5%",
                      }}
                    >
                      Edited 1 hour ago
                    </div>
                  </div>
                </div>
              </Col>
              <Col flex="30%">
                <Avatar
                  style={{
                    backgroundColor: "#f56a00",
                    verticalAlign: "middle",
                  }}
                >
                  U
                </Avatar>
                <Avatar
                  style={{
                    backgroundColor: "#7265e6",
                    verticalAlign: "middle",
                    marginLeft: "7%",
                  }}
                >
                  U
                </Avatar>
              </Col>
            </Row>
          </div>
        </div>
        <div className="box" onClick={GoToEditorBoard}>
          <div className="sectionOne">
            <div style={{ height: "100%" }}>
              <div className="d-flex">
                <BuildingIcon></BuildingIcon>
                <div className="heading1" style={{ marginLeft: "3%" }}>
                  Rootpointers
                </div>
              </div>
              <div className="d-flex" style={{ marginTop: "7%" }}>
                <div className="heading1">IT Soluions ...</div>
              </div>
              <div
                style={{ marginTop: "3%", textAlign: "start" }}
                className="d-flex"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
                animi sequi
              </div>
              <img
                src={require("../../Assets/images/pic1.png")}
                className="picArea"
                alt=""
              />
            </div>
          </div>
          <div className="sectionTwo">
            <Row>
              <Col flex="70%">
                <div>
                  <div
                    style={{ color: "white", fontSize: "16px" }}
                    className="d-flex"
                  >
                    Metricloop
                  </div>
                  <div
                    className="d-flex align-center"
                    style={{ marginTop: "2%" }}
                  >
                    <div style={{ color: "white", fontSize: "10px" }}>
                      1/9/2023-11:32pm
                    </div>
                    <div
                      style={{
                        color: "#EDDFDF",
                        fontSize: "10px",
                        marginLeft: "5%",
                      }}
                    >
                      Edited 1 hour ago
                    </div>
                  </div>
                </div>
              </Col>
              <Col flex="30%">
                <Avatar
                  style={{
                    backgroundColor: "#f56a00",
                    verticalAlign: "middle",
                  }}
                >
                  U
                </Avatar>
                <Avatar
                  style={{
                    backgroundColor: "#7265e6",
                    verticalAlign: "middle",
                    marginLeft: "7%",
                  }}
                >
                  U
                </Avatar>
              </Col>
            </Row>
          </div>
        </div>
      </div>
      {/* ----------------- create new board */}
      <AddNewBoard
        show={AddBoard}
        onHide={() => {
          setAddBoard(false);
        }}
      ></AddNewBoard>
    </div>
  );
}

export default BoardPage;
