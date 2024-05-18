import { OperationNodes } from "../../../../utils/types";
import { NodeWrapper } from "../NodeWrapper";

export const FileNode = () => {
  return (
    <NodeWrapper label="File" type={OperationNodes.FILE_NODE}>
      <div className="flex flex-col items-center justify-center w-full h-24 p-1">
        <div>Drop file here or</div>
        <button className="bg-white bg-opacity-75 outline-none outline-offset-2 border-none ml-2">
          Open file dialog
        </button>
      </div>
      <div className="mt-1 text-white text-opacity-80">Allowed types: csv</div>
    </NodeWrapper>
  );
};
