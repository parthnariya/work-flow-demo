import { OperationFunctions } from "../../../utils/types";
import { SidebarCategoryTypeEnum, SidebarMenuType } from "./type";

export const sidebarMenuItems: SidebarMenuType[] = [
  {
    type: SidebarCategoryTypeEnum.Input,
    details: [
      {
        label: "File",
        detail: "Handles csv files.",
        functionName: OperationFunctions.ADD_FILE,
        input: "-",
        output: "Dataset",
      },
      {
        label: "Example data",
        detail: "Some example data for playing around with data blocks.",
        functionName: OperationFunctions.ADD_EXAMPLE_DATA,
        input: "-",
        output: "Dataset",
      },
    ],
  },
  {
    type: SidebarCategoryTypeEnum.Transform,
    details: [
      {
        label: "Filter",
        detail: "Groups a data set based on a given column name.",
        functionName: OperationFunctions.ADD_FILTER,
        input: "Dataset",
        output: "Dataset",
      },
    ],
  },
];
