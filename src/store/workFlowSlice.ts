import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { OperationNodes } from "../utils/types";
import {
  AddFileDataPayloadType,
  AddNodePayloadType,
  FileData,
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
    setFileData: (state, { payload }: PayloadAction<FileData>) => {
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
  },
});

export const { setFileData, addNode } = workFlowSlice.actions;
export default workFlowSlice.reducer;
