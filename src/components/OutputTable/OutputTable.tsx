import { useAppSelector } from "../../store";
import { TableHeader } from "./TableHeader";
import { TableRow } from "./TableRow";

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
    <div className="border-t flex flex-col text-xs border-primary-dark max-h-[300px]">
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
