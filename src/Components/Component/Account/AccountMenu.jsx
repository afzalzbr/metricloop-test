import { React } from "react";
import "../../Assets/styles/Layout.scss";
import { Avatar } from "antd";
import { useNavigate } from "react-router-dom";

function AccountMenu() {
  const navigate = useNavigate();
  return (
    <div className="topbar">
      <div className="profileDropDown">
        <Avatar
          style={{ width: "4rem", height: "4rem" }}
          src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
        />
        <div>
          <div className="UserNameFont">Alex Jhon</div>
          <div className="EmailFont">AlexJhon@gmail.com</div>
          <button
            className="logoutButton"
            onClick={() => {
              navigate("/");
              window.location.reload();
            }}
          >
            Log out
          </button>
        </div>
      </div>
    </div>
  );
}

export default AccountMenu;
