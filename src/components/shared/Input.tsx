import { ReactNode } from "react";

const Input = ({
  type = "text",
  name,
  value,
  onChange,
  disabled,
  label,
  icon,
  placeholder = "",
}: IInputProps) => (
  <div className="flex flex-col gap-4">
    <label
      htmlFor={name}
      className="text-sm font-medium bg-[#041530] text-white"
    >
      {label}
    </label>
    <div className="relative">
      {icon && (
        <span className="absolute h-5 w-5 top-3 left-3 text-white">{icon}</span>
      )}
      <div className="text-sm font-medium p-0 px-2 bg-[#041530] text-indigo-600 absolute -top-2 left-3 focus:text-indigo-600 capitalize">
        {name}
      </div>
      <input
        type={type}
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        className="bg-[#041530] border border-gray-300 sm:text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500 pl-10"
        placeholder={placeholder}
        required
        disabled={disabled}
        autoComplete="off"
      />
    </div>
  </div>
);

interface IInputProps {
  value: string;
  disabled: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
  name: string;
  type?: "text" | "password" | "email" | "number";
  icon?: ReactNode | null;
  placeholder?: string; // New prop for the placeholder
}

export default Input;
