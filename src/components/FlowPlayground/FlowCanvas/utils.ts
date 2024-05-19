import { CSSProperties } from "react";
import { OperationNodes } from "../../../utils/types";
import { FileNode } from "./Nodes/FileNode";
import { Edge, ReactFlowState } from "reactflow";
import { FilterNode } from "./Nodes/FilterNode";

export const miniMapStyle: CSSProperties = {
  height: 100,
  width: 150,
};

export const nodeTypes: Record<
  OperationNodes,
  ({ id }: { id: string }) => JSX.Element
> = {
  FILE_NODE: FileNode,
  FILTER_NODE: FilterNode,
};

export const selectorFunction = (selector: ReactFlowState) => ({
  nodeInternals: selector.nodeInternals,
  edges: selector.edges,
});
