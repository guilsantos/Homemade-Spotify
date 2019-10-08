import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import { Login, Album, Albums, Layout } from "../components";

import ROUTES from "./patch";

const { LOGIN, ALBUM, ALBUMS } = ROUTES;

const Routes = () => (
  <Layout>
    <BrowserRouter>
      <Switch>
        <Route path={ALBUM} exact component={Album} />
        <Route path={`${ALBUM}/:albumId`} component={Album} />
        <Route path={ALBUMS} exact component={Albums} />
        <Route path={`${ALBUMS}/:artist`} component={Albums} />
        <Route path={LOGIN} exact component={Login} />
        <Redirect to={LOGIN} />
      </Switch>
    </BrowserRouter>
  </Layout>
);

export default Routes;
