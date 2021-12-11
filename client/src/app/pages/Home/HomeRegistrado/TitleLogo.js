import React from "react";
import gif from './gif.gif';
import './Registrado.css';
// reactstrap components
import { Row, Col, UncontrolledTooltip } from "reactstrap";

const style = { width: "300px" };

function TitleLogo({ name }) {

    var myDate = new Date();
    var hrs = myDate.getHours();

    var greet;

    if (hrs < 12 && hrs > 5)
        greet = 'Buen día';
    else if (hrs >= 12 && hrs <= 17)
        greet = 'Buenas tardes';
    else if (hrs >= 17 && hrs <= 24)
        greet = 'Buena noche';
    else if (hrs < 12)
        greet = 'Con que madrugando';

    return (
        <>
            <div className="divG">
                <Row className=" mt">
                    <p className="titulo">¡{greet}!, {name}</p>
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

export default TitleLogo;