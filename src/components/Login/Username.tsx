import { FaRegUser } from "react-icons/fa6";
import Input from "../shared/Input";
import Button from "../shared/Button";
import { FormData } from ".";

interface UsernameProps {
  formData: FormData;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isLoading: boolean;
  setIsPasswordValid: (value: boolean) => void;
}

const Username: React.FC<UsernameProps> = ({
  formData,
  handleChange,
  isLoading,
  setIsPasswordValid,
}) => {
  return (
    <>
      <Input
        name="username"
        value={formData.username}
        onChange={handleChange}
        label="Enter your username"
        disabled={isLoading}
        icon={<FaRegUser />}
        placeholder="ie: jhon.doe"
      />
      <div className="flex justify-between items-center">
        <a
          href="/auth/recovery"
          className="text-indigo-600 hover:underline text-sm"
        >
          Forgotten your username?
        </a>
        <Button
          isLoading={isLoading}
          title="Next"
          onClick={() =>
            formData.username.length > 0 && setIsPasswordValid(true)
          }
        />
      </div>
    </>
  );
};

export default Username;
