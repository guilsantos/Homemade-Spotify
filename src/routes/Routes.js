import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import { Login, Album, Albums } from '../components'

import ROUTES from './patch'

const {
  LOGIN,
  ALBUM,
  ALBUMS
} = ROUTES

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path={ALBUM} component={Album} />
      <Route path={`${ALBUM}/:album`} component={Album} />
      <Route path={ALBUMS} component={Albums} />
      <Route path={`${ALBUMS}/:artist`} component={Albums} />
      <Route path={LOGIN} exact component={Login} />
      <Redirect to={LOGIN} />
    </Switch>
  </BrowserRouter>
)

export default Routes
