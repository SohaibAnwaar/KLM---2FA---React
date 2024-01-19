import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../shared/Input";
import handleChange from "../../util/handleChange";
import { FaRegUser } from "react-icons/fa6";
import { RiLockPasswordLine, RiMailLine } from "react-icons/ri";

import Button from "../shared/Button";
import toast from "react-hot-toast";
import { useRegister } from "../../hooks";

export interface FormData {
  email: string;
  username: string;
  password1: string;
  password2: string;
  name: string;
}

const Signup = () => {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password1: "",
    password2: "",
    username: "",
    name: "",
  });
  const navigate = useNavigate();
  const { mutate, isLoading } = useRegister(() =>
    navigate("/auth/thankyou", { state: { ...formData } })
  );

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formData.password1 !== formData.password2) {
      toast.error("please enter same password in both fields");
      return;
    }
    mutate(formData);
  };

  return (
    <div className="">
      <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
        <Input
          name="username"
          value={formData.username}
          onChange={(e) => handleChange(e, setFormData)}
          label="Enter your username"
          disabled={isLoading}
          icon={<FaRegUser />}
          placeholder="ie: jhon.doe"
        />

        <Input
          name="name"
          value={formData.name}
          onChange={(e) => handleChange(e, setFormData)}
          label="Enter your name"
          disabled={isLoading}
          icon={<FaRegUser />}
          placeholder="ie: Jhon Doe"
        />
        <Input
          name="email" // Change 'name' to 'email' for email input
          value={formData.email}
          onChange={(e) => handleChange(e, setFormData)}
          label="Enter your email" // Change 'label' to 'Enter your email'
          disabled={isLoading}
          icon={<RiMailLine />}
          type="email" // Change 'type' to 'email' for email input
          placeholder="Your Email" // Change 'placeholder' to 'Your Email'
        />

        <Input
          name="password1"
          value={formData.password1}
          onChange={(e) => handleChange(e, setFormData)}
          label="Enter your password"
          floatingLabel="Password"
          disabled={isLoading}
          icon={<RiLockPasswordLine />}
          type="password"
          placeholder="Your password"
        />

        <Input
          name="password2"
          value={formData.password2}
          onChange={(e) => handleChange(e, setFormData)}
          label="Confirm your password"
          floatingLabel="Confirm Password"
          disabled={isLoading}
          icon={<RiLockPasswordLine />}
          type="password"
          placeholder="Confirm password"
        />

        <Button isLoading={isLoading} title="Sign Up" />
      </form>

      <div className="text-center mt-4">
        <p className="text-sm text-gray-600">
          Already have an account?{" "}
          <a href="/auth/login" className="text-blue-500 hover:underline">
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
