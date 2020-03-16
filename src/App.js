import React from 'react';
import { Navbar, NavbarBrand, Nav, NavItem } from 'reactstrap';
import './App.css';
import Products from './products/Products';
import ProductDetails from './productDetails/productDetails';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Navbar color="secondary" light expand="md">
          <NavbarBrand href="/">Zimbra</NavbarBrand>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink to="/" className="nav-link">Products</NavLink>
            </NavItem>
          </Nav>
        </Navbar>
        <Switch>
          <Route exact path="/">
            <Products />
          </Route>
          <Route path="/product/:categoryId/:category/:name">
            <ProductDetails />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
