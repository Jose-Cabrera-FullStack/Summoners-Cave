import React from "react";
import {
  BrowserRouter,
  Switch,
  HashRouter as Router,
  Route,
} from "react-router-dom";

import { connect } from "react-redux";

import Home from "../containers/Home";
import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";

const App = (props) => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default connect(null, null)(App);
