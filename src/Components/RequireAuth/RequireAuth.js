import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import auth from "../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import Loading from "../Loading/Loading";

const RequireAuth = ({ children }) => {
  const location = useLocation();
  const [user, loading, error] = useAuthState(auth);
  if (loading) {
    return <Loading />;
  }
  if (!user) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
};

export default RequireAuth;
