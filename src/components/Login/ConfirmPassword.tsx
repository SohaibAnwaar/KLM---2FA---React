import { FormEvent, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useResetConfirmPassword } from "../../hooks";
import toast from "react-hot-toast";
import Input from "../shared/Input";
import handleChange from "../../util/handleChange";
import { RiLockPasswordLine } from "react-icons/ri";
import Button from "../shared/Button";

export interface FormData {
  new_password1: string;
  new_password2: string;
}

const ConfirmPassword = () => {
  const [formData, setFormData] = useState<FormData>({
    new_password1: "",
    new_password2: "",
  });
  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);

  const token = queryParams.get("key") || "";
  const uid = queryParams.get("uid") || "";

  const navigate = useNavigate();
  const { mutate, isLoading } = useResetConfirmPassword(() =>
    navigate("/auth/login")
  );

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formData.new_password1 !== formData.new_password2) {
      toast.error("Please enter the same password in both fields.");
      return;
    }

    mutate({
      uid,
      token,
      ...formData,
    });
  };

  return (
    <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
      <Input
        name="new_password1"
        value={formData.new_password1}
        onChange={(e) => handleChange(e, setFormData)}
        label="Enter your new password"
        floatingLabel="New Password"
        disabled={isLoading}
        icon={<RiLockPasswordLine />}
        type="password"
        placeholder="Your new password"
      />

      <Input
        name="new_password2"
        value={formData.new_password2}
        onChange={(e) => handleChange(e, setFormData)}
        label="Confirm your new password"
        floatingLabel="Confirm New Password"
        disabled={isLoading}
        icon={<RiLockPasswordLine />}
        type="password"
        placeholder="Confirm new password"
      />

      <Button isLoading={isLoading} title="Reset Password" />
    </form>
  );
};

export default ConfirmPassword;
