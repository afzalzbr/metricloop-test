import React, { useState } from "react";
import "../../Assets/styles/Layout.scss";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";
import { Outlet, useNavigate } from "react-router-dom";
import DataIcon from "../../Assets/svgIcon/dataicon";
import SegmentsIcon from "../../Assets/svgIcon/Segmenticon";
import MatricsIcon from "../../Assets/svgIcon/Matricicon";

const { Sider, Content } = Layout;

function DashboardDesign() {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const navigate = useNavigate();

  return (
    <Layout>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        className="sidebar"
      >
        <button onClick={() => setCollapsed(!collapsed)} className="arrow-btn">
          <div style={{ color: "white", fontSize: "1.4rem" }}>
            {React.createElement(
              collapsed ? ArrowRightOutlined : ArrowLeftOutlined
            )}
          </div>
        </button>
        <Menu
          className="bg-transparent text"
          mode="inline"
          defaultSelectedKeys={["1"]}
          onClick={({ key }) => {
            if (key === "signout") {
              // to do sign our
            } else {
              navigate(key);
            }
          }}
          items={[
            {
              icon: <MatricsIcon />,
              label: "Dashboard",
              key: "/board",
            },
            {
              icon: <DataIcon></DataIcon>,
              label: "Data",
              key: "/data",
            },
            {
              icon: <SegmentsIcon />,
              label: "Segments",
              key: "/segments",
            },
            {
              icon: <MatricsIcon />,
              label: "Metrics",
              key: "/metrics",
            },
          ]}
        />

        {/* <div>
          <button
            onClick={() => {
              navigate("/data");
            }}
          >
            <DataIcon></DataIcon>
            <div>
              {React.createElement(
                collapsed ? "Data" : "Data"
              )}
            </div>
          </button>
        </div> */}
      </Sider>
      <Layout className="site-layout">
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: "calc(100vh - 113px)",
            background: colorBgContainer,
          }}
        >
          <div style={{ display: "flow-root" }}>
            <Outlet />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
}
export default DashboardDesign;
