import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { OperationNodes } from "../utils/types";
import { AddNodePayloadType, FileData, WorkFlowState } from "./types";

const initialState: WorkFlowState = {
  edges: [],
  nodes: [],
  fileData: [],
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
  },
});

export const { setFileData, addNode } = workFlowSlice.actions;
export default workFlowSlice.reducer;
