import React from "react";
import { useSelector } from "react-redux";
import ProtectedRouteStyles from "./ProtectedRoute.module.css";
import { Redirect, Route } from "react-router-dom";
import Loader from "../Loader/Loader";

const ProtectedRoute = ({ children, ...rest }) => {
  const { auth } = useSelector((state) => state.auth);

  if (auth === null) {
    return (
      <div className={ProtectedRouteStyles.loader_container}>
        <Loader width={50} height={50} fullPage={false} />
      </div>
    );
  }

  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default ProtectedRoute;
