import { useAppSelector } from "../../store";
import { TableHeader } from "./TableHeader";

export const OutputTable = () => {
  const { fileData } = useAppSelector((state) => state.workFlow);

  if (!fileData)
    return (
      <div className="h-full border-t flex flex-col text-xs border-primary-dark">
        No data found
      </div>
    );

  const headers = Object.keys(fileData[0]);

  return (
    <div className="h-full border-t flex flex-col text-xs border-primary-dark">
      <table className="text-sm text-left rtl:text-right text-white text-opacity-80">
        <TableHeader headers={headers} />
        <tbody></tbody>
      </table>
    </div>
  );
};
