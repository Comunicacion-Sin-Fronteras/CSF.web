import React, { Component } from "react";
import { Container, Button, FormGroup, Input, Label, Col, Form, Row } from "reactstrap";
import "./PantallasUsuario.css";
import Logotipo_Dark from "../../img/Logotipo_Dark.png";
import Usuario from "../../img/Usuario.png";
import Nav from '../Home/HomeRegistrado/Nav2.js'
import { Link, Navigate } from 'react-router-dom';
import Cookies from "universal-cookie";
import Loader from "../../components/Loader";

class EditarCuenta extends Component {

  constructor(props) {
    super(props);
    const cookies = new Cookies();
    let user = cookies.get("USER")
    this.state = {
      nombre: user.nombre,
      email: user.correo_Electronico,
      Fecha_de_Nacimiento: user.Fecha_de_Nacimiento,
      sexo: user.sexo,
      error: null,
      IsSubmitting: false,
      isUpdated: false
    }
  }


  formSubmitHandler = async event => {
    event.preventDefault()
    this.setState({ error: null })
    this.setState({ IsSubmitting: true })

    const genericErrorMessage = "Something went wrong! Please try again later."
    // console.log(process.env.REACT_APP_SERVER_API_ENDPOINT);
    fetch(process.env.REACT_APP_SERVER_API_ENDPOINT + "user/updateUser", {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        correo_Electronico: this.state.email,
        nombre: this.state.nombre,
        Fecha_de_Nacimiento: this.state.Fecha_de_Nacimiento,
        sexo: this.state.sexo
      }),
    }).then(async response => {
      this.setState({ IsSubmitting: false })

      if (!response.ok) {
        if (response.status === 400) {
          this.setState({ error: "Please fill all the fields correctly!" })
          // console.log({ correo_Electronico: email, password })
        } else if (response.status === 401) {
          this.setState({ error: "Invalid email and password combination." })
        } else if (response.status === 402) {
          this.setState({ error: "User not verified, check email." })
        } else {
          this.setState({ error: genericErrorMessage })
        }
      } else {
        const data = await response.json()
        const cookies = new Cookies();
        let user = {
          "_id": data.user._id,
          "username": data.user.username,
          "createdAt": data.user.createdAt,
          "updatedAt": data.user.updatedAt,
          "Fecha_de_Nacimiento": data.user.Fecha_de_Nacimiento,
          "correo_Electronico": data.user.correo_Electronico,
          "nombre": data.user.nombre,
          "sexo": data.user.sexo
        }

        cookies.set("USER", user, {
          path: "/",
        });
        // navigate("/home");
        this.setState({ isUpdated: true })

      }
    }).catch(error => {
      this.setState({ error: genericErrorMessage })
      this.setState({ IsSubmitting: false })
      // setIsSubmitting(false)
      // setError(genericErrorMessage)
    })

  }

  render() {

    if(this.state.isUpdated){
      return (<Navigate to="/users/Perfil"></Navigate>)
    } else
    if (this.state.nombre) {
      return (
        <div class="principal">
          <Nav />
          <Container className="homeJuegos">
            {/* <nav= /> */}
            <div class="col-lg-6 col-md-8 col-sm-12" >
              <Container fluid className="pt-3 center-text">
                <Button
                  size="md"
                  style={{
                    backgroundColor: "#22201C",
                    border: "#22201C",
                  }}
                >
                  <img src={Usuario} width="80%" />
                </Button>

                <h1>Editar Cuenta</h1>
                {
                  this.state.error
                }
                <Form onSubmit={this.formSubmitHandler}>
                  <FormGroup row>
                    <Label for="Nombre" sm={12} md={2}>
                      Nombre
                    </Label>
                    <Col sm={12} md={8}>
                      <Input
                        id="Nombre"
                        name="Nombre Usuario"
                        placeholder="Nombre de usuario"
                        type="text"
                        value={this.state.nombre}
                        onChange={e => this.setState({ nombre: e.target.value })}
                      />
                    </Col>
                  </FormGroup>
                  <Row>
                    <Label for="Sexo" sm={12} md={2}>
                      Sexo
                    </Label>
                    <Col sm={12} md={2} lg={2}>
                      <Input id="Sexo" name="sexo" type="select">
                        <option>M</option>
                        <option>F</option>
                        <option>Indiferente</option>
                      </Input>
                    </Col>
                    <Label for="exampleDate" sm={12} md={3}>
                      Fecha de Nacimiento
                    </Label>
                    <Col sm={12} md={4} lg={3}>
                      <Input
                        id="exampleDate"
                        name="date"
                        placeholder="date placeholder"
                        type="date"
                      />
                    </Col>
                    <Col md={12}>
                      <div className="pt-3">
                        <Link to="/users/Perfil">
                          <Button
                            // className="col-5"
                            size="lg "
                            style={{
                              backgroundColor: "#22201C",
                              border: "#22201C",
                              // marginLeft: "15%",
                              // marginRight: "10%",
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
                            <p className="text-muted">
                              Evitar
                            </p>
                          </Button>

                        </Link>

                        {
                          this.state.IsSubmitting ? <Loader></Loader> : (<Button
                            type="submit"
                            // className="col-5"
                            // onClick={this.formSubmitHandler}
                            size="lg "
                            style={{
                              backgroundColor: "#22201C",
                              border: "#22201C",
                              // marginLeft: "-15%",
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
                            <p className="text-muted">
                              Guardar
                            </p>
                          </Button>)
                        }

                      </div>
                    </Col>
                    <Col>
                      <Button
                        type="submit"
                        style={{
                          backgroundColor: "#22201C",
                          marginTop: "2em",
                          // marginRight: "",
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
                    </Col>
                  </Row>
                  {/* <FormGroup row>
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
                  </FormGroup> */}
                </Form>
              </Container>
            </div>

          </Container>
        </div>
      );
    }
  }
}

export default EditarCuenta;
