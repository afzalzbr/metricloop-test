import React from "react";
import BuildingIcon from "../../Assets/svgIcon/BuildingIcon";
import { Row, Col, Avatar } from "antd";
import { useNavigate } from "react-router-dom";

import bImg from "../../Assets/images/pic1.png";

const initial = {
  superText: "Rootpointers",
  name: "IT Soluions ...",
  description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo animi
  sequi`,
  subText: "Metricloop",
  createdAt: "1/9/2023-11:32pm",
  lastUpdated: "Edited 1 hour ago",
  users: [
    { name: "User 1", bgColor: "#f56a00" },
    { name: "User 2", bgColor: "#7265e6" },
  ],
};

const Board = (props) => {
  const navigate = useNavigate();
  function GoToEditorBoard() {
    navigate("/editor");
  }

  return (
    <div className="box" onClick={GoToEditorBoard}>
      <div className="sectionOne">
        <div style={{ height: "100%" }}>
          <div className="d-flex">
            <BuildingIcon></BuildingIcon>
            <div className="heading1" style={{ marginLeft: "3%" }}>
              {props?.superText}
            </div>
          </div>
          <div className="d-flex" style={{ marginTop: "7%" }}>
            <div className="heading1"> {props?.name}</div>
          </div>
          <div
            style={{ marginTop: "3%", textAlign: "start" }}
            className="d-flex"
          >
            {props?.description}
          </div>
          <img src={bImg} className="picArea" alt="" />
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
                {props?.subText}
              </div>
              <div className="d-flex align-center" style={{ marginTop: "2%" }}>
                <div style={{ color: "white", fontSize: "10px" }}>
                  {props?.createdAt}
                </div>
                <div
                  style={{
                    color: "#EDDFDF",
                    fontSize: "10px",
                    marginLeft: "5%",
                  }}
                >
                  {props?.lastUpdated}
                </div>
              </div>
            </div>
          </Col>
          <Col flex="30%">
            {props?.users?.map((user) => (
              <Avatar
                key={user.name}
                style={{
                  backgroundColor: user?.bgColor ?? "#f56a00",
                  verticalAlign: "middle",
                }}
              >
                {user?.name}
              </Avatar>
            ))}
          </Col>
        </Row>
      </div>
    </div>
  );
};

Board.defaultProps = initial;

export default Board;
