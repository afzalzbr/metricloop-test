import React, { useCallback } from "react";
import ReactFlow, {
  addEdge,
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
} from "reactflow";

import {
  nodes as initialNodes,
  edges as initialEdges,
} from "./initialElements";
import CustomNode from "./Nodes/CustomNode";

import "reactflow/dist/style.css";
import "./Styles/overview.css";
import DefaultNode from "./Nodes/DefaultNode";

const nodeTypes = {
  custom: CustomNode,
  custom2: DefaultNode,
};

const minimapStyle = {
  height: 120,
};

const onInit = (reactFlowInstance) =>
  console.log("flow loaded:", reactFlowInstance);

const FlowCanvas = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    []
  );

  // we are using a bit of a shortcut here to adjust the edge type
  // this could also be done with a custom edge for example
  const edgesWithUpdatedTypes = edges.map((edge) => {
    // if (edge.sourceHandle) {
    //   const edgeType = nodes.find((node) => node.type === "custom").data
    //     .selects[edge.sourceHandle];
    //   edge.type = edgeType;
    // }

    return edge;
  });

  const options = [
    { value: "standard", label: "Standard" },
    { value: "single", label: "Single" },
    { value: "multi", label: "Multi" },
    { value: "decision", label: "Decision" },
  ];

  const edgeOptions = [
    { value: "straight", label: "Simple Edge" },
    { value: "default", label: "Rounded Edge" },
    { value: "step", label: "Sharp Edge" },
    { value: "smoothstep", label: "Smooth Edge" },
  ];

  const addNewNode = () => {
    let newId = nodes.length + 1;
    const newNode = {
      id: `${newId}`,
      type: "custom2",
      position: { x: 0, y: 0 },
      data: {
        label: `New Node ${newId}`,
        handleIds: [
          `handle-${newId}-1`,
          `handle-${newId}-2`,
          `handle-${newId}-3`,
          `handle-${newId}-4`,
        ],
      },
      className: "default-node",
    };
    setNodes((prevNodes) => [...prevNodes, newNode]);
  };

  console.log("nodes: ", nodes);
  console.log("edges: ", edges);

  return (
    <ReactFlow
      nodes={nodes}
      edges={edgesWithUpdatedTypes}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      onInit={onInit}
      fitView
      attributionPosition="top-right"
      nodeTypes={nodeTypes}
    >
      <div className="top-bar">
        <div className="node-type-select-wrapper">
          <select className="nodrag" onChange={() => {}}>
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
        <div>
          <button
            className="node-add-button"
            onClick={() => {
              addNewNode();
              // setViewModel(true);
            }}
            style={{}}
          >
            Add Node
          </button>
        </div>
        <div className="node-type-select-wrapper">
          <select className="nodrag" onChange={() => {}}>
            {edgeOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>
      <MiniMap style={minimapStyle} zoomable pannable />
      <Controls />
      <Background color="#aaa" gap={16} />
    </ReactFlow>
  );
};

export default FlowCanvas;
