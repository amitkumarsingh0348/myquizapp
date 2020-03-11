import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import HomePage from "./assets/HomePage";

class App extends Component {
  state = {};

  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={HomePage} />
        </Switch>
      </Router>
    );
  }
}

export default App;
