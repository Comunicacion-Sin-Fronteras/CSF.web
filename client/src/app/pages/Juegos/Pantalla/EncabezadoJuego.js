import React from "react";
import gif from './gif.gif';
import '../../../components/JuegoAdivina/app.css';
// reactstrap components
import { Row, Col, UncontrolledTooltip } from "reactstrap";

const style = { width: "300px" };

function Example() {
  return (
    <>
    <div className = "divG">
        <Row className=" mt">
            <p className="TituloJuego">¿Qué palabra es?</p>
        </Row>
    </div>
    </>
  );
}

export default Example;