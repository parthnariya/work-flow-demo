type PropsType = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  label: string;
};

export const Button = (props: PropsType) => {
  return (
    <button
      {...props}
      className="rounded bg-primary-dark/60 p-1.5 px-2.5 self-end mt-1 hover:bg-primary-light"
    >
      {props.label}
    </button>
  );
};
