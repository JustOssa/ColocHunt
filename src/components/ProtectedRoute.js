import React from "react";
import {
  Navigate,
  useLocation,
  matchPath
} from 'react-router-dom'
import { useUserAuth } from "../context/UserAuthContext";

const ProtectedRoute = ({children}) => {
  
  const { user } = useUserAuth();
  let location = useLocation();
  const from = location.state?.from?.pathname || "/";
  
  // Loading auth status
  if (user === undefined) {
    return null; // or loading spinner, etc...
  }
  
  // If they are logged in they can't visit these paths
  if (
    matchPath("/signin", location.pathname) ||
    matchPath("/signup", location.pathname) ||
    matchPath("/forgot_password", location.pathname)
  ) {
    return user ? (
      <Navigate
        to={from}
        replace
      />
    ) : (
      children
    )
  }

  // If they are not logged in they can't visit pretected page
  return user ? (
    children
  ) : (
    <Navigate
      to="/signin"
      state={{ from: location }}
      replace
    />
  )
  
};

export default ProtectedRoute;