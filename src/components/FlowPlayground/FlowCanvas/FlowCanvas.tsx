import ReactFlow, { Background, Controls, MiniMap } from "reactflow";
import "reactflow/dist/style.css";
import { miniMapStyle, nodeTypes } from "./utils";
import { useAppSelector } from "../../../store";
export const FlowCanvas = () => {
  const { nodes } = useAppSelector((state) => state.workFlow);
  return (
    <div className="flex-[0.85] flex h-full w-full relative text-xs">
      <ReactFlow fitView nodes={nodes} nodeTypes={nodeTypes}>
        <MiniMap
          style={miniMapStyle}
          zoomable
          pannable
          className="bg-primary-light"
        />
        <Controls />
        <Background gap={16} />
      </ReactFlow>
    </div>
  );
};
