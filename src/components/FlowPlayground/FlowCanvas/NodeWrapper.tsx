import { useReactFlow } from "reactflow";
import CrossIcon from "../../../assets/CrossIcon";
import { OperationNodes } from "../../../utils/types";
import { useCallback } from "react";

type PropsType = {
  id: string;
  type: OperationNodes;
  label: string;
  children: React.ReactNode;
};

export const NodeWrapper = ({ id, children, label, type }: PropsType) => {
  const { deleteElements } = useReactFlow();

  const onDeleteHandler = useCallback(() => {
    deleteElements({ nodes: [{ id }] });
  }, [id, deleteElements]);

  return (
    <div
      className="p-2 bg-primary-light text-white rounded-lg border-primary-dark border-2"
      data-block={type}
    >
      <div className="mb-2 flex justify-between items-center border-b-2 border-primary-dark text-[10px]">
        <div>{label}</div>
        <CrossIcon
          className="cursor-pointer opacity-75 hover:opacity-100"
          onClick={onDeleteHandler}
        />
      </div>
      {children}
    </div>
  );
};
