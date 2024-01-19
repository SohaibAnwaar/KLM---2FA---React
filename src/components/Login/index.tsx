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
  const { mutate, isLoading } = useLogin((data) =>
    navigate("/auth/qr/", { state: data })
  );

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
    mutate(formData);
  };

  return (
    <div className="">
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
      <div className="text-center mt-4">
        <p className="text-sm text-gray-600">
          Don't have an account?{" "}
          <a href="/auth/register" className="text-blue-500 hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
