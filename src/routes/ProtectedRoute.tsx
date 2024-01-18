import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import Layout from "../components/Layout";

interface ProtectedRouteProps {
  redirectRoute?: string;
  isAuthRoute?: boolean;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  redirectRoute = "auth/login",
  isAuthRoute = false,
}) => {
  const storedDataString = localStorage.getItem("user");
  const token = storedDataString ? JSON.parse(storedDataString) : null;

  if (!isAuthRoute ? !token : token) {
    return <Navigate to={redirectRoute} />;
  }
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
};

export default ProtectedRoute;
