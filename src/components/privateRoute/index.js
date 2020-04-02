import React from "react";
import { Route, Redirect } from "react-router-dom";
import * as routes from "../../constants/routes";

function PrivateRoute({ component: Component, isAuthenticated, ...rest }) {

  return (
    <Route
      {...rest}
      render={props =>
        isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to={routes.LOGIN_SCREEN} />
        )
      }
    />
  );
}

export default PrivateRoute;