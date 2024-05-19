import { Position } from "reactflow";
import { Button, Input, Select } from "../../../../ui";
import { FilterBlockData, OperationNodes } from "../../../../utils/types";
import { CustomConnect } from "../CustomConnect";
import { NodeWrapper } from "../NodeWrapper";
import { filterOption } from "../../../../utils/filterOption";
import { useAppDispatch } from "../../../../store";
import { updateFilter } from "../../../../store/workFlowSlice";

type PropsType = {
  id: string;
  data: FilterBlockData;
};

export const FilterNode = ({ id, data }: PropsType) => {
  console.log(id);

  const dispatch = useAppDispatch();

  const onChangeHandler = (key: keyof FilterBlockData, value: string) => {
    dispatch(updateFilter({ id, data: { ...data, [key]: value } }));
  };

  return (
    <NodeWrapper label="Filter" type={OperationNodes.FILTER_NODE}>
      <div className="flex flex-col gap-2">
        <Select
          label="Column name:"
          options={data.column ? data.column : []}
          onChange={(e) => onChangeHandler("selectedColumn", e.target.value)}
          value={data.selectedColumn ? data.selectedColumn : ""}
        />
        <Select label="Condition:" options={filterOption} />
        <Input />
        <Button label="Run" />
      </div>
      <CustomConnect type="source" position={Position.Right} id={id} />
      <CustomConnect
        accepted={[
          OperationNodes.FILTER_NODE,
          OperationNodes.FILE_NODE,
          OperationNodes.EXAMPLE_NODE,
        ]}
        connectionLimit={1}
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
