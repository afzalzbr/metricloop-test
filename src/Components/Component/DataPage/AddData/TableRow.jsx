import React, { useState } from "react";

// icons
import GridIcon from "../../../Assets/svgIcon/GridIcon";
import FolderIcon from "../../../Assets/svgIcon/FolderIcon";
import ExcelFile1Icon from "../../../Assets/svgIcon/ExcelFile1Icon";
import VerticalDotsIcon from "../../../Assets/svgIcon/VerticalDotsIcon";
import { DeleteOutlined, EyeOutlined } from "@ant-design/icons";
import DeleteDialog from "../../DeleteDialog/DeleteDialog";
import GoBackButton from "../../../Assets/svgIcon/GoBackButton";

const TableRow = ({ id, name, handleDetails, lastModified, ownedBy }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const TableDetails = () => {
    handleDetails && handleDetails(id, name);
  };
  return (
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
          <div className="tabledataspan" style={{ marginLeft: "1.3%" }}>
            {name}
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
        <div className="tabledataspan">{ownedBy}</div>
      </td>
      <td
        style={{
          width: "13%",
          paddingTop: "2%",
          paddingBottom: "2%",
        }}
      >
        <div className="tabledataspan">{lastModified}</div>
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
            onClick={() => setShowDropdown((state) => !state)}
          >
            <VerticalDotsIcon />
          </button>
          {/* ---------------- Dropdown menu */}
          {showDropdown ? (
            <div className="customDropDown">
              <button
                className="menuBtn"
                // style={{ marginTop: "11%" }}
                onClick={TableDetails}
              >
                <div className="d-flex align-center justify-center">
                  <EyeOutlined style={{ fontSize: "1rem" }} />
                  <div style={{ marginLeft: "11%" }}>Detail</div>
                </div>
              </button>
              {/* <button
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
          </button> */}
            </div>
          ) : null}
        </div>
      </td>
    </tr>
  );
};

export default TableRow;
