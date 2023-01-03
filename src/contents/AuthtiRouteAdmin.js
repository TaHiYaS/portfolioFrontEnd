import React from 'react'
import { authenticate } from './AuthtiRoute';
import { Route, Redirect } from "react-router-dom";

export const AuthtiRouteAdmin = ({ component:Component, ...rest }) => (
    <Route
        {...rest}
        render = {props => authenticate() && authenticate().user.role === 1 ? (<Component {...props} />) : (<Redirect to={{ pathname: "/"}}/>)}
    />
);
export default AuthtiRouteAdmin