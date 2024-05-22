import { Position } from "reactflow";
import { Button, Select } from "../../../../ui";
import {
  OperationNodes,
  SortBlockData,
  SortType,
} from "../../../../utils/types";
import { CustomConnect } from "../CustomConnect";
import { NodeWrapper } from "../NodeWrapper";
import { useAppDispatch } from "../../../../store";
import { updateSort } from "../../../../store/workFlowSlice";
import { MouseEventHandler, useState } from "react";
import { sortFunction } from "../../../../utils/sortOption";

type PropsType = {
  id: string;
  data: SortBlockData;
};

export const SortNode = ({ id, data }: PropsType) => {
  const [checkedOption, setCheckedOption] = useState(data.sortType);
  const [loading, setLoading] = useState(false);
  const dispatch = useAppDispatch();
  const onChangeHandler = (key: keyof SortBlockData, value: string) => {
    dispatch(updateSort({ id, data: { ...data, [key]: value } }));
  };

  const sortHandler: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation();
    if (
      !data ||
      loading ||
      !data.datasource ||
      !data.selectedColumn ||
      !data.sortType
    )
      return;
    setLoading(true);
    const sortedFileData = sortFunction(
      data.datasource,
      data.selectedColumn,
      checkedOption
    );
    dispatch(updateSort({ id, data: { ...data, fileData: sortedFileData } }));
    setLoading(false);
  };

  return (
    <NodeWrapper id={id} label="Sort" type={OperationNodes.SORT_NODE}>
      <div className="flex flex-col gap-2">
        <Select
          label="Column name:"
          key={"column"}
          options={data.column ? data.column : []}
          onChange={(e) => onChangeHandler("selectedColumn", e.target.value)}
          className="min-w-28"
        />
        <div>
          <div className="flex items-center mb-1">
            <input
              value={SortType.ASC}
              id="default-radio-1"
              type="radio"
              name="default-radio"
              className="w-3 h-3 text-blue-600 bg-white border-primary-dark focus:ring-primary-dark  focus:ring-2"
              defaultChecked={data.sortType === SortType.ASC}
              onChange={(e) => setCheckedOption(e.target.value as SortType)}
            />
            <label
              htmlFor="default-radio-1"
              className="ms-2 text-xs font-medium text-gray-900 dark:text-gray-300"
            >
              {SortType.ASC}
            </label>
          </div>
          <div className="flex items-center">
            <input
              id="default-radio-1"
              defaultChecked={data.sortType === SortType.DSC}
              type="radio"
              value={SortType.DSC}
              name="default-radio"
              className="w-3 h-3 text-blue-600 bg-white border-primary-dark focus:ring-primary-dark focus:ring-2"
              onChange={(e) => setCheckedOption(e.target.value as SortType)}
            />
            <label
              htmlFor="default-radio-2"
              className="ms-2 text-xs font-medium text-gray-900 dark:text-gray-300"
            >
              {SortType.DSC}
            </label>
          </div>
        </div>
        <Button label="Run" onClick={sortHandler} />
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
      <div className="absolute text-[8px] z-10 mt-3 text-white text-opacity-50"></div>
    </NodeWrapper>
  );
};
