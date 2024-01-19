import { FormEvent, useState } from "react";
import Input from "../shared/Input";
import { TfiEmail } from "react-icons/tfi";
import Button from "../shared/Button";
import handleChange from "../../util/handleChange";
import { useNavigate } from "react-router-dom";
import { useResetPassword } from "../../hooks";
interface FormData {
  email: string;
}
const EmailViaRecovery = () => {
  const [formData, setFormData] = useState<FormData>({
    email: "",
  });
  const navigate = useNavigate();
  const { mutate, isLoading } = useResetPassword(() =>
    navigate("/auth/thankyou")
  );

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutate(formData);
  };
  return (
    <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
      <Input
        name="email"
        type="email"
        value={formData.email}
        onChange={(e) => handleChange(e, setFormData)}
        label={`Enter your email to recieve a recovery link`}
        disabled={isLoading}
        placeholder="ie: jhondoe@company.com"
        icon={<TfiEmail />}
      />
      <div className="flex justify-between items-center">
        <a href="#" className="text-indigo-600 hover:underline text-sm">
          Contact Customer Support
        </a>
        <Button isLoading={isLoading} title="Next" />
      </div>
    </form>
  );
};

export default EmailViaRecovery;
