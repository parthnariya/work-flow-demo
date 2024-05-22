import { useAppSelector } from "../../store";
import { jsonToCsv } from "../../utils/exportData";
import { Auth } from "./Auth";
import { Logo } from "./Logo";

const Header = () => {
  const { fileData } = useAppSelector((state) => state.workFlow);
  const exportHandler = () => {
    if (fileData) {
      const csvString = jsonToCsv(fileData);
      const blob = new Blob([csvString], { type: "text/csv" });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `converted-${Date.now().toString()}.csv`;
      document.body.appendChild(a);
      a.click();
    }
  };

  return (
    <header className="py-3 px-4 flex justify-between items-center w-full shrink-0 border-b border-b-primary-dark border-solid">
      <Logo />
      <div>Work Flow</div>
      <div className="flex justify-center items-center gap-2">
        <button
          className="bg-white bg-opacity-55 outline-none outline-offset-2 border-none ml-2 p-1"
          onClick={exportHandler}
        >
          Export
        </button>
        <Auth />
      </div>
    </header>
  );
};

export { Header };
