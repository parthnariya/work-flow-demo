import { Position } from "reactflow";
import { Button, Input, Select } from "../../../../ui";
import { FilterBlockData, OperationNodes } from "../../../../utils/types";
import { CustomConnect } from "../CustomConnect";
import { NodeWrapper } from "../NodeWrapper";
import { filterFunction, filterOption } from "../../../../utils/filterOption";
import { useAppDispatch } from "../../../../store";
import { updateFilter } from "../../../../store/workFlowSlice";
import { ElementRef, MouseEventHandler, memo, useRef, useState } from "react";

type PropsType = {
  id: string;
  data: FilterBlockData;
};

const FilterNodeUnMemoized = ({ id, data }: PropsType) => {
  const dispatch = useAppDispatch();

  const inputRef = useRef<ElementRef<"input">>(null);
  const detailsRef = useRef<ElementRef<"div">>(null);

  const [loading, setLoading] = useState(false);
  const onChangeHandler = (key: keyof FilterBlockData, value: string) => {
    dispatch(updateFilter({ id, data: { ...data, [key]: value } }));
  };

  const onFilterClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation();
    if (
      !data ||
      loading ||
      !inputRef.current ||
      !data.datasource ||
      !data.selectedColumn ||
      !data.condition
    )
      return;
    setLoading(true);
    const filteredFileData = filterFunction(
      data.datasource,
      data.selectedColumn,
      data.condition,
      inputRef.current.value
    );
    dispatch(
      updateFilter({ id, data: { ...data, fileData: filteredFileData } })
    );
    if (detailsRef.current) {
      detailsRef.current.innerHTML =
        filteredFileData.length > 0
          ? ""
          : `[DATASET] ${filteredFileData.length} rows | ${
              Object.keys(filteredFileData[0]).length
            } columns`;
    }
    setLoading(false);
  };

  return (
    <NodeWrapper id={id} label="Filter" type={OperationNodes.FILTER_NODE}>
      <div className="flex flex-col gap-2">
        <Select
          label="Column name:"
          key={"column"}
          options={data.column ? data.column : []}
          onChange={(e) => onChangeHandler("selectedColumn", e.target.value)}
          // value={data.selectedColumn ? data.selectedColumn : ""}
        />
        <Select
          label="Condition:"
          options={filterOption}
          key={"condition"}
          onChange={(e) => onChangeHandler("condition", e.target.value)}
        />
        <Input ref={inputRef} />
        <Button label="Run" onClick={onFilterClick} />
      </div>
      <CustomConnect type="source" position={Position.Right} id={id} />
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
const FilterNode = memo(FilterNodeUnMemoized);
export default FilterNode;
