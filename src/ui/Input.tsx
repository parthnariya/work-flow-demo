export const Input = (props: React.InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <input
      {...props}
      className="w-full p-1 outline-none bg-primary-light border border-primary-dark rounded-lg block"
    />
  );
};
