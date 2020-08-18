import React, { useState } from "react";
import {
  BrowserRouter as Router,

  Link
} from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import Cart from './Cart.component';

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  let session, middleware,sessionWord="Login/Logout"

  return (
    <header>
      <Navbar color="dark" dark expand="md">
        <div className="container">
          <NavbarBrand>
            <Link to="/">
              <img src="/img/logo.svg" alt="logo" className="logo"></img>
            </Link>
          </NavbarBrand>
          {/* Shopping Cart Icon */}
          <Cart />
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <Link to="/products/" className="nav-link" onClick={toggle}>
                  Products
                </Link>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Your Account
                </DropdownToggle>
                <DropdownMenu right>
                  <Link to="/account" className="nav-link" onClick={toggle}>
                    <DropdownItem>Edit Info</DropdownItem>
                  </Link>
                  <Link to="/orders" className="nav-link" onClick={toggle}>
                    <DropdownItem>Orders</DropdownItem>
                  </Link>
                  <DropdownItem divider />
                  {/* replace here the login link */}
                  <DropdownItem>{sessionWord}</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <Link to="/contact" className="nav-link" onClick={toggle}>
                  Contact
                </Link>
              </NavItem>
            </Nav>
          </Collapse>
        </div>
      </Navbar>
    </header>
  );
};

export default Header;
