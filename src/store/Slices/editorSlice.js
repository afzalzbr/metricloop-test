import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  totalNodes: 0,
  totalEdges: 0,
  nodes: [],
  edges: [],
  loading: false,
  addNode: {
    loading: false,
    fail: false,
    success: false,
  },
  addEdge: {
    loading: false,
    fail: false,
    success: false,
  },
  boardId: 0,
}

export const editorSlice = createSlice({
  name: 'editor',
  initialState,
  reducers: {
    // loading all nodes and edges
    loadNodes: (state, action) => {
      state.loading = true;
    },
    loadNodesSuccess: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.nodes = [...action.payload];

      state.totalNodes = action.payload.length;
      state.loading = false;
    },
    loadNodesFail: (state, action) => {
      state.loading = false;
    },

    // load all edges of a board
    loadEdges: (state, action) => {
      state.loading = true;
    },
    loadEdgesSuccess: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      state.edges = [...action.payload];
      state.totalEdges = action.payload.length;
      state.loading = false;
    },
    loadEdgesFail: (state, action) => {
      state.loading = false;
    },

    // adding a node
    addNodeLoading: (state, action) => {
      state.addNode.loading = true;
      state.addNode.fail = false;
      state.addNode.success = false;
    },
    addNodeSuccess: (state, action) => {
      state.addNode.loading = false;
      state.addNode.fail = false;
      state.addNode.success = true;
      state.nodes = [...state.nodes, action.payload];
    },
    addNodeFail: (state, action) => {
      state.addNode.fail = true;
      state.addNode.loading = false;
      state.addNode.success = false;
    },
    resetAddNode: (state) => {
      state.addNode.fail = false;
      state.addNode.loading = false;
      state.addNode.success = false;
    },

    // adding an edge
    addEdgeLoading: (state, action) => {
      state.addEdge.loading = true;
      state.addEdge.fail = false;
      state.addEdge.success = false;
    },
    addEdgeSuccess: (state, action) => {
      state.addEdge.loading = false;
      state.addEdge.fail = false;
      state.addEdge.success = true;
      state.edges = [...state.edges, action.payload];
    },
    addEdgeFail: (state, action) => {
      state.addEdge.fail = true;
      state.addEdge.loading = false;
      state.addEdge.success = false;
    },
    resetAddEdge: (state) => {
      state.addEdge.fail = false;
      state.addEdge.loading = false;
      state.addEdge.success = false;
    },

    // reset
    reset: () => initialState,
  },
})

// Action creators are generated for each case reducer function
export const { actions, reducer } = editorSlice;

export default editorSlice.reducer