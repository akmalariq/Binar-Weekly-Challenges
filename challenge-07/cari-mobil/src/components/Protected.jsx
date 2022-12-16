import { Navigate } from "react-router-dom";

// TODO: Leave it to your imagination
function Protected({ children }) {
  const token = localStorage.getItem("user_token");
  console.log(token);

  if (!token) return <Navigate to="/login" />;

  return children;
}

export default Protected;
