import { Edge, Node } from "reactflow";

export type FileData = Record<string, string>[];

export type WorkFlowState = {
  nodes: Node[];
  edges: Edge[];
  fileData: FileData;
};
