import React, { Component } from "react";
import { Button, FormGroup, Input } from "reactstrap";
import "./PantallasUsuario.css";
import Logotipo_Dark_Animated from "../../img/animated/Logotipo_Dark_Animated.gif";
import { Link } from 'react-router-dom';


class VerificarCorreo extends Component {
  render() {
    return (
      <div class="principal">
        <div class="container">
          <div class="logo">
            <img src={Logotipo_Dark_Animated} width="240px" />
          </div>
          <div class="formulario" role="alert">
            <h1>Verificar Correo</h1>
            <div style={{ color: "white", textDecoration: "none !important" }}>
              <p>
                Ya los has verificado? ir a &nbsp;
                <Link to="/auth/login" style={{ color: "white", textDecoration: "none !important" }}>
                  Iniciar Sesión
                </Link>
              </p>
              <Link to="/auth/login" style={{ color: "white", textDecoration: "none !important" }}>
                <Button
                  className="mx- mb-5"
                  type="submit"
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
              </Link>
            </div>
          </div>
          <div class="Regresar">
            <Link to="/">
              <Button
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
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default VerificarCorreo;
