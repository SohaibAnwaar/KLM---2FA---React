import Loader from "./Loader";

const Button = ({
  type = "submit",
  disabled = false,
  title,
  isLoading,
  onClick,
}: IButtonProps) => {
  return (
    <button
      type={type}
      className={`px-8 bg-indigo-600 hover:bg-indigo-700 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800 ${
        disabled && "cursor-not-allowed opacity-50 flex"
      }`}
      disabled={disabled || isLoading}
      onClick={onClick}
    >
      <span className="flex justify-center items-center gap-2">
        {title}
        {isLoading && <Loader />}
      </span>
    </button>
  );
};

interface IButtonProps {
  disabled?: boolean;
  isLoading: boolean;
  title: string;
  type?: "submit" | "reset" | "button";
  onClick?: () => void;
}

export default Button;
