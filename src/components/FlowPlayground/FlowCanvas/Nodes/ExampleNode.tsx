import { Position } from "reactflow";
import { OperationNodes } from "../../../../utils/types";
import { CustomConnect } from "../CustomConnect";
import { NodeWrapper } from "../NodeWrapper";
import { FileData } from "../../../../store/types";

type PropsType = {
  id: string;
  data: {
    fileData: FileData;
  };
};

export const ExampleNode = ({ id, data }: PropsType) => {
  return (
    <NodeWrapper
      id={id}
      label="Example Data"
      type={OperationNodes.EXAMPLE_NODE}
    >
      <div className="flex flex-col items-center justify-center p-1 min-w-28">
        <div className="text-start">Example Data</div>
      </div>
      <CustomConnect
        position={Position.Right}
        type="source"
        accepted={[OperationNodes.FILTER_NODE]}
        id={id}
      />
      <div
        // ref={detailsRef}
        className="absolute text-[8px] z-10 mt-3 text-white text-opacity-50"
      >
        {`[DATASET] ${data.fileData.length} rows | ${
          Object.keys(data.fileData[0]).length
        } columns`}
      </div>
    </NodeWrapper>
  );
};
