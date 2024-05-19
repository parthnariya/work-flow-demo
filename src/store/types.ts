import { Connection, Edge, Node, NodeChange } from "reactflow";
import { FilterBlockData, OperationNodes } from "../utils/types";

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

export type OnNodeChangePayloadType = {
  changes: NodeChange[];
};

export type UpdateFilterPayloadType = {
  id: string;
  data: FilterBlockData;
};

export type OnConnectPayloadType = {
  connection: Connection;
};
