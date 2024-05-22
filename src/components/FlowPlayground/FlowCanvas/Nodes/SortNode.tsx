import { Position } from "reactflow";
import { Button, Select } from "../../../../ui";
import { OperationNodes } from "../../../../utils/types";
import { CustomConnect } from "../CustomConnect";
import { NodeWrapper } from "../NodeWrapper";

type PropsType = {
  id: string;
};

export const SortNode = ({ id }: PropsType) => {
  return (
    <NodeWrapper id={id} label="Sort" type={OperationNodes.SORT_NODE}>
      <div className="flex flex-col gap-2">
        <Select
          label="Column name:"
          key={"column"}
          options={[{ label: "abac", value: "asb" }]}
          className="min-w-28"
        />
        <div>
          <div className="flex items-center mb-1">
            <input
              id="default-radio-1"
              type="radio"
              value=""
              name="default-radio"
              className="w-3 h-3 text-blue-600 bg-white border-primary-dark focus:ring-primary-dark  focus:ring-2"
            />
            <label
              htmlFor="default-radio-1"
              className="ms-2 text-xs font-medium text-gray-900 dark:text-gray-300"
            >
              Default radio
            </label>
          </div>
          <div className="flex items-center">
          <input
              id="default-radio-1"
              type="radio"
              value=""
              name="default-radio"
              className="w-3 h-3 text-blue-600 bg-white border-primary-dark focus:ring-primary-dark focus:ring-2"
            />
            <label
              htmlFor="default-radio-2"
              className="ms-2 text-xs font-medium text-gray-900 dark:text-gray-300"
            >
              Checked state
            </label>
          </div>
        </div>
        <Button label="Run" />
      </div>
      <CustomConnect
        accepted={[
          OperationNodes.FILTER_NODE,
          OperationNodes.FILE_NODE,
          OperationNodes.EXAMPLE_NODE,
        ]}
        connectionlimit={1}
        type="target"
        position={Position.Left}
        id={id}
      />
      <div
        // ref={detailsRef}
        className="absolute text-[8px] z-10 mt-3 text-white text-opacity-50"
      ></div>
    </NodeWrapper>
  );
};
