import { useLocation } from "react-router-dom";
import { useRegisterAgain } from "../../hooks";

const ThankYou = () => {
  const { mutate, isLoading } = useRegisterAgain();
  const {
    state: { email },
  } = useLocation();
  return (
    <div className="flex flex-col gap-24 justify-between">
      <div className="text-sm font-medium bg-[#041530] text-white">
        Thank you, please check your email
      </div>

      <div className="flex justify-end">
        <div
          className={`text-indigo-600 hover:underline text-sm ${
            isLoading && "cursor-not-allowed opacity-50 text-gray-600"
          }`}
          onClick={() => mutate({ email })}
        >
          Resend Email
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
