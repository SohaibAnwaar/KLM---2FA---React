
export const getCurrentUser = () => {
  const user = localStorage.getItem("userid");
  return user ? JSON.parse(user) : null;
};