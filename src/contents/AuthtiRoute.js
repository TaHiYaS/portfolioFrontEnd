import React from'react'
import { Route, Redirect } from "react-router-dom";

export function authenticate ()  {
  const token = localStorage.getItem('token_Info');
  return token  ? JSON.parse(token) : false
}
const AuthtiRoute = ({ component:Component, ...rest }) => (
  <Route
      {...rest}
      render = {props => authenticate() ? (<Component {...props} />) : (<Redirect to={{ pathname: "/sign_in"}}/>)}
  />
);

export default AuthtiRoute