import { useOnSelectionChange } from "reactflow";
import { useAppDispatch, useAppSelector } from "../../store";
import { setFileData } from "../../store/workFlowSlice";
import { TableHeader } from "./TableHeader";
import { TableRow } from "./TableRow";

export const OutputTable = () => {
  const { fileData } = useAppSelector((state) => state.workFlow);

  const dispatch = useAppDispatch();

  useOnSelectionChange({
    onChange: ({ nodes }) => {
      dispatch(setFileData(nodes[0]?.data.fileData));
    },
  });

  if (!fileData)
    return (
      <div className="h-full border-t flex flex-col text-xs border-primary-dark">
        No data found
      </div>
    );

  const headers = Object.keys(fileData[0]);

  return (
    <div className="border-t flex flex-col text-xs border-primary-dark max-h-[300px] overflow-y-auto">
      <table className="text-sm text-left rtl:text-right text-white text-opacity-80">
        <TableHeader headers={headers} />
        <tbody>
          {fileData.map((row, index) => (
            <TableRow values={Object.values(row)} key={index} />
          ))}
        </tbody>
      </table>
    </div>
  );
};
