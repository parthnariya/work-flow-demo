type PropsType = {
  headers: string[];
};

export const TableHeader = ({ headers }: PropsType) => {
  return (
    <thead className="text-xs text-white font-bold uppercase bg-primary-dark sticky top-0">
      <tr>
        {headers.map((header) => (
          <th scope="col" className="px-6 py-2">
            {header}
          </th>
        ))}
      </tr>
    </thead>
  );
};
