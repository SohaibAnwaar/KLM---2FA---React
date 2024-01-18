import Button from "../shared/Button";

const ThankYou = () => {
  return (
    <div className="flex flex-col gap-24 justify-between">
      <div className="text-sm font-medium bg-[#041530] text-white">
        Thank you, please check your email
      </div>
      <div className="flex justify-end">
        <Button
          // isLoading={isLoading}
          isLoading={false}
          title="Login"
        />
      </div>
    </div>
  );
};

export default ThankYou;
