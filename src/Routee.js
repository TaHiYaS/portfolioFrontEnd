import React from 'react'
import {BrowserRouter , Switch,Route } from 'react-router-dom';
import Home from './core/Home';
import Sign_up from './user/Sign_up';
import Sign_in from './user/Sign_in';
import Menu from './core/Menu';
import Profile from './user/Profile';
import ProfileAdmin from './user/ProfileAdmin';
import AuthtiRoute from './contents/AuthtiRoute';
import AuthtiRouteAdmin from './contents/AuthtiRouteAdmin';
import Portfolio from './core/Portfolio';

function Routee() {
  return (
      <div>
          <BrowserRouter>
          <Menu />
              <Switch>         
                <AuthtiRoute path='/' exact component={Home} />
                <AuthtiRoute path='/Profile' exact component={Profile} /> 
                <AuthtiRoute path='/Portfolio' exact component={Portfolio} />
                <AuthtiRouteAdmin path='/admin/profile' exact component={ProfileAdmin} />
                <Route path='/sign_in' exact component={Sign_in} /> 
                <Route path='/sign_up' exact component={Sign_up} /> 
              </Switch>
          </BrowserRouter>
      </div>
  )
}
export default Routee;