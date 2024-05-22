import { useAppDispatch } from "../../../store";
import { addNode } from "../../../store/workFlowSlice";
import { exampleData } from "../../../utils/exampleData";
import { OperationFunctions, OperationNodes } from "../../../utils/types";
import { SidebarMenuType } from "./type";

type PropType = {
  item: SidebarMenuType;
};

export const SidebarItem = ({ item }: PropType) => {
  const dispatch = useAppDispatch();

  const onAddNodeHandler = (functionName: OperationFunctions) => {
    switch (functionName) {
      case OperationFunctions.ADD_FILE:
        dispatch(addNode({ type: OperationNodes.FILE_NODE }));
        break;
      case OperationFunctions.ADD_FILTER:
        dispatch(addNode({ type: OperationNodes.FILTER_NODE }));
        break;
      case OperationFunctions.ADD_EXAMPLE_DATA:
        dispatch(
          addNode({ type: OperationNodes.EXAMPLE_NODE, fileData: exampleData })
        );
        break;
      case OperationFunctions.ADD_SORT:
        dispatch(addNode({ type: OperationNodes.SORT_NODE }));
        break;
    }
  };
  return (
    <div className="p-2 overflow-auto">
      <div className="font-bold mb-1">{item.type}</div>
      {item.details.map((detail) => (
        <div
          className="block-type shadow-md p-3 mb-3 rounded-md bg-primary-dark flex flex-col gap-2"
          key={detail.functionName}
          onClick={() => onAddNodeHandler(detail.functionName)}
        >
          <div className="font-bold capitalize text-[14px] select-none">
            {detail.label}
          </div>
          <div className="text-[10px] opacity-75 select-none">
            {detail.detail}
          </div>
          <div className="flex flex-col mt-2">
            <div className="text-xs opacity-75">Input: {detail.input}</div>
            <div className="text-xs opacity-75">Output: {detail.output}</div>
          </div>
        </div>
      ))}
    </div>
  );
};
