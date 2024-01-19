import { useLocation } from "react-router-dom";
import { useActivate } from "../../hooks";
import Loader from "../shared/Loader";

const Verifying = () => {
  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);

  const key = queryParams.get("key");
  const { isLoading, isError } = useActivate(key || "");
  console.log(key);

  return (
    <div className="flex flex-col gap-24 justify-between">
      <div className="text-sm font-medium bg-[#041530] text-white">
        Congratulations, you email has been verified!
      </div>

      {isLoading && (
        <div className="flex justify-center">
          <Loader />
        </div>
      )}
      {!isLoading && !isError && (
        <a
          href="/auth/login"
          className="text-indigo-600 hover:underline text-sm"
        >
          Login
        </a>
      )}
    </div>
  );
};

export default Verifying;
