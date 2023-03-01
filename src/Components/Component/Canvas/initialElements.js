import React from 'react';
import { MarkerType, Position } from 'reactflow';

export const nodes1 = [
  {
    id: '1',
    type: 'input',
    data: {
      label: 'Start',
    },
    position: { x: 250, y: 0 },
  },
  {
    id: '2',
    type: 'custom2',
    data: {
      label: 'custom2 Node',
      handleIds: [
        'handle-2-1',
        'handle-2-2',
        'handle-2-3',
        'handle-2-4',
      ],
    },
    position: { x: 100, y: 100 },
    className: 'default-node',
  },
  {
    id: '3',
    type: 'output',
    data: {
      label: 'Output Node',
    },
    position: { x: 400, y: 100 },
  },
  {
    id: '4',
    type: 'custom',
    position: { x: 100, y: 200 },
    data: {
      selects: {
        'handle-0': 'smoothstep',
        'handle-1': 'smoothstep',
      },
    },
  },
  {
    id: '5',
    type: 'output',
    data: {
      label: 'custom style',
    },
    className: 'circle',
    style: {
      background: '#2B6CB0',
      color: 'white',
    },
    position: { x: 400, y: 200 },
    sourcePosition: Position.Right,
    targetPosition: Position.Left,
  },
  {
    id: '6',
    type: 'output',
    style: {
      background: '#63B3ED',
      color: 'white',
      width: 100,
    },
    data: {
      label: 'Node',
    },
    position: { x: 400, y: 325 },
    sourcePosition: Position.Right,
    targetPosition: Position.Left,
  },
  {
    id: '7',
    type: 'default',
    className: 'annotation',
    data: {
      label: (
        <>
          On the bottom left you see the <strong>Controls</strong> and the bottom right the{' '}
          <strong>MiniMap</strong>. This is also just a node 🥳
        </>
      ),
    },
    draggable: false,
    selectable: false,
    position: { x: 150, y: 400 },
  },
];
export const nodes = [
  // {
  //   id: '1',
  //   type: 'custom2',
  //   data: {
  //     label: 'custom2 Node',
  //     handleIds: [
  //       'handle-2-1',
  //       'handle-2-2',
  //       'handle-2-3',
  //       'handle-2-4',
  //     ],
  //   },
  //   position: { x: 100, y: 100 },
  //   className: 'default-node',
  // },
];

export const edges1 = [
  {
    id: 'e1-2', source: '1', target: '2',
    // label: 'this is an edge label', 
    targetHandle: 'handle-2-4',
    // data: {
    //   selectIndex: 0,
    // },
    // animated: true
    type: 'smoothstep',
  },
  {
    id: 'e2-3', source: '2', target: '3',
    // label: 'this is an edge label', 
    sourceHandle: 'handle-2-2',
    // data: {
    //   selectIndex: 0,
    // },
    animated: true
  },
  { id: 'e1-3', source: '1', target: '3', animated: true },
  {
    id: 'e4-5',
    source: '4',
    target: '5',
    type: 'smoothstep',
    sourceHandle: 'handle-0',
    data: {
      selectIndex: 0,
    },
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
  {
    id: 'e4-6',
    source: '4',
    target: '6',
    type: 'smoothstep',
    sourceHandle: 'handle-1',
    data: {
      selectIndex: 1,
    },
    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
];

export const edges = []