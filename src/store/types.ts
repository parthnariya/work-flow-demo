import { Connection, Edge, Node, NodeChange } from "reactflow";
import { FilterBlockData, OperationNodes, SortBlockData } from "../utils/types";

export type FileData = Record<string, string>[];

export type WorkFlowState = {
  nodes: Node[];
  edges: Edge[];
  fileData: FileData | null;
};

export type AddNodePayloadType = {
  type: OperationNodes;
  fileData?: FileData;
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

export type DeleteNodePayloadType = {
  id: string;
};

export type UpdateSortPayloadType = {
  id: string;
  data: SortBlockData;
};
