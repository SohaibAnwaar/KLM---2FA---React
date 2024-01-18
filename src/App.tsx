import Navbar from "./components/Navbar";
import { Toaster } from "react-hot-toast";
import ProtectedRoute from "./routes/ProtectedRoute";
function App() {
  return (
    <>
      <Toaster />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-1 flex flex-col">
          <ProtectedRoute />
        </div>
      </div>
    </>
  );
}

export default App;
