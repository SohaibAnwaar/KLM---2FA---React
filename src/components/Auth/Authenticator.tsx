import { FormEvent, useState } from "react";
import Input from "../shared/Input";
import { IoMdKey } from "react-icons/io";
import Button from "../shared/Button";
import handleChange from "../../util/handleChange";
import { useVerifyOTP } from "../../hooks";
import { getCurrentUser } from "../../util/getCurrentUser";
import { useNavigate } from "react-router-dom";

interface FormData {
  otp: string;
}

// interface IAuthenticatorProps {}

const Authenticator = () => {
  const [formData, setFormData] = useState<FormData>({
    otp: "",
  });
  const navigate = useNavigate();

  const { mutate, isLoading } = useVerifyOTP(() => navigate("/"));

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
    const { user: user_id } = getCurrentUser();
    mutate({ ...formData, user_id });
  };

  return (
    <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
      <Input
        name="otp"
        type="password"
        value={formData.otp}
        onChange={(e) =>
          formData.otp.length < 6 || e.target.value.length < 6
            ? handleChange(e, setFormData)
            : null
        }
        label="Enter your authenticator code"
        floatingLabel="2FA Code"
        disabled={isLoading}
        placeholder="6-digit code"
        icon={<IoMdKey />}
      />
      <div className="flex justify-between items-center">
        <a href="#" className="text-indigo-600 hover:underline text-sm">
          Contact Customer Support
        </a>
        <Button
          disabled={formData.otp.length < 6}
          isLoading={isLoading}
          title="Next"
        />
      </div>
    </form>
  );
};

export default Authenticator;
