import React from "react";
import './app.css';
import { Row, Col, UncontrolledTooltip, Button, Container, Badge } from "reactstrap";
import { Link } from "react-router-dom";

const style = { width: "300px" };

function Finalizado(props) {
  return (
    <>
      <div className="divG">
        <Row>
          <Col>
            <h2>Juego Terminado</h2>
            <h2>Obtuviste un total de {props.Correctos} correctas de un total de {props.Max} palabras</h2>
          </Col>
        </Row>
        <Row className=" mt">
          <Col>
            <h2>Calificación: <Badge color={
              props.Calificacion<=5
              ?"danger"
              :props.Calificacion>=8
              ?"success"
              :"warning"
            }>
              {props.Calificacion}
            </Badge>
            </h2>
          </Col>
        </Row>
        <Row>
          <Col align="center">
          <Button tag={Link} to="/juegos/Home" color="warning"><span>Volver a los Juegos</span></Button>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Finalizado;