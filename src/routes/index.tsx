import { Navigate } from "react-router-dom";
import App from "../App";
import Login from "../components/Login";
import AddItem from "../components/AddItem";
import Auth from "../components/Auth";
import EmailViaRecovery from "../components/Login/EmailViaRecovery";
import ThankYou from "../components/Auth/ThankYou";
import Authenticator from "../components/Auth/Authenticator";

export const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Navigate to="/add" replace />,
      },
      {
        path: "add/",
        element: <AddItem />,
      },
    ],
  },
  {
    path: "/auth",
    element: <Auth />,
    children: [
      {
        index: true,
        element: <Navigate to="/auth/login/" replace />,
      },
      {
        path: "login/",
        element: <Login />,
      },

      {
        path: "recovery/:password?",
        element: <EmailViaRecovery />,
      },
      {
        path: "thankyou/",
        element: <ThankYou />,
      },

      {
        path: "authenticator/",
        element: <Authenticator />,
      },
    ],
  },
];
