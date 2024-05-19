import { Button, Input, Select } from "../../../../ui";
import { OperationNodes } from "../../../../utils/types";
import { NodeWrapper } from "../NodeWrapper";

type PropsType = {
  id: string;
};

export const FilterNode = ({ id }: PropsType) => {
  console.log(id);
  return (
    <NodeWrapper label="Filter" type={OperationNodes.FILTER_NODE}>
      <div className="flex flex-col gap-2">
        <Select />
        <Select />
        <Input />
        <Button label="Run" />
      </div>
    </NodeWrapper>
  );
};
