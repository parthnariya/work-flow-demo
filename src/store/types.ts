import { Edge, Node } from "reactflow";
import { OperationNodes } from "../utils/types";

export type FileData = Record<string, string>[];

export type WorkFlowState = {
  nodes: Node[];
  edges: Edge[];
  fileData: FileData | null;
};

export type AddNodePayloadType = {
  type: OperationNodes;
};

export type AddFileDataPayloadType = {
  id: string;
  fileData: FileData | null;
};
