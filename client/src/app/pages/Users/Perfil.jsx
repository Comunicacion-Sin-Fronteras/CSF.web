import React, { Component } from "react";
import { Button, FormGroup, Input, Label, Col, Form, Row, Container } from "reactstrap";
import "./PantallasUsuario.css";
import Logotipo_Dark from "../../img/Logotipo_Dark.png";
import Usuario from "../../img/Usuario.png";
import Cookies from "universal-cookie";
import Nav from '../Home/HomeRegistrado/Nav2.js'
import { Link } from 'react-router-dom';

class Perfil extends Component {

    constructor(props) {
        super(props);
        const cookies = new Cookies();
        let user = cookies.get("USER")
        this.state = {
            user
        }
    }


    render() {
        if (this.state.user) {
            return (
                <div>
                    <Nav />
                    <Container className="homeJuegos">
                        {/* <nav= /> */}
                        <div class="col-4">
                            <Container fluid className="pt-5">
                                <h1>Mis datos</h1>
                                <Row>
                                    <p class="h3">Datos personales</p>
                                    <dt class="col-sm-3">Nombre</dt>
                                    <dd class="col-sm-9">
                                        {this.state.user.nombre}
                                    </dd>
                                    <p class="h3">Datos de cuenta</p>
                                    <dt class="col-sm-3">E-mail</dt>
                                    <dd class="col-sm-9">
                                        {this.state.user.correo_Electronico}
                                    </dd>
                                    <dd class="col-sm-12 pt-4">
                                        <Link to="/users/EditarCuenta">
                                        <Button color="warning">
                                            Editar Datos
                                        </Button>
                                        </Link>
                                    </dd>
                                </Row>
                            </Container>
                        </div>

                    </Container>

                </div>
            )
        }

    }
}

export default Perfil;
