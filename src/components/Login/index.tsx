import { FormEvent, useState } from "react";
import { useLogin } from "../../hooks";
import { useNavigate } from "react-router-dom";
import Password from "./Password";
import Username from "./Username";
import handleChange from "../../util/handleChange";

export interface FormData {
  username: string;
  password: string;
}

const Login = () => {
  const [formData, setFormData] = useState<FormData>({
    username: "",
    password: "",
  });
  const [isUsernameValid, setIsUsernameValid] = useState(false);
  const navigate = useNavigate();
  const { mutate, isLoading } = useLogin(() => navigate("/add"));

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
    mutate(formData);
  };

  return (
    <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
      {isUsernameValid ? (
        <Password
          formData={formData}
          handleChange={(e) => handleChange(e, setFormData)}
          isLoading={isLoading}
        />
      ) : (
        <Username
          formData={formData}
          handleChange={(e) => handleChange(e, setFormData)}
          isLoading={isLoading}
          setIsPasswordValid={setIsUsernameValid}
        />
      )}
    </form>
  );
};

export default Login;
