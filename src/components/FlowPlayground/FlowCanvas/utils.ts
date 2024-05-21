import { CSSProperties } from "react";
import { ReactFlowState } from "reactflow";
import { ExampleNode } from "./Nodes/ExampleNode";
import { FileNode } from "./Nodes/FileNode";
import { FilterNode } from "./Nodes/FilterNode";

export const miniMapStyle: CSSProperties = {
  height: 100,
  width: 150,
};

export const nodeTypes = {
  FILE_NODE: FileNode,
  FILTER_NODE: FilterNode,
  EXAMPLE_NODE: ExampleNode,
} as const;

export const selectorFunction = (selector: ReactFlowState) => ({
  nodeInternals: selector.nodeInternals,
  edges: selector.edges,
});
