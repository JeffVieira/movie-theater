import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Discovery from "pages/movies/Discovery";
import Details from "pages/movies/Details";

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Discovery />
        </Route>
        <Route path="/details/:id">
          <Details />
        </Route>
      </Switch>
    </Router>
  );
}
