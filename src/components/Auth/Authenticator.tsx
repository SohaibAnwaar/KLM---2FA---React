import { FormEvent, useState } from "react";
import Input from "../shared/Input";
import { IoMdKey } from "react-icons/io";
import Button from "../shared/Button";
import handleChange from "../../util/handleChange";

interface FormData {
  twoFACode: string;
}

// interface IAuthenticatorProps {}

const Authenticator = () => {
  const [formData, setFormData] = useState<FormData>({
    twoFACode: "",
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
      <Input
        name="twoFACode"
        type="password"
        value={formData.twoFACode}
        onChange={(e) =>
          formData.twoFACode.length < 6 || e.target.value.length < 6
            ? handleChange(e, setFormData)
            : null
        }
        label="Enter your authenticator code"
        disabled={false}
        placeholder="6-digit code"
        icon={<IoMdKey />}
      />
      <div className="flex justify-between items-center">
        <a href="#" className="text-indigo-600 hover:underline text-sm">
          Contact Customer Support
        </a>
        <Button
          disabled={formData.twoFACode.length < 6}
          isLoading={false}
          title="Next"
        />
      </div>
    </form>
  );
};

export default Authenticator;
