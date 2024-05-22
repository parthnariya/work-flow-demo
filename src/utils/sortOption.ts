import { FileData } from "../store/types";
import { SortType } from "./types";

export const sortFunction = (
  fileData: FileData,
  selectedColumn: string,
  sortType: SortType
) => {
  const asc = sortType === SortType.ASC ? 1 : -1;
  const dsc = sortType === SortType.DSC ? 1 : -1;

  const result = [...fileData].sort((a, b) => {
    if (a[selectedColumn] > b[selectedColumn]) return asc;
    if (a[selectedColumn] < b[selectedColumn]) return dsc;
    return 0;
  });
  return result;
};
