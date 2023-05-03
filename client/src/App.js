import React from "react";
import "./App.css";
import Home from "./components/pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import land from "./components/pages/Land";
import Market from "./components/pages/Market";
import Contact from "./components/pages/Contact";
import Sign_up from "./components/pages/Sign-up";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/market" component={Market} />
          <Route path="/land" component={land} />
          <Route path="/contact" component={Contact} />
          <Route path="/sign-up" component={Sign_up} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
