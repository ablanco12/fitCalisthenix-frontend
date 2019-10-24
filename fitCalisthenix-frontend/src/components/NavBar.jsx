import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Form,
  Input,
  FormGroup,
  Label,
  Button,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem
} from "reactstrap";
const NavBar = props => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="nav-bar">
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">fitCalisthenix</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            {window.localStorage.getItem("username") ? (
              <p className="mr-sm-2">
                Hi! {window.localStorage.getItem("username")}
              </p>
            ) : (
              <div>
                <Form inline>
                  <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                    <Label for="exampleEmail" className="mr-sm-2">
                      Username
                    </Label>
                    <Input
                      type="text"
                      name="username"
                      id="username"
                      placeholder="Username"
                      value={props.login.username}
                      onChange={props.handleLoginChange}
                    />
                  </FormGroup>
                  <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                    <Label for="examplePassword" className="mr-sm-2">
                      Password
                    </Label>
                    <Input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="Password"
                      value={props.login.password}
                      onChange={props.handleLoginChange}
                    />
                  </FormGroup>
                  <Button onClick={props.handleClick}>Login</Button>
                </Form>
              </div>
            )}

            {!window.localStorage.getItem("username") && (
              <NavItem>
                <NavLink className="nav-item nav-link" to="/signup">
                  Sign Up
                </NavLink>
              </NavItem>
            )}

            {window.localStorage.getItem("username") && (
              <NavItem>
                <NavLink className="nav-item nav-link" to="/profile">
                  Profile
                </NavLink>
              </NavItem>
            )}

            {window.localStorage.getItem("username") && (
              <NavItem>
                <Button onClick={props.handleClickLogout}>Logout</Button>
              </NavItem>
            )}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
