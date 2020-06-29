import React, { useContext } from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Home from "../Home";
import Products from "../Products";
import ProductDetails from "../ProductDetails";
import About from "../About";

import Header from "../../components/organisms/Header";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
      <Switch>
        <Route exact path="/produits">
          <Products />
        </Route>
      </Switch>
      <Switch>
        <Route path="/produits/:id">
          <ProductDetails />
        </Route>
      </Switch>
      <Switch>
        <Route exact path="/apropos">
          <About />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
