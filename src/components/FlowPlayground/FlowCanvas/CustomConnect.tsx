import {
  Connection,
  Edge,
  Handle,
  HandleProps,
  Node,
  getConnectedEdges,
  useNodeId,
  useNodes,
  useStore,
} from "reactflow";
import { OperationNodes } from "../../../utils/types";
import { selectorFunction } from "./utils";
import { useMemo } from "react";

type PropTypes = HandleProps & {
  connectionlimit?:
    | number
    | ((obj: { node: Node; connectedEdges: Edge[] }) => boolean);
  accepted?: OperationNodes[];
};

export const CustomConnect = (props: PropTypes) => {
  const { edges, nodeInternals } = useStore(selectorFunction);

  const nodeId = useNodeId()!;
  const nodes = useNodes();

  const isHandleConnectable = useMemo(() => {
    if (typeof props.connectionlimit === "number") {
      const node = nodeInternals.get(nodeId);
      if (!node) return true;

      const connectedEdges = getConnectedEdges([node], edges);

      let countTypeLength = 0;

      connectedEdges.forEach((edge) => {
        countTypeLength += edge[props.type] == props.id ? 1 : 0;
      });
      return countTypeLength < props.connectionlimit;
    }

    if (typeof props.connectionlimit === "function") {
      const node = nodeInternals.get(nodeId);
      if (!node) return true;
      const connectedEdges = getConnectedEdges([node], edges);
      return props.connectionlimit({ node, connectedEdges });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [nodeInternals, edges, nodeId, props.connectionlimit]);

  const checkValidConnection = (connection: Connection): boolean => {
    if (!props.accepted) return true;

    const targetNode = nodes.find((node) =>
      (
        props.type === "source"
          ? node.id === connection.target
          : node.id === connection.source
      )
        ? props.accepted?.includes(node.type as OperationNodes)
        : false
    )!;

    return props.type === "source"
      ? connection.target === targetNode.id
      : connection.source === targetNode.id;
  };

  return (
    <Handle
      {...props}
      className={!isHandleConnectable ? "bg-primary-light" : ""}
      isValidConnection={checkValidConnection}
      data-full={!isHandleConnectable}
      isConnectable={isHandleConnectable}
    ></Handle>
  );
};
