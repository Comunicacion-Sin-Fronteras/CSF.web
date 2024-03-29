import React from 'react'
import { Link } from 'react-router-dom';
import { Container, ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText, Row, Col, Badge, Button } from 'reactstrap';
import Cookies from 'universal-cookie';


function Lista(props) {
    return (
        <Container fluid>
            <ListGroup flush>
                {props.Elementos.map((elemento, index) => {
                    return (
                        <Row key={index}>
                            <Col>
                                <ListGroupItem color={
                                    elemento.Calificacion <= 3
                                        ? "danger"
                                        : elemento.Calificacion > 3 && elemento.Calificacion < 7
                                            ? "warning"
                                            : "success"
                                }>
                                    <Row>

                                        <Col>
                                            <Row>
                                                <ListGroupItemHeading>
                                                    <Row>
                                                        <Col>
                                                            Actividad Realizada:
                                                            <Badge color="dark">
                                                                {elemento.Tipo_de_Actividad}
                                                            </Badge>
                                                        </Col>
                                                        <Col>
                                                            Calificacion: {elemento.Calificacion}
                                                        </Col>
                                                    </Row>
                                                </ListGroupItemHeading>
                                            </Row>
                                            <Row>
                                                <ListGroupItemText tag={Container} fluid>
                                                    <Row>
                                                        <Col>
                                                            Jugado el día: {new Date(elemento.Fecha_de_Realizacion).toLocaleDateString()}
                                                        </Col>
                                                        <Col>
                                                            Dificultad:
                                                            <Badge pill color={
                                                                elemento.Dificultad == "Fácil" ? "success"
                                                                    : elemento.Dificultad == "Dificil" ? "danger"
                                                                        : "warning"
                                                            }>
                                                                {elemento.Dificultad}
                                                            </Badge>
                                                        </Col>
                                                    </Row>
                                                </ListGroupItemText>
                                            </Row>
                                        </Col>
                                        <Col md={2}>
                                            <Row>
                                                <Button tag={Link} to="/users/Historial/Detalles" color="dark" outline onClick={(e) => handlerDetails(e, elemento)}>Detalles</Button>
                                            </Row>
                                        </Col>
                                    </Row>
                                </ListGroupItem>
                            </Col>
                        </Row>
                    )
                })}
            </ListGroup>
        </Container>
    );
}
const handlerDetails = (e, elemento) => {
    let cookie = new Cookies()
    if (cookie.get("actividad")) {
        cookie.remove("actividad")
    }
    console.log(elemento)
    cookie.set("actividad", elemento)
    console.log(cookie.get("actividad"))
}
export default Lista;