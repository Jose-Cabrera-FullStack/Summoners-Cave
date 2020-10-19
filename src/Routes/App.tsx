import * as React from 'react';
import {
    Switch,
    HashRouter as Router,
    Route,
} from "react-router-dom";

import Home from "../containers/Home"

const App = () => {
    return (
        <Router>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    );
  };
  
  export default (App);