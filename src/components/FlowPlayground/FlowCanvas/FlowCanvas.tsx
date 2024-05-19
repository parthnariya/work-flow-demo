import ReactFlow, {
  Background,
  Controls,
  MiniMap,
  OnConnect,
  OnNodesChange,
} from "reactflow";
import "reactflow/dist/style.css";
import { useAppDispatch, useAppSelector } from "../../../store";
import { onConnect, onNodeChange } from "../../../store/workFlowSlice";
import { miniMapStyle, nodeTypes } from "./utils";
export const FlowCanvas = () => {
  const { nodes, edges } = useAppSelector((state) => state.workFlow);
  const dispatch = useAppDispatch();
  const onNodeChangeHandler: OnNodesChange = (changes) => {
    dispatch(onNodeChange({ changes }));
  };

  const onConnectHandler: OnConnect = (connection) => {
    dispatch(onConnect({ connection }));
  };

  return (
    <div className="flex-[0.85] flex h-full w-full relative text-xs">
      <ReactFlow
        fitView
        nodes={nodes}
        edges={edges}
        onConnect={onConnectHandler}
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
