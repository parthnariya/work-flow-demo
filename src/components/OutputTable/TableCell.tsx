type PropsType = {
  cellText: string;
};

export const TableCell = ({ cellText }: PropsType) => {
  return <td className="px-6 py-1">{cellText}</td>;
};
