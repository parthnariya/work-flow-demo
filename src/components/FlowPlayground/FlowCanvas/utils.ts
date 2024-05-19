import { CSSProperties } from "react";
import { OperationNodes } from "../../../utils/types";
import { FileNode } from "./Nodes/FileNode";
import { Edge, ReactFlowState } from "reactflow";

export const miniMapStyle: CSSProperties = {
  height: 100,
  width: 150,
};

export const nodeTypes: Record<
  OperationNodes,
  ({ id }: { id: string }) => JSX.Element
> = {
  FILE_NODE: FileNode,
  EXAMPLE_NODE: () => {},
};

export const selectorFunction = (selector: ReactFlowState) => ({
  nodeInternals: selector.nodeInternals,
  edges: selector.edges,
});
