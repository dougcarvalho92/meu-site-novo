import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Course from "./pages/Courses";
import Education from "./pages/Education";
import Experience from "./pages/Experience";
import Landing from "./pages/Landing";

function Routes() {
  return (
    <BrowserRouter basename="/">
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/experience" component={Experience} />
        <Route path="/education" component={Education} />
        <Route path="/courses" component={Course} />

      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
