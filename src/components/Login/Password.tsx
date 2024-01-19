import { RiLockPasswordLine } from "react-icons/ri";
import { useState } from "react";
import Input from "../shared/Input";
import Button from "../shared/Button";

interface PasswordProps {
  formData: {
    password: string;
  };
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isLoading: boolean;
}

const Password: React.FC<PasswordProps> = ({
  formData,
  handleChange,
  isLoading,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <Input
        name="password"
        value={formData.password}
        onChange={handleChange}
        label="Enter your password"
        disabled={isLoading}
        icon={<RiLockPasswordLine />}
        type={showPassword ? "text" : "password"}
        placeholder="Your Password"
      />
      <div className="flex items-center">
        <input
          type="checkbox"
          id="showPassword"
          onChange={toggleShowPassword}
          className="mr-2 bg-transparent rounded"
        />
        <label htmlFor="showPassword" className="text-sm text-gray-500">
          Show Password
        </label>
      </div>
      <div className="flex justify-between items-center">
        <a
          href={"/auth/recovery/password/confirm"}
          className="text-indigo-600 hover:underline text-sm"
        >
          Forgotten your password?
        </a>
        <Button isLoading={isLoading} title="Next" />
      </div>
    </>
  );
};

export default Password;
