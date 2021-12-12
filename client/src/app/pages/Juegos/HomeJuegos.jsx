import React, { Component } from "react";
import {Container, Row, Col} from 'reactstrap';
import './PantallasJuego.css';
import Adivina from "../../img/juegos/Adivina.PNG";
import Memorama from "../../img/juegos/Memorama.PNG";
import Regresar from './Regresar.PNG';
import Play from './Play.PNG';
import { Link } from 'react-router-dom';
import Nav from '../Home/HomeRegistrado/Nav2.js'

class HomeJuegos extends Component {
    render() {
        return (
           <>
               <main class="homeJuegos">
               <Container fluid> 
                    <Nav />
                    <br /> <br />
                    <Row>
                        <Col>
                            <h1> Juegos </h1>
                        </Col>
                    </Row>
                    
                    <br /> <br /> 

                    <Row>
                        <Col>
                            <img src={Memorama} width="200"/> 
                        </Col>
                        <Col>
                            <img src={Adivina} width="200"/> 
                        </Col>
                    </Row>

                    <br /> 
                    <Row>
                        <Col>
                            <Link to="/">
                                <img src={Play} width="50"/> 
                            </Link>
                        </Col>
                        <Col>
                            <Link to="/juegos/Adivina">
                                <img src={Play} width="50"/> 
                            </Link>
                        </Col>
                    </Row>

                    <br /> <br /> <br /> <br /> <br />
                    <Row>
                        <Col>
                            <Link to="/">
                                <img src={Regresar} align="left" width="35" paddin-bottom="300px" /> 
                            </Link>
                        </Col>
                    </Row>
                </ Container>
                </main> 
           </>
        );
    }
}

export default HomeJuegos;