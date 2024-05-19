type PropsType = React.SelectHTMLAttributes<HTMLSelectElement> & {
  label: string;
  options: {
    label: string;
    value: string;
  }[];
};
export const Select = (props: PropsType) => {
  return (
    <div>
      <label className="block mb-2 text-xs font-medium text-gray-900">
        {props.label}
      </label>
      <select
        {...props}
        className="nodrag bg-primary-light border border-primary-dark text-white text-xs rounded-lg block w-full p-1"
        value={props.value}
      >
        {props.options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};
