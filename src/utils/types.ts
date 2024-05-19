import { FileData } from "../store/types";

export enum OperationFunctions {
  ADD_FILE = "ADD_FILE",
  ADD_EXAMPLE_DATA = "ADD_EXAMPLE_DATA",
  ADD_FILTER = "ADD_FILTER",
}

export enum OperationNodes {
  FILE_NODE = "FILE_NODE",
  EXAMPLE_NODE = "EXAMPLE_NODE",
  FILTER_NODE = "FILTER_NODE",
}

export type FilterBlockData = {
  condition: null | string;
  column: null | { value: string; label: string }[];
  selectedColumn: null | string;
  datasource?: FileData;
  fileData?: FileData;
};
