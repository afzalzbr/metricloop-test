import React, { memo } from "react";
import { Handle, Position } from 'reactflow';
import { ReactComponent as PlusIcon } from "../../../Assets/svgIcon/NodeIcons/PlusIcon.svg";


const plusIconStyles = {
  height: "8px",
  width: "8px",
  fontSize: "8px",
  color: "#4E46DC",
}

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

const CustomHandle = (props) => {

  return (
    <>
      <Handle
        type={props?.type ?? "target"}
        position={props?.position ?? Position.Left}
        style={props?.style ?? { background: '#555' }}
        onConnect={props?.onConnect ?
          (params) => props.onConnect(params)
          : (params) => console.log('handle onConnect', params)
        }
        isConnectable={props?.isConnectable}
        {...props}
      >
        {props?.children ?? null}
      </Handle>
    </>
  );
};

export default memo(CustomHandle);
