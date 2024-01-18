import { FormEvent, useState } from "react";
import Input from "../shared/Input";
import { TfiEmail } from "react-icons/tfi";
import Button from "../shared/Button";
import handleChange from "../../util/handleChange";
import { useNavigate, useParams } from "react-router-dom";
interface FormData {
  email: string;
}
// interface IEmailViaRecoveryProps {
//   isPasswordRecovery?: boolean;
// }
const EmailViaRecovery = () => {
  const [formData, setFormData] = useState<FormData>({
    email: "",
  });
  const { password } = useParams();
  const navigate = useNavigate();
  //   const { mutate, isLoading } = useLogin(() => navigate("/add"));

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
    navigate("/auth/thankyou/");
    // mutate(formData);
  };
  return (
    <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
      <Input
        name="email"
        type="email"
        value={formData.email}
        onChange={(e) => handleChange(e, setFormData)}
        label={`Enter your email to recieve a ${
          password ? "recovery link" : " reminder"
        }`}
        //   disabled={isLoading}
        disabled={false}
        placeholder="ie: jhondoe@company.com"
        icon={<TfiEmail />}
      />
      <div className="flex justify-between items-center">
        <a href="#" className="text-indigo-600 hover:underline text-sm">
          Contact Customer Support
        </a>
        <Button isLoading={false} title="Next" />
      </div>
    </form>
  );
};

export default EmailViaRecovery;
