import { useNavigate } from "react-router-dom";
import Button from "../shared/Button";

const RegisterSuccess = ({ message }: RegisterSuccessProps) => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col gap-24 justify-between">
      <div className="font-medium bg-[#041530] text-white">
        {message || "Congratulations, Your account has been created!"}
      </div>
      <div className="flex justify-end">
        <Button
          // isLoading={isLoading}
          isLoading={false}
          title="Login"
          onClick={() => navigate("/auth/login")}
        />
      </div>
    </div>
  );
};

interface RegisterSuccessProps {
  message?: string;
}

export default RegisterSuccess;
