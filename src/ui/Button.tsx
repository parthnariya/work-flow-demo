type PropsType = {
  label: string;
};

export const Button = ({ label }: PropsType) => {
  return (
    <button className="rounded bg-primary-dark/60 p-1.5 px-2.5 self-end mt-2 hover:bg-primary-light">
      {label}
    </button>
  );
};
