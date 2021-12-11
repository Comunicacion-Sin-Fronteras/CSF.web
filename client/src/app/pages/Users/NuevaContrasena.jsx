import React, { Component } from "react";
import { Button, FormGroup, Input, Form, Col } from "reactstrap";
import "./PantallasUsuario.css";
import { Link } from 'react-router-dom';
import Logotipo_Dark_Animated from "../../img/animated/Logotipo_Dark_Animated.gif"

class NuevaContrasena extends Component {
  render() {
    return (
      <div class="principal">
        <div class="containerUsuarios">
          <div class="logoUsuarios">
            <img src={Logotipo_Dark_Animated} width="210px" align="right"  />
          </div>
          <div class="formulario" role="alert">
            <h1>Nueva contraseña</h1>
            <div class="General" class="col-9 offset-md-4">
              <Form>
                <FormGroup row>
                  <Col sm={6} className="mx- my-3">
                    <Input
                      id="password"
                      name="Nombre Usuario"
                      placeholder="Nueva contrseña"
                      type="password"
                      value=""
                      onChange=""
                      required
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Col sm={6} className="mx- my-2">
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
            </div>
            <div>
              <Button
                type="submit"
                onClick=" "
                size="lg"
                style={{
                  backgroundColor: "#22201C",
                  border: "#22201C",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="60"
                  height="60"
                  fill="currentColor"
                  class="bi bi-play-circle text-warning"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                  <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z" />
                </svg>
              </Button>
            </div>
            <Link to="/">
            <Button
              style={{
                backgroundColor: "#22201C",
                marginTop: "3%",
                marginRight: "90%",
                border: "#22201C",
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
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default NuevaContrasena;
