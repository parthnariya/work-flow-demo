import { SidebarItem } from "./SidebarItem";
import { sidebarMenuItems } from "./data";

export default function Sidebar() {
  return (
    <aside className="flex flex-col flex-[0.18] border-r border-primary-dark">
      <div className="flex items-center justify-start px-2 py-1 h-7">
        <span className="text-md font-bold ml-1">Block Library</span>
      </div>
      {sidebarMenuItems.map((item) => (
        <SidebarItem item={item} key={item.type} />
      ))}
    </aside>
  );
}
