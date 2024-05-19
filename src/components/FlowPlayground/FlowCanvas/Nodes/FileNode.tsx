import { OperationNodes } from "../../../../utils/types";
import { NodeWrapper } from "../NodeWrapper";

export const FileNode = () => {
  return (
    <NodeWrapper label="File" type={OperationNodes.FILE_NODE}>
      <div className="flex flex-col items-center justify-center p-1 w-fit">
        <div className="flex justify-center items-center">
          <div>Drop file here or</div>
          <button className="bg-white bg-opacity-55 outline-none outline-offset-2 border-none ml-2 p-1">
            Open file dialog
          </button>
        </div>
        <div className="mt-1 text-white text-opacity-80 text-[8px]">
          Allowed types: csv
        </div>
      </div>
    </NodeWrapper>
  );
};
