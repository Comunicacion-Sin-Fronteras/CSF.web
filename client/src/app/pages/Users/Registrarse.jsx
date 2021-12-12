import React, { Component } from "react";
import { Button, FormGroup, Input, Label, Col, Form, Row, UncontrolledAlert, Alert } from "reactstrap";
// import "./PantallasUsuario.css";
import Cookies from "universal-cookie";
import { Navigate } from "react-router-dom";

class Registrarse extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      email: "",
      nombre: "",
      password: "",
      IsSubmitting: false,
      isRegistered: false,
    }
  }

  signUp = async event => {
    event.preventDefault()
    console.log("submiting")
    this.setState({ IsSubmitting: true });

    const genericErrorMessage = "Something went wrong! Please try again later."
    // console.log(process.env.REACT_APP_SERVER_API_ENDPOINT);
    fetch(process.env.REACT_APP_SERVER_API_ENDPOINT + "user/signup", {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        correo_Electronico: this.state.email,
        password: this.state.password,
        nombre: this.state.nombre,
        "Fecha_de_Nacimiento": "x",
        "sexo": "x"
      }),
    }).then(async response => {
      this.setState({ IsSubmitting: false });
      // setIsSubmitting(false)
      if (!response.ok) {
        if (response.status === 400) {
          this.setState({ error: 'Please fill all the fields correctly!' });

          // setError("Please fill all the fields correctly!")
          // console.log({ correo_Electronico: email, password })
        } else {
          this.setState({ error: genericErrorMessage });
        }
      } else {
        const data = await response.json()
        const cookies = new Cookies();
        cookies.set("TOKEN", data.token, {
          path: "/",
        });
        cookies.set("REFRESHTOKEN", data.refreshToken, {
          path: "/",
        });
        console.log("setting new token:" + cookies.get("TOKEN"))
        console.log("setting new rtoken:" + cookies.get("REFRESHTOKEN"))
        
        this.setState({ isRegistered: true });
      }
    }).catch(error => {
      this.setState({ IsSubmitting: false });
      this.setState({ error: genericErrorMessage });
      console.log(error);
    })

  }

  render() {
    return (

      <div>
        {
          this.state.isRegistered ? (<Navigate to="/users/VerificarCorreo" message="registro exitoso"/>) : <div />
        }
        {
          this.state.error ? (<Alert color="danger">
            {this.state.error}
          </Alert>) : <div />
        }
        <div>
          <Form onSubmit={this.signUp}>
            <div className="General col-12 offset-md-1">
              <FormGroup row>
                <Label for="Nombre" sm={2}>
                  Nombre*
                </Label>
                <Col sm={6}>
                  <Input
                    id="Nombre"
                    name="Nombre"
                    placeholder="Nombre de usuario"
                    type="text"
                    required
                    // value={this.state.email}
                    onChange={e => this.setState({ nombre: e.target.value })}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="Nombre" sm={2}>
                  Correo Electronico*
                </Label>
                <Col sm={6}>
                  <Input
                    id="correo_Electronico"
                    name="correo_Electronico"
                    placeholder="Correo Electronico"
                    type="text"
                    required
                    // value={this.state.email}
                    onChange={e => this.setState({ email: e.target.value })}
                  />
                </Col>
              </FormGroup><FormGroup row>
                <Label for="Password" sm={2}>
                  Contraseña*
                </Label>
                <Col sm={6}>
                  <Input
                    id="Password"
                    name="PasswordUsuario"
                    placeholder="Contraseña de usuario"
                    type="password"
                    required
                    // value={this.state.email}
                    onChange={e => this.setState({ password: e.target.value })}
                  />
                </Col>
              </FormGroup>
              <Row>
                <Label for="Sexo" sm={2}>
                  Sexo
                </Label>
                <Col sm={2}>
                  <Input id="Sexo" name="sexo" type="select" required>
                    <option>M</option>
                    <option>F</option>
                    <option>Indiferente</option>
                  </Input>
                </Col>
                <Label for="exampleDate" sm={2}>
                  Fecha de Nacimiento*
                </Label>
                <Col sm={2}>
                  <Input
                    id="exampleDate"
                    name="date"
                    placeholder="date placeholder"
                    type="date"
                    required
                  />
                </Col>
              </Row>
            </div>
            <div>
              <Button
                type="submit"
                onClick={this.signUp}
                size="lg"
                style={{
                  backgroundColor: "#22201C",
                  border: "#22201C",
                  marginTop: "2vh",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="60"
                  height="60"
                  fill="currentColor"
                  className="bi bi-play-circle text-warning"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                  <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z" />
                </svg>
              </Button>
            </div>
          </Form>
        </div>
      </div>
    );
  }
}

export default Registrarse;
