import React, { useContext } from "react";
import { AuthContext } from "../firebase/FirebaseAuthProvider";
import { Navigate } from "react-router";

const PrivateRouter = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return (
      <div className="flex justify-center items-center">
        <span className="loading loading-ring loading-xl"></span>

        <span className="loading loading-ring loading-xl"></span>

        <span className="loading loading-ring loading-xl"></span>

        <span className="loading loading-ring loading-xl"></span>
      </div>
    );
  }
  if (!user) {
    return <Navigate to="/login"></Navigate>;
  }
  return children;
};

export default PrivateRouter;
