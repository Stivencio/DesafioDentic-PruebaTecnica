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
import Details from "./Details";

export const AppRouter = () => {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Products} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/details" component={Details} />
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
};
