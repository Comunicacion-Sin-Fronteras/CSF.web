import React from 'react';
import { Link } from 'react-router-dom';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, NavbarText, Col } from 'reactstrap';
import { Button } from "reactstrap"
import './NoRegistrado.css';
import logo from './Logotipo_Dark.png';

const style = { height:"70px",  width: "70px" };

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
                <NavLink href="./Adivina">Juegos</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/users/Historial">
                  Historial
                </NavLink>
              </NavItem>
            </Nav>
            <NavbarText>
              <div>
                <Link to="/auth/login">
                  <Button className="bc" color="secondary">Iniciar Sesión</Button>{' '}
                </Link>
                <Button className="bc" color="secondary">Registrate</Button>{' '}
              </div>
            </NavbarText>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}