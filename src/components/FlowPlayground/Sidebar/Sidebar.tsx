import { SidebarCategoryTypeEnum } from "./type";

export default function Sidebar() {
  const category = Object.keys(SidebarCategoryTypeEnum);
  return (
    <aside className="flex flex-col flex-[0.18] border-r border-primary-dark">
      <div className="flex items-center justify-start px-2 py-1 h-7">
        <span className="text-md font-bold ml-1">Block Library</span>
      </div>
      {category.map(item => <div key={item}>{item}</div>)}
    </aside>
  );
}
