import React from "react";
import gif from './gif.gif';
import './NoRegistrado.css';
// reactstrap components
import { Row, Col, UncontrolledTooltip } from "reactstrap";

const style = { width: "300px" };

function Example() {
  return (
    <>
    <div className = "divG">
        <Row className=" mt">
            <p className="titulo">Bienvenido</p>
            <Col sm="12" xs="3">
                <a className=" avatar avatar-xs rounded-circle">
                    <img
                        alt="..."
                        src={gif}
                        style={style}
                    ></img>
                </a>
            </Col>
        </Row>
    </div>
    </>
  );
}

export default Example;