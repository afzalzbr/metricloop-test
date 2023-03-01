import React, { useState } from "react";
import "../Assets/styles/Layout.scss";
import { useNavigate } from "react-router-dom";
import { Layout, Avatar } from "antd";
import DashboardDesign from "../Pages/Dashboard/DashboardDesign";
import MatricLoopLogoIcon from "../Assets/svgIcon/MatricLoopLogoicon";
import PersonIcon from "../Assets/svgIcon/Personicon";
import HomePage from "../Pages/HomePage/HomePage";
import AccountMenu from "../Component/Account/AccountMenu";

const { Header, Content } = Layout;

function DashboardLayout() {
  const navigate = useNavigate();
  const [customDropdown, setCustomDropdown] = useState(false);
  const CURRENT_URL = window.location.pathname;

  return (
    <Layout>
      <Header className="topbar">
        <div>
          <button
            className="iconButton"
            style={{ marginTop: "1.6rem" }}
            onClick={() => {
              navigate("/board");
            }}
          >
            <MatricLoopLogoIcon />
          </button>
        </div>
        <div style={{ position: "relative" }}>
          <button
            className="iconButton"
            style={{ marginTop: "1.6rem" }}
            onClick={() =>
              setCustomDropdown((customDropdown) => !customDropdown)
            }
          >
            <PersonIcon />
          </button>
          {customDropdown ? <AccountMenu /> : null}
        </div>
      </Header>
      <Content>
        {CURRENT_URL === "/" ? <HomePage /> : <DashboardDesign />}
      </Content>
    </Layout>
  );
}

export default DashboardLayout;
