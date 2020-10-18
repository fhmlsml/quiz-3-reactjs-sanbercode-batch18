import React from "react";
import { Switch, Route } from "react-router-dom";
import Index from "./index";
import About from "./about";
import Movie from "./movie";
import Login from "./login";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Index />
      </Route>
      <Route exact path="/about">
        <About />
      </Route>
      <Route exact path="/movie">
        <Movie />
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
    </Switch>
  );
};

export default Routes;
