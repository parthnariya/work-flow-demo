import { forwardRef } from "react";

export const Input = forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>((props, ref) => {
  return (
    <input
      {...props}
      className="w-full p-1 outline-none bg-primary-light border border-primary-dark rounded-lg block"
      ref={ref}
    />
  );
});
