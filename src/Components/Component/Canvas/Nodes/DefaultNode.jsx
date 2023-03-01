import { Button, Space, Tooltip, Typography } from "antd";
import React, { memo } from "react";
import styled from "styled-components";
import { Position } from "reactflow";

// icons imports
import { ReactComponent as AnalyticsIcon } from "../../../Assets/svgIcon/NodeIcons/AnalyticsIcon.svg";
import { ReactComponent as ZoomSearchIcon } from "../../../Assets/svgIcon/NodeIcons/SearchZoomIcon.svg";
import { ReactComponent as LineGraphIcon } from "../../../Assets/svgIcon/NodeIcons/LineGraphIcon.svg";
import { ReactComponent as EditIcon } from "../../../Assets/svgIcon/NodeIcons/EditIcon.svg";
import { ReactComponent as NotesIcon } from "../../../Assets/svgIcon/NodeIcons/NotesIcon.svg";
import { ReactComponent as EditPencilIcon } from "../../../Assets/svgIcon/NodeIcons/EditPencil.svg";
import { ReactComponent as PlusIcon } from "../../../Assets/svgIcon/NodeIcons/PlusIcon.svg";

// components imports
import CustomHandle from "./CustomHandle";

const Wrapper = styled.div`
  padding: 10px 17px 10px 26px;
  margin: auto;
  max-width: 500px;
  flex-grow: 1;
  border-radius: 4px;
  background: #fff;
  border-right: 9px solid #4e46dc;
  border-left: 9px solid #4e46dc;
  color: #000000;
  .node-title {
    color: #000000;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* .actions {
      display: flex;
      justify-content: space-between;
      align-items: center;
    } */
  }
  .container-item {
    background: #f1f1f1;
    height: 50px;
    border-radius: 4px;
    padding: 0 10px;
    display: flex;
  }
  .container-item-body {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .ant-space-item.container-item-body {
    flex: 1;
  }
  .container-item-text {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .first-line {
  }

  .second-line {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }
  .container-item-btn {
    border: 0 !important;
    background: transparent !important;
    height: 20px;
    width: 20px;
  }
  .container-body-actions {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const handleIconStyles = {
  height: "8px",
  width: "8px",
  fontSize: "8px",
  color: "#4E46DC",
};

const handleStyles = {
  // top1: { ...handleIconStyles, position: "absolute", top: -5, left: -5 },
  top: { ...handleIconStyles, width: "8px", height: "8px" },
  // right1: { ...handleIconStyles, position: "absolute", top: -5, right: -5 },
  right: { ...handleIconStyles, width: "8px", height: "8px" },
  // bottom1: { ...handleIconStyles, position: "absolute", top: -5, bottom: -5 },
  bottom: { ...handleIconStyles, width: "8px", height: "8px" },
  // left1: { ...handleIconStyles, position: "absolute", top: -5, left: -5 },
  left: { ...handleIconStyles, width: "8px", height: "8px" },
};

const handleCircleStyles = {
  zIndex: 3,
  height: "15px",
  width: "15px",
  background: "#fff",
  top: "calc(50% - 0)",
  right: "-8px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  border: "2px solid #4E46DC",
};

const DefaultNode = ({ id, data }) => {
  const handleIds = data?.handleIds;
  return (
    <Wrapper>
      <Space direction="vertical" style={{ width: "100%" }}>
        <Space className="node-title" wrap gap={8} style={{ width: "100%" }}>
          <div>{data?.label}</div>
          <div className="actions">
            <Tooltip title="Line Graph">
              <Button
                size="small"
                style={{ width: 20, height: 20 }}
                icon={<LineGraphIcon />}
              />
            </Tooltip>
            <Tooltip title="Edit Node">
              <Button
                size="small"
                style={{ width: 20, height: 20 }}
                icon={<EditIcon />}
              />
            </Tooltip>
            <Tooltip title="Search">
              <Button
                size="small"
                style={{ width: 20, height: 20 }}
                icon={<ZoomSearchIcon />}
              />
            </Tooltip>
            <Tooltip title="Notes">
              <Button
                size="small"
                style={{ width: 20, height: 20 }}
                icon={<NotesIcon />}
              />
            </Tooltip>
          </div>
        </Space>
        {[1].map((item) => (
          <div width="100%">
            <Space
              container
              className="container-item"
              spacing={2}
              style={{ width: "100%" }}
            >
              <Space>
                <Tooltip title="search">
                  <Button
                    size="small"
                    className="container-item-btn"
                    style={{
                      width: 20,
                      height: 20,
                      padding: 0,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                    icon={<AnalyticsIcon height={"15px"} width={"15px"} />}
                  />
                </Tooltip>
              </Space>
              <Space className="container-item-body" style={{ flex: 1 }}>
                <div className="container-item-text">
                  <div className="first-line">
                    <Typography style={{ fontSize: "10px" }} variant="body4">
                      Standard license
                    </Typography>
                  </div>
                  <div className="second-line">
                    <Typography
                      sx={{ cursor: "pointer", fontSize: "10px" }}
                      variant="body6"
                    >
                      24%
                    </Typography>
                    <Typography
                      sx={{ cursor: "pointer", fontSize: "10px" }}
                      variant="body6"
                    >
                      {" < 4%"}
                    </Typography>
                  </div>
                </div>
                <div className="container-body-actions">
                  <Tooltip title="Edit Icon">
                    <Button
                      size="small"
                      style={{ width: 20, height: 20 }}
                      className="container-item-btn"
                      icon={<EditPencilIcon />}
                    />
                  </Tooltip>
                  <Tooltip title="Edit Icon">
                    <Button
                      size="small"
                      style={{ width: 20, height: 20 }}
                      className="container-item-btn"
                      icon={<NotesIcon />}
                    />
                  </Tooltip>
                </div>
              </Space>
            </Space>
          </div>
        ))}
      </Space>
      {/* Handles */}
      <CustomHandle
        type="target"
        position={Position.Top}
        id={handleIds[0]}
        style={handleCircleStyles}
      >
        <PlusIcon
          className={["target"]}
          data-handleid={handleIds[0]}
          data-nodeid={id}
          data-handlepos={"top"}
          style={handleStyles[Position.Top]}
        />
      </CustomHandle>
      <CustomHandle
        type="source"
        position={Position.Right}
        id={handleIds[1]}
        style={handleCircleStyles}
      >
        <PlusIcon
          className={["source"]}
          data-handleid={handleIds[1]}
          data-nodeid={id}
          data-handlepos={"right"}
          style={handleStyles[Position.Right]}
        />
      </CustomHandle>
      <CustomHandle
        type="source"
        position={Position.Bottom}
        id={handleIds[2]}
        style={handleCircleStyles}
      >
        <PlusIcon
          className={["source"]}
          data-handleid={handleIds[2]}
          data-nodeid={id}
          data-handlepos={"bottom"}
          style={handleStyles[Position.Bottom]}
        />
      </CustomHandle>
      <CustomHandle
        type="target"
        position={Position.Left}
        id={handleIds[3]}
        style={handleCircleStyles}
      >
        <PlusIcon
          className={["target"]}
          data-handleid={handleIds[3]}
          data-nodeid={id}
          data-handlepos={"left"}
          style={handleStyles[Position.Left]}
        />
      </CustomHandle>
    </Wrapper>
  );
};

// export default DefaultNode;
export default memo(DefaultNode);
