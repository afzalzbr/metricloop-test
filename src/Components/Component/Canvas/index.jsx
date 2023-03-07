import React, { useCallback, useEffect } from "react";
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
import AddNewNode from "./Nodes/AddNewNode";
import {
  createNewEdgeInBoard,
  createNewNodeInBoard,
  getAllEdgesOfBoard,
  getAllNodesOfBoard,
  resetAddNode,
  updateNodeInBoard,
} from "../../../store/Actions/editorActions";
import { useSelector } from "react-redux";

const nodeTypes = {
  custom: CustomNode,
  custom2: DefaultNode,
};

const minimapStyle = {
  height: 120,
};
const defaultViewport = { x: 0, y: 0, zoom: 1 };
const onInit = (reactFlowInstance) =>
  console.log("flow loaded:", reactFlowInstance);

const FlowCanvas = () => {
  const [showAddNodeModal, setShowAddNodeModal] = React.useState(false);
  const nodeData = useSelector((state) => state.editor.nodesGraph);
  const edgeData = useSelector((state) => state.editor.edgesGraph);
  const nodeDB = useSelector((state) => state.editor.nodes);
  const edgeDB = useSelector((state) => state.editor.edges);
  const [nodes, setNodes, onNodesChange] = useNodesState(nodeData);
  const [edges, setEdges, onEdgesChange] = useEdgesState(edgeData);

  const onConnect = useCallback(
    (params) => {
      setEdges((eds) => addEdge(params, eds));
      let leftNode = nodeDB.find((n) => n.node_id == params.source);
      let rightNode = nodeDB.find((n) => n.node_id == params.target);
      let leftNodeID = leftNode?.id;
      let rightNodeID = rightNode?.id;
      createNewEdgeInBoard({
        board_id: boardId,
        left_node: leftNodeID,
        right_node: rightNodeID,
        edge_data: JSON.stringify(params),
        type: "simple",
      });
    },
    [nodeDB]
  );
  const query = new URLSearchParams(window.location.search);

  const boardId = query.get("board_id");

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

  const addNewNode = ({ node_name, node_style }) => {
    let newId = nodes.length + 1;
    const newNode = {
      id: `${newId}`,
      type: "custom2",
      position: { x: 0, y: 0 },
      data: {
        label: `${node_name}`,
        handleIds: [
          `handle-${newId}-1`,
          `handle-${newId}-2`,
          `handle-${newId}-3`,
          `handle-${newId}-4`,
        ],
      },
      className: "default-node",
    };

    createNewNodeInBoard({
      node_id: newId,
      node_name,
      node_style,
      board_id: boardId,
      node_data: JSON.stringify(newNode),
    })
      .then((res) => {
        console.log("res: ", res);
        setNodes((prevNodes) => [...prevNodes, newNode]);
        setShowAddNodeModal(false);
      })
      .catch((err) => {
        console.log("err: ", err);
        setNodes((prevNodes) => [...prevNodes, newNode]);
        setShowAddNodeModal(false);
      });
  };

  useEffect(() => {
    getAllNodesOfBoard(boardId);
    getAllEdgesOfBoard(boardId);
    return () => {};
  }, []);

  useEffect(() => {
    if (nodeData && nodes.length == 0) {
      setNodes(nodeData);
    }
    if (edgeData && edges.length == 0) {
      setEdges(edgeData);
    }
  }, [nodeData, edgeData]);

  const onNodeChangesCustom = (newNodes) => {
    let node = newNodes[0];
    if (node && node.dragging) {
      let currentNode = nodes.find((n) => n.id === node.id);
      currentNode.position = node.position;
      let nodeDataInDB = nodeDB.find((n) => n.node_id == node.id);
      let newNodeDataInDB = { ...nodeDataInDB };
      newNodeDataInDB.node_data = JSON.stringify(currentNode);
      delete newNodeDataInDB.positionAbsolute;
      delete newNodeDataInDB.selected;
      delete newNodeDataInDB.dragging;
      updateNodeInBoard(newNodeDataInDB);
    }
    onNodesChange(newNodes);
  };

  return (
    <ReactFlow
      nodes={nodes}
      edges={edgesWithUpdatedTypes}
      onNodesChange={onNodeChangesCustom}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      onInit={onInit}
      fitView
      attributionPosition="top-right"
      nodeTypes={nodeTypes}
      defaultViewport={defaultViewport}
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
            onClick={() => setShowAddNodeModal(true)}
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
      <AddNewNode
        show={showAddNodeModal}
        onHide={() => {
          setShowAddNodeModal(false);
          resetAddNode();
        }}
        onCreateNode={addNewNode}
        boardId={query.get("board_id")}
      />
    </ReactFlow>
  );
};

export default FlowCanvas;
