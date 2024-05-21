import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { addEdge, applyNodeChanges } from "reactflow";
import { FilterBlockData, OperationNodes } from "../utils/types";
import {
  AddFileDataPayloadType,
  AddNodePayloadType,
  FileData,
  OnConnectPayloadType,
  OnNodeChangePayloadType,
  UpdateFilterPayloadType,
  WorkFlowState,
} from "./types";

const initialState: WorkFlowState = {
  edges: [],
  nodes: [],
  fileData: null,
};

const workFlowSlice = createSlice({
  name: "workFlowSlice",
  initialState,
  reducers: {
    setFileData: (state, { payload }: PayloadAction<FileData | null>) => {
      state.fileData = payload;
    },
    addNode: (state, { payload }: PayloadAction<AddNodePayloadType>) => {
      const id = Date.now().toString();
      const position = { x: -240, y: 400 };
      const type = payload.type;
      let data = {};
      switch (type) {
        case OperationNodes.FILE_NODE:
          data = {
            fileData: null,
          };
          break;
        case OperationNodes.FILTER_NODE:
          data = <FilterBlockData>{
            condition: null,
            column: null,
            fileData: null,
          };
          break;
        case OperationNodes.EXAMPLE_NODE:
          data = {
            fileData: payload.fileData,
          };
          break;
      }
      state.nodes = [...state.nodes, { id, position, data, type }];
    },
    addFileData: (
      state,
      { payload }: PayloadAction<AddFileDataPayloadType>
    ) => {
      const { fileData, id } = payload;
      const targetNode = state.nodes.find((node) => node.id === id);

      if (!targetNode || targetNode.type !== OperationNodes.FILE_NODE) {
        return;
      }

      state.nodes = state.nodes.map((node) =>
        node.id === id ? { ...node, data: { ...node.data, fileData } } : node
      );

      state.fileData = fileData;
    },
    onNodeChange: (
      state,
      { payload }: PayloadAction<OnNodeChangePayloadType>
    ) => {
      const { changes } = payload;
      const nodes = state.nodes;
      state.nodes = applyNodeChanges(changes, nodes);
    },
    updateFilter: (
      state,
      { payload }: PayloadAction<UpdateFilterPayloadType>
    ) => {
      const { data, id } = payload;
      const targetNode = state.nodes.find((node) => node.id === id);

      if (!targetNode || targetNode.type !== OperationNodes.FILTER_NODE) {
        return;
      }

      const updatedNodes = state.nodes.map((node) =>
        node.id === id ? { ...node, data } : node
      );
      state.nodes = updatedNodes;
      if (payload.data.fileData) {
        state.fileData = payload.data.fileData;
      }
    },
    onConnect: (state, { payload }: PayloadAction<OnConnectPayloadType>) => {
      const { connection } = payload;
      const id = connection.source;
      const sourceNode = state.nodes.find((node) => node.id == id);

      if (!sourceNode) return;

      if (
        sourceNode.type === OperationNodes.FILE_NODE ||
        sourceNode.type === OperationNodes.EXAMPLE_NODE
      ) {
        const connectedNode = state.nodes.find(
          (node) => node.id === connection.target
        );
        if (!connectedNode) return;
        if (connectedNode.type === OperationNodes.FILTER_NODE) {
          const dataset = sourceNode.data.fileData || [];
          const columns = Object.keys(dataset.length ? dataset[0] : []);
          const columnsOptions = columns.map((column) => ({
            value: column,
            label: column,
          }));

          const updatedNodes = state.nodes.map((node) =>
            node.id === connectedNode.id
              ? {
                  ...node,
                  data: {
                    column: columnsOptions,
                    selectedColumn: columnsOptions.length
                      ? columnsOptions[0].value
                      : null,
                    condition: null,
                    datasource: dataset,
                    fileData: null,
                  },
                }
              : node
          );
          state.nodes = updatedNodes;
        }
      } else if (sourceNode.type === OperationNodes.FILTER_NODE) {
        const targetNode = state.nodes.find(
          (node) => node.id === connection.target
        );
        if (!targetNode) return;
        if (targetNode.type === OperationNodes.FILTER_NODE) {
          const dataset = sourceNode.data.fileData;
          if (!dataset) return;
          console.log(dataset);
          const columns = Object.keys(dataset.length ? dataset[0] : []);
          const columnsOptions = columns.map((column) => ({
            value: column,
            label: column,
          }));

          const updatedNodes = state.nodes.map((node) =>
            node.id === targetNode.id
              ? {
                  ...node,
                  data: {
                    column: columnsOptions,
                    selectedColumn: columnsOptions.length
                      ? columnsOptions[0].value
                      : null,
                    condition: null,
                    datasource: dataset,
                    fileData: null,
                  },
                }
              : node
          );
          state.nodes = updatedNodes;
        }
      }
      const updatedEdges = addEdge(connection, state.edges);
      state.edges = updatedEdges;
    },
  },
});

export const {
  setFileData,
  addNode,
  addFileData,
  onNodeChange,
  updateFilter,
  onConnect,
} = workFlowSlice.actions;
export default workFlowSlice.reducer;
