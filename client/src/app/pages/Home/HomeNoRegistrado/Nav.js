import React from 'react';
import { Link } from 'react-router-dom';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, NavbarText, Col } from 'reactstrap';
import { Button } from "reactstrap"
import './NoRegistrado.css';
import logo from './Logotipo_Dark.png';

const style = { width: "80px" };
const style2 = { color: "Black" };

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
          <NavbarBrand href="/" style={style2}>Comunicación sin Fronteras</NavbarBrand>
          <NavbarToggler onClick={function noRefCheck() { }} />
          <Collapse navbar>
            <Nav className="me-auto" navbar>
            </Nav>
            <NavbarText>
              <div>
                <Link to="/auth/login">
                  <Button className="bc" color="secondary">Iniciar Sesión</Button>{' '}
                </Link>
                <Link to="/users/Registrarse">
                  <Button className="bc" color="secondary">Registrate</Button>{' '}
                </Link>
              </div>
            </NavbarText>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}