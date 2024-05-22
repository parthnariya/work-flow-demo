import { FileData } from "../store/types";

export enum OperationFunctions {
  ADD_FILE = "ADD_FILE",
  ADD_EXAMPLE_DATA = "ADD_EXAMPLE_DATA",
  ADD_FILTER = "ADD_FILTER",
  ADD_SORT = "ADD_SORT",
}

export enum OperationNodes {
  FILE_NODE = "FILE_NODE",
  EXAMPLE_NODE = "EXAMPLE_NODE",
  FILTER_NODE = "FILTER_NODE",
  SORT_NODE = "SORT_NODE",
}

export type FilterBlockData = {
  condition: null | string;
  column: null | { value: string; label: string }[];
  selectedColumn: null | string;
  datasource: FileData | null;
  fileData: FileData | null;
};

export enum SortType {
  ASC = "asc",
  DSC = "dsc",
}

export type SortBlockData = {
  datasource: FileData | null;
  fileData: FileData | null;
  column: null | { value: string; label: string }[];
  selectedColumn: null | string;
  sortType: SortType;
};
