import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { FileData, WorkFlowState } from "./types";

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
  },
});

export const { setFileData } = workFlowSlice.actions;
export default workFlowSlice.reducer;
