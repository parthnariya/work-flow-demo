import { SidebarMenuItemDetailsType } from "./type";

type PropType = {
  item: SidebarMenuItemDetailsType;
};

export const SidebarItem = ({ item }: PropType) => {
  return (
    <div className="block-type shadow-md p-3 mb-3 rounded-md bg-primary-dark flex flex-col gap-2">
      <div className="font-bold capitalize text-[14px]">{item.label}</div>
      <div className="text-[10px] opacity-75">{item.detail}</div>
      <div className="flex flex-col mt-2">
        <div className="text-xs opacity-75">Input: {item.input}</div>
        <div className="text-xs opacity-75">Output: {item.input}</div>
      </div>
    </div>
  );
};
