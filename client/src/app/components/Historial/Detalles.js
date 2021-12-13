import React, { Component } from 'react'
import { Navigate } from 'react-router-dom';
import { Badge, Col, Container, Row } from 'reactstrap';
import Cookies from 'universal-cookie';
import apis from '../../../api';
import SeniaDetails from './SeniaDetails';

class Detalles extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Palabras: [],
        }
    }
    componentDidMount() {
        let User = new Cookies().get("User")
        if (User) {

            apis.getHistoryContent(User, this.props.actividad._id)
                .then((response) => {
                    console.log(response)
                    this.setState({
                        Palabras: response.data.data,
                    })
                })
                .catch((error) => {

                })
        }
    }
    render() {
        console.log(this.props)
        return (
            <>
                {this.props.actividad ?
                    <Container fluid>
                        <Row>
                            <Col align="left">
                                <h3>
                                    Calificación: <Badge color={
                                        this.props.actividad.Calificacion <= 3
                                            ? "danger"
                                            : this.props.actividad.Calificacion > 3 && this.props.actividad.Calificacion < 7
                                                ? "warning"
                                                : "success"
                                    }>
                                        {this.props.actividad.Calificacion}
                                    </Badge>
                                </h3>
                            </Col>
                            <Col md={5} align="right">
                                <h3>Fecha de Actividad: {new Date(this.props.actividad.Fecha_de_Realizacion).toLocaleDateString()}</h3>
                            </Col>
                        </Row>
                        <Row>
                            <Col align="left">
                                <h3>Dificultad <Badge pill color={
                                    this.props.actividad.Dificultad == "Fácil" ? "success"
                                        : this.props.actividad.Dificultad == "Dificil" ? "danger"
                                            : "warning"
                                }>
                                    {this.props.actividad.Dificultad}
                                </Badge>
                                </h3>
                            </Col>
                        </Row>
                        {this.state.Palabras.map(palabra => {
                            return (
                                <Container>
                                    <SeniaDetails id={palabra.Palabra} />
                                </Container>
                            )
                        })}
                    </Container>
                    : <Navigate to="/users/Historial"/>}
            </>
        );
    }
}

export default Detalles;