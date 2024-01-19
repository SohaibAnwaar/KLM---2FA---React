import { Navigate } from "react-router-dom";
import App from "../App";
import Login from "../components/Login";
import Auth from "../components/Auth";
import EmailViaRecovery from "../components/Login/EmailViaRecovery";
import ThankYou from "../components/Auth/ThankYou";
import Authenticator from "../components/Auth/Authenticator";
import RegisterSuccess from "../components/Auth/RegisterSuccess";
import SignUp from "../components/SignUp";
import Verifying from "../components/Auth/Verifying";
import QR from "../components/Login/QR";
import ConfirmPassword from "../components/Login/ConfirmPassword";
import AddItem from "../components/AddItem";

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
        path: "qr/",
        element: <QR />,
      },

      {
        path: "register/",
        element: <SignUp />,
      },

      {
        path: "email/confirm/",
        element: <Verifying />,
      },
      {
        path: "recovery/password/confirm",
        element: <EmailViaRecovery />,
      },
      {
        path: "recovery/password/",
        element: <ConfirmPassword />,
      },

      {
        path: "recovery/password/thankyou",
        element: <RegisterSuccess />,
      },
      {
        path: "thankyou/",
        element: <ThankYou />,
      },

      {
        path: "success/",
        element: <RegisterSuccess />,
      },
      {
        path: "authenticator/",
        element: <Authenticator />,
      },
    ],
  },
];
