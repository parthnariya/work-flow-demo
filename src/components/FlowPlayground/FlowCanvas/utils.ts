import { CSSProperties } from "react";
import { OperationNodes } from "../../../utils/types";
import { FileNode } from "./Nodes/FileNode";

export const miniMapStyle: CSSProperties = {
  height: 100,
  width: 150,
};

export const nodeTypes: Record<OperationNodes, () => JSX.Element> = {
  FILE_NODE: FileNode,
  EXAMPLE_NODE: () => {},
};
