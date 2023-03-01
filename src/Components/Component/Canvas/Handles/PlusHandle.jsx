import React, { memo } from "react";
import { Handle, Position } from "reactflow";
import { ReactComponent as PlusIcon } from "../../../Assets/svgIcon/NodeIcons/PlusIcon.svg";

const plusIconStyles = {
  height: "8px",
  width: "8px",
  fontSize: "8px",
  color: "#4E46DC",
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

const PlusHandle = (props) => {
  const { nodeId, handleId, handleType, position, style, isConnectable } =
    props;
  return (
    <>
      <Handle
        type={handleType}
        position={Position.Top}
        id={handleId}
        style={handleCircleStyles}
      >
        <PlusIcon
          className={[handleType]}
          data-handleid={handleId}
          data-nodeid={nodeId}
          data-handlepos={position}
          style={plusIconStyles}
        />
      </Handle>
    </>
  );
};

export default memo(PlusHandle);
