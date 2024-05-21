import { CSSProperties } from "react";
import { OperationNodes } from "../../../utils/types";
import { FileNode } from "./Nodes/FileNode";
import { Edge, ReactFlowState } from "reactflow";
import { FilterNode } from "./Nodes/FilterNode";
import { ExampleNode } from "./Nodes/ExampleNode";

export const miniMapStyle: CSSProperties = {
  height: 100,
  width: 150,
};

export const nodeTypes: Record<OperationNodes, any> = {
  FILE_NODE: FileNode,
  FILTER_NODE: FilterNode,
  EXAMPLE_NODE: ExampleNode,
};

export const selectorFunction = (selector: ReactFlowState) => ({
  nodeInternals: selector.nodeInternals,
  edges: selector.edges,
});
