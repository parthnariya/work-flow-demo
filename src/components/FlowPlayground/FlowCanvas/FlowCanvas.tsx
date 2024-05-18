import ReactFlow, { Background, Controls, MiniMap } from "reactflow";
import "reactflow/dist/style.css";
import { miniMapStyle } from "./utils";
export const FlowCanvas = () => {
  return (
    <div className="flex-[0.85] flex h-full w-full relative text-xs">
      <ReactFlow fitView>
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
