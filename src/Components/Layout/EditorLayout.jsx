import { React, useState } from "react";
import "../Assets/styles/Layout.scss";
import { useNavigate } from "react-router-dom";
import { Layout } from "antd";
import MatricLoopLogoIcon from "../Assets/svgIcon/MatricLoopLogoicon";
import PersonIcon from "../Assets/svgIcon/Personicon";
import EditorPage from "../Pages/Editor/EditorPage";
import AccountMenu from "../Component/Account/AccountMenu";

const { Header, Content } = Layout;

function EditorLayout() {
  const navigate = useNavigate();
  const [customDropdown, setcustomDropdown] = useState(false);
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
            <MatricLoopLogoIcon></MatricLoopLogoIcon>
          </button>
        </div>
        <div style={{ position: "relative" }}>
          <button
            className="iconButton"
            style={{ marginTop: "1.6rem" }}
            onClick={() =>
              setcustomDropdown((customDropdown) => !customDropdown)
            }
          >
            <PersonIcon></PersonIcon>
          </button>
          {customDropdown ? <AccountMenu></AccountMenu> : null}
        </div>
      </Header>
      <Content>
        <EditorPage></EditorPage>
      </Content>
    </Layout>
  );
}

export default EditorLayout;
