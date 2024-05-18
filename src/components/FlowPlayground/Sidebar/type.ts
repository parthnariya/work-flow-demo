import { OperationFunctions } from "../../../utils/types";

export enum SidebarCategoryTypeEnum {
  Input = "Input",
  Transform = "Transform",
}

export type SidebarMenuItemDetailsType = {
  label: string;
  detail: string;
  input: string;
  output: string;
  functionName: OperationFunctions;
};

export type SidebarMenuType = {
  type: SidebarCategoryTypeEnum;
  details: SidebarMenuItemDetailsType[];
};
