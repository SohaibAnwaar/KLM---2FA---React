import { FaRegUser } from "react-icons/fa6";
import Input from "../shared/Input";
import Button from "../shared/Button";
import { FormData } from ".";
import toast from "react-hot-toast";

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
      <div className="flex justify-end items-center">
        <Button
          isLoading={isLoading}
          title="Next"
          onClick={() =>
            formData.username.length > 0
              ? setIsPasswordValid(true)
              : toast.error("Please enter your username")
          }
        />
      </div>
    </>
  );
};

export default Username;
