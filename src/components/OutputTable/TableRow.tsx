import { TableCell } from "./TableCell";

type PropsType = {
  values: string[];
};
export const TableRow = ({ values }: PropsType) => {
  return (
    <tr className="border-b bg-primary-light border-primary-dark">
      {values.map((value, index) => (
        <TableCell cellText={value} key={`${value}-${index}`} />
      ))}
    </tr>
  );
};
