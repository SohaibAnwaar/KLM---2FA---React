import ProtectedRoute from "../../routes/ProtectedRoute";

const Auth = () => {
  return <ProtectedRoute redirectRoute="/" isAuthRoute />;
};

export default Auth;
