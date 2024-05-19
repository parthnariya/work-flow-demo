import { ChangeEventHandler, ElementRef, useRef } from "react";
import { OperationNodes } from "../../../../utils/types";
import { NodeWrapper } from "../NodeWrapper";
import { csvToJson } from "../../../../utils/csvToJson";
import { setFileData } from "../../../../store/workFlowSlice";
import { useAppDispatch } from "../../../../store";

export const FileNode = () => {
  const fileInputRef = useRef<ElementRef<"input">>(null);
  const detailsRef = useRef<ElementRef<"div">>(null);

  const dispatch = useAppDispatch();

  const onClickHandler = () => {
    fileInputRef.current?.click();
  };

  const onFileChangeHandler: ChangeEventHandler<HTMLInputElement> = (e) => {
    e.preventDefault();

    if (!e.target.files || e.target.files[0].size <= 0) return null;

    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = function (str) {
      if (str.target?.result) {
        const data = str.target.result;
        let obj = null;

        if (file.type === "text/csv") {
          obj = csvToJson(String(data));
          console.log(obj);
          dispatch(setFileData(obj));
          if (detailsRef.current) {
            detailsRef.current.innerHTML =
              obj === null
                ? ""
                : `[DATASET] ${obj.length} rows | ${
                    Object.keys(obj[0]).length
                  } columns`;
          }
          if (obj === null) {
            if (detailsRef.current) detailsRef.current.innerHTML = "";
            alert("Something went wrong!!");
          }
        }
      }
    };
    try {
      reader.readAsText(file);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <NodeWrapper label="File" type={OperationNodes.FILE_NODE}>
      <div className="flex flex-col items-center justify-center p-1 w-fit">
        <div className="flex justify-center items-center">
          <div>Drop file here or</div>
          <button
            className="bg-white bg-opacity-55 outline-none outline-offset-2 border-none ml-2 p-1"
            onClick={onClickHandler}
          >
            Open file dialog
          </button>
          <input
            type="file"
            accept=".csv"
            className="hidden"
            ref={fileInputRef}
            multiple={false}
            onChange={onFileChangeHandler}
          />
        </div>
        <div className="mt-1 text-white text-opacity-80 text-[8px]">
          Allowed types: csv
        </div>
      </div>
      <div
        ref={detailsRef}
        className="absolute text-[8px] z-10 mt-3 text-white text-opacity-50"
      ></div>
    </NodeWrapper>
  );
};
