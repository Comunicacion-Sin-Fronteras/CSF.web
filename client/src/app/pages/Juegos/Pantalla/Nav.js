import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink,NavbarText, Col, } from 'reactstrap';
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap"
import './app.css';
import logo from './Logotipo_Dark.png';
import user from './user.png';

const style = { width: "80px" };
const style2 = { width: "50px" };
const style3 = { color: "Black" };

export default class TopNav extends React.Component {
  render() {
    return (
      <div>
        <Navbar className="color-nav" expand="sm">
        <Col sm="1" xs="1">
          <img
            alt="..."
            className="img-fluid rounded-circle shadow"
            src={logo}
            style={style}
          ></img>
        </Col>
          <NavbarBrand href="/" style={style3}>Comunicación sin Fronteras</NavbarBrand>
          <NavbarToggler onClick={function noRefCheck(){}} />
          <Collapse navbar>
            <Nav className="me-auto" navbar>
              <NavItem>
                <NavLink style={style3}>Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink style={style3}>Juegos</NavLink>
              </NavItem>
            </Nav>
            <NavbarText>
              <div>
                <img
                  alt="..."
                  className="img-fluid rounded-circle shadow"
                  src={user}
                  style={style2}
                ></img>
              <UncontrolledDropdown>
                  <DropdownToggle>Opciones</DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem>Perfil</DropdownItem>
                    <DropdownItem>Cerrar Sesión</DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </div>
            </NavbarText>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}