import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import Cart from './Cart.component';

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <header>
      <Navbar color="dark" dark expand="md">
        <div className="container">
        <NavbarBrand href="/">
          <img src="/img/logo.svg" alt="logo" className="logo"></img>
          </NavbarBrand>
          <Cart />

        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/products/">Products</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Your Account
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>Edit Info</DropdownItem>
                <DropdownItem>Orders</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Logout</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
              <NavLink href="/contact">Contact</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
        </div>
      </Navbar>
    </header>
  );
};

export default Header;
