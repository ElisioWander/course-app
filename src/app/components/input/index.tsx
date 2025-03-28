import { forwardRef, ForwardRefRenderFunction } from "react";
import { FieldError } from "react-hook-form";

type InputBaseProps = {
  label?: string;
  type?: string;
  value?: string | number | readonly string[];
  placeholder?: string;
  autoFocus?: boolean;
  error?: FieldError;
};

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputBaseProps> = (
  { label, value, type = "text", error, autoFocus, placeholder, ...rest },
  ref
) => {
  return (
    <div className="w-full flex flex-col gap-2">
      {label && <label className="text-zinc-700">{label}</label>}
      <input
        className="flex-1 p-4 leading-6 bg-zinc-100 rounded-lg  placeholder:text-zinc-400  "
        type={type}
        id={type}
        value={value}
        placeholder={placeholder}
        autoFocus={autoFocus}
        ref={ref}
        {...rest}
      />
      {!!error && <span className="text-red-800 text-sm">{error.message}</span>}
    </div>
  );
};

export const Input = forwardRef(InputBase);
