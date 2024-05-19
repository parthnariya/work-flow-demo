import { Edge, Node } from "reactflow";
import { OperationNodes } from "../utils/types";

export type FileData = Record<string, string>[];

export type WorkFlowState = {
  nodes: Node[];
  edges: Edge[];
  fileData: FileData;
};

export type AddNodePayloadType = {
  type: OperationNodes;
};
