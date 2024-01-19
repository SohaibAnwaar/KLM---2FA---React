import { useLocation } from "react-router-dom";

const QR = () => {
  const {
    state: { qr_code },
  } = useLocation();
  const url = import.meta.env.VITE_BE_BASE_URL + qr_code;
  return (
    <div className="flex flex-col gap-24 justify-between">
      <div className="text-sm font-medium bg-[#041530] text-white">
        Scan this QR Code
      </div>
      <img src={url} alt="" />

      <a
        href="/auth/authenticator"
        className="text-indigo-600 hover:underline text-sm text-center"
      >
        2FA Authenticator
      </a>
    </div>
  );
};

export default QR;
