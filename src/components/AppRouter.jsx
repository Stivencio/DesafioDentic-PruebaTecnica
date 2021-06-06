import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Header from "./Header";
import Products from "./Products";
import Cart from "./Cart";

export const AppRouter = () => {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Products} />
          <Route exact path="/cart" component={Cart} />
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
};
