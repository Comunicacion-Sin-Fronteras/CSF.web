import React from "react";
import gif from './gif.gif';
import './app.css';
// reactstrap components
import { Row, Col, UncontrolledTooltip } from "reactstrap";

const style = { width: "300px" };

function Example() {
  return (
    <>
    <div className = "divG">
        <Row className=" mt">
            <p className="TituloJuego">Juego Terminado</p>
        </Row>
        <form>
            <button className="button" tag={Link} to="/juegos/Home"><span>Volver a los Juegos</span></button>
      </form>
    </div>
    </>
  );
}

export default Example;