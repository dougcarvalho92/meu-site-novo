import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Experience from "./pages/Experience/Experience";
import Landing from "./pages/Landing/Landing";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/experience"  component={Experience} />

      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
