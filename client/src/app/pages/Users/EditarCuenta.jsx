import React, { Component } from "react";
import { Button, FormGroup, Input, Label, Col, Form, Row } from "reactstrap";
import "./PantallasUsuario.css";
import { Link } from 'react-router-dom';
import Logotipo_Dark_Animated from "../../img/animated/Logotipo_Dark_Animated.gif";
import Usuario from "../../img/Usuario.png";

class EditarCuenta extends Component {
  render() {
    return (
      <div class="principal">
        <div class="containerUsuarios">
          <div class="Usuario">
            <Button
              type="submit"
              onClick=" "
              size="lg"
              style={{
                backgroundColor: "#22201C",
                border: "#22201C",
                marginTop: "35px",
                marginLeft:"42%",
              }}
            >
              <img src={Usuario} width="90%"/>
            </Button>
            
          </div>
          <div class="logo2">
              <img src={Logotipo_Dark_Animated} width="70%" align="right"/>
            </div>
          <div class="formulario">
            <h1>Editar Cuenta</h1>
            <div class="General" class="col-12 offset-sm-1">
              <Form>
                <FormGroup row>
                  <Label for="Nombre" sm={2}>
                    Nombre
                  </Label>
                  <Col sm={6}>
                    <Input
                      id="Nombre"
                      name="Nombre Usuario"
                      placeholder="Nombre de usuario"
                      type="text"
                      value=""
                      onChange=""
                    />
                  </Col>
                </FormGroup>
                <Row>
                  <Label for="Sexo" sm={2}>
                    Sexo
                  </Label>
                  <Col sm={2}>
                    <Input id="Sexo" name="sexo" type="select">
                      <option>M</option>
                      <option>F</option>
                      <option>Indiferente</option>
                    </Input>
                  </Col>
                  <Label for="exampleDate" sm={2}>
                    Fecha de Nacimiento
                  </Label>
                  <Col sm={2}>
                    <Input
                      id="exampleDate"
                      name="date"
                      placeholder="date placeholder"
                      type="date"
                    />
                  </Col>
                </Row>
                <FormGroup row>
                  <Label for="Correo" sm={2}>
                    Email Nuevo
                  </Label>
                  <Col sm={6} className="mx- my-3">
                    <Input
                      id="email"
                      name="Correo Electronico"
                      placeholder="Correo Electronico Nuevo"
                      type="email"
                      value=""
                      onChange=""
                    />
                  </Col>
                </FormGroup>
              </Form>
              <div class="botones">
                <Button
                  type="submit"
                  onClick=" "
                  size="lg "
                  style={{
                    backgroundColor: "#22201C",
                    border: "#22201C",
                    marginRight: "5%",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    fill="currentColor"
                    class="bi bi-trash  text-warning"
                    viewBox="0 0 16 16"
                  >
                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                    <path
                      fill-rule="evenodd"
                      d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                    />
                  </svg>
                </Button>

                <Button
                  type="submit"
                  onClick=" "
                  size="lg "
                  style={{
                    backgroundColor: "#22201C",
                    border: "#22201C",
                    marginLeft: "10%",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    fill="currentColor"
                    class="bi bi-save2 text-warning"
                    viewBox="0 0 16 16"
                  >
                    <path d="M2 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H9.5a1 1 0 0 0-1 1v4.5h2a.5.5 0 0 1 .354.854l-2.5 2.5a.5.5 0 0 1-.708 0l-2.5-2.5A.5.5 0 0 1 5.5 6.5h2V2a2 2 0 0 1 2-2H14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h2.5a.5.5 0 0 1 0 1H2z" />
                  </svg>
                </Button>
              </div>
              
            </div>
          </div>
          <div class="Regresar">
              <Button
              type="submit"
              onClick=" "
              style={{
                backgroundColor: "#22201C",
                marginBottom: "5%",
                marginRight: "90%",
                border:"#22201C",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="60"
                height="60"
                fill="currentColor"
                class="bi bi-arrow-counterclockwise text-warning "
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2v1z"
                />
                <path d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466z" />
              </svg>
            </Button>
              </div>
        </div>
      </div>
    );
  }
}

export default EditarCuenta;
