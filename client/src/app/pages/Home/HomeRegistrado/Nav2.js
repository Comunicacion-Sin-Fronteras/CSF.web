import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, NavbarText, Col, } from 'reactstrap';
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap"
import './Registrado.css';
import logo from './Logotipo_Dark.png';
import user from './user.png';
import { Link, Navigate } from 'react-router-dom';
import Cookies from 'universal-cookie';

const style = { width: "80px" };
const style2 = { width: "50px" };
const style3 = { color: "Black" };

export default class TopNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogout: false
    }
  }

  cerrarSesionHandler = (eventRef) => {
    // console.log('toogle event ref', eventRef);
    // this.setState({ selectedEvents: name, selectedEventsID: eventRef });

    if (window.confirm('¿Estas seguro que deseas cerrar sesion?')) {
      const cookies = new Cookies();
      let refreshToken = cookies.get("REFRESHTOKEN")
      let user = cookies.get("USER")
      fetch(process.env.REACT_APP_SERVER_API_ENDPOINT + "user/logout", {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ refreshToken, user }),
      }).then(async response => {
        // setIsSubmitting(false)
        if (!response.ok) {
          if (response.status === 400) {
            // setError("Please fill all the fields correctly!")
            console.log("Error 400")
          } else {
            // setError(genericErrorMessage)
            console.log("Error desconocido")

          }
        } else {
          const data = await response.json()
          cookies.remove("TOKEN");
          cookies.remove("REFRESHTOKEN");
          cookies.remove("USER");
          cookies.remove("ID");
          this.setState({
            isLogout: true,
          })
          // navigate("/");
        }
      }).catch(error => {
        console.log("Error desconocido")
        console.log(error)

        // setIsSubmitting(false)
        // setError(genericErrorMessage)
      })

    }


  }

  render() {
    return (
      <div>
        {
          this.state.isLogout ? <Navigate to="/" /> : <div></div>
        }
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
                  <NavLink tag={Link} to="/juegos/Home" style={style3}>Juegos</NavLink>
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
                    <DropdownItem tag={Link} to="/users/Historial">
                      Hitorial
                    </DropdownItem>
                    <DropdownItem onClick={this.cerrarSesionHandler.bind(this)}>
                      {/* <div onClick={alert('test')}> */}
                      Cerrar Sesión
                      {/* </div> */}
                    </DropdownItem>
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