import CrossIcon from "../../../assets/CrossIcon";
import { OperationNodes } from "../../../utils/types";

type PropsType = {
  type: OperationNodes;
  label: string;
  children: React.ReactNode;
};

export const NodeWrapper = ({ children, label, type }: PropsType) => {
  return (
    <div
      className="p-2 bg-primary-light text-white rounded-lg border-primary-dark border-2"
      data-block={type}
    >
      <div className="mb-2 flex justify-between items-center border-b-2 border-primary-dark text-[10px]">
        <div>{label}</div>
        <CrossIcon className="cursor-pointer opacity-75 hover:opacity-100" />
      </div>
      {children}
    </div>
  );
};
