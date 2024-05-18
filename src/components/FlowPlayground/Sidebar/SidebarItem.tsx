import { SidebarMenuType } from "./type";

type PropType = {
  item: SidebarMenuType;
};

export const SidebarItem = ({ item }: PropType) => {
  return (
    <div className="p-2 overflow-auto">
      <div className="font-bold mb-1">{item.type}</div>
      {item.details.map((detail) => (
        <div className="block-type shadow-md p-3 mb-3 rounded-md bg-primary-dark flex flex-col gap-2">
          <div className="font-bold capitalize text-[14px] select-none">{detail.label}</div>
          <div className="text-[10px] opacity-75 select-none">{detail.detail}</div>
          <div className="flex flex-col mt-2">
            <div className="text-xs opacity-75">Input: {detail.input}</div>
            <div className="text-xs opacity-75">Output: {detail.output}</div>
          </div>
        </div>
      ))}
    </div>
  );
};
