import React, { Component } from "react";
import { Button, FormGroup, Input } from "reactstrap";
import "./PantallasUsuario.css";
import Logotipo_Dark_Animated from "../../img/Logotipo_Dark_Animated.gif";

class RecuperarContrasena extends Component {
  render() {
    return (
      <div class="principal">
        <div class="container">
          <div class="logo">
            <img src={Logotipo_Dark_Animated}  width="240px" />
          </div>
          <div class="formulario" role="alert">
            <h1>Recuperar Contraseña</h1>
            <div class="General" class="col-6 offset-md-3">
              <FormGroup class="col" className="mx- my-5">
                <Input
                  id="email"
                  placeholder="Correo electronico"
                  type="email"
                  value=" "
                  onChange=" "
                  required
                />
              </FormGroup>
            </div>

            <div>
              <Button
                className="mx- my-5"
                type="submit"
                onClick=" "
                size="lg"
                mx-
                my-5
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
                  class="bi bi-play-circle text-warning "
                  viewBox="0 0 16 16"
                >
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                  <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z" />
                </svg>
              </Button>
            </div>
          </div>
          <div class="Regresar">
            <Button
              type="submit"
              onClick=" "
              style={{
                backgroundColor: "#22201C",
                marginTop: "2em",
                marginRight: "65em",
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
          </div>
        </div>
      </div>
    );
  }
}

export default RecuperarContrasena;
