type PropsType = {
  headers: string[];
};

export const TableHeader = ({ headers }: PropsType) => {
  return (
    <thead className="text-xs text-white font-bold uppercase bg-primary-dark sticky top-0">
      <tr>
        {headers.map((header, index) => (
          <th scope="col" className="px-6 py-2" key={index}>
            {header}
          </th>
        ))}
      </tr>
    </thead>
  );
};
