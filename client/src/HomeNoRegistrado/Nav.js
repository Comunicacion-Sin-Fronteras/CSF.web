import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink,NavbarText, Col} from 'reactstrap';
import { Button } from "reactstrap"
import './app.css';
import logo from './Logotipo_Dark.png';

const style = { width: "110px" };

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
          <NavbarToggler onClick={function noRefCheck(){}} />
          <Collapse navbar>
            <Nav className="me-auto" navbar>
              <NavItem>
                <NavLink>Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink>Juegos</NavLink>
              </NavItem>
            </Nav>
            <NavbarText>
              <div>
                <Button className="bc" color="secondary">Iniciar Sesión</Button>{' '}
                <Button className="bc" color="secondary">Registrate</Button>{' '}
              </div>
            </NavbarText>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}