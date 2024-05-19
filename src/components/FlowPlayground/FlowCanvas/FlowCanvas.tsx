import ReactFlow, {
  Background,
  Controls,
  MiniMap,
  OnNodesChange,
} from "reactflow";
import "reactflow/dist/style.css";
import { miniMapStyle, nodeTypes } from "./utils";
import { useAppDispatch, useAppSelector } from "../../../store";
import { onNodeChange } from "../../../store/workFlowSlice";
export const FlowCanvas = () => {
  const { nodes } = useAppSelector((state) => state.workFlow);
  const dispatch = useAppDispatch();

  const onNodeChangeHandler: OnNodesChange = (changes) => {
    dispatch(onNodeChange({ changes }));
  };

  return (
    <div className="flex-[0.85] flex h-full w-full relative text-xs">
      <ReactFlow
        fitView
        nodes={nodes}
        nodeTypes={nodeTypes}
        onNodesChange={onNodeChangeHandler}
      >
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
