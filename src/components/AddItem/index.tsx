import { Button } from "flowbite-react";

const AddItem: React.FC = () => {
  const handleLogout = () => {
    // Clear localStorage
    localStorage.clear();

    // Reload the page
    window.location.reload();
  };
  return (
    <div className="flex flex-col">
      <h2 className="mb-4 text-xl font-bold text-white text-center">
        Welcome!
      </h2>
      <Button
        onClick={handleLogout}
        className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Logout
      </Button>
    </div>
  );
};

export default AddItem;
