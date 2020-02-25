import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./pages/home";

const comingSoon = () => {
  return <h4>Coming Soon...</h4>;
};

export const MainRoutes = (
  <Switch key="sellerroutes">
    <Route key="home" exact path="/" component={Home} />
    <Route key="home" exact path="/home" component={Home} />
  </Switch>
);
