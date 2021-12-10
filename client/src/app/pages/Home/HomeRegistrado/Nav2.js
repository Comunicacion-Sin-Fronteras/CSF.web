import React from 'react';
import { Link } from 'react-router-dom';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, NavbarText, Col, } from 'reactstrap';
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap"
import './app.css';
import logo from './Logotipo_Dark.png';
import user from './user.png';

const style = { width: "110px" };
const style2 = { width: "60px" };

export default class TopNav extends React.Component {
  render() {
    return (
      <div>
        <Navbar className="color-nav" expand="md" light>
          <Col sm="1" xs="1">
            <img
              alt="..."
              className="img-fluid rounded-circle shadow"
              src={logo}
              style={style}
            ></img>
          </Col>
          <NavbarBrand href="/">Comunicación sin Fronteras</NavbarBrand>
          <NavbarToggler onClick={function noRefCheck() { }} />
          <Collapse navbar>
            <Nav className="me-auto" navbar>
              <NavItem>
                <NavLink>Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/juegos/Home">Juegos</NavLink>
              </NavItem>
              <NavItem>
                {/* Linea 37 se cambia "David por el usuario actual" */}
                <NavLink tag={Link} to={"/users/Historial/"+"David"}>
                  Historial
                </NavLink>
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