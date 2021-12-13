import React, { Component } from 'react'
import { Button, Container, Row, Col, Badge } from "reactstrap"
import Nav from '../../Home/HomeRegistrado/Nav2'
import Elementos from '../../../components/Historial/Elementos'
import Cookies from 'universal-cookie'
import Detalles from '../../../components/Historial/Detalles'

function Historial(props) {
    const cookie = new Cookies()
    let user = cookie.get("USER")
    let name = ""
    if(user){
        name = cookie.get("USER").nombre
    }

    let actividad
    if(props.detallado){
        actividad = cookie.get("actividad")
    }else{
        actividad= null
        cookie.remove("actividad")
    }
        return (
            <>
                <Nav />
                <Container fluid>
                    <Row>
                        <Col>
                            {props.detallado?actividad?<h2>{"Tipo de Juego: "}<Badge color="dark">{actividad.Tipo_de_Actividad}</Badge></h2>:"Error":<h2>Historial de {name}</h2>}
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            {props.detallado?<Detalles actividad={actividad}></Detalles>:<Elementos User={name}/>}
                        </Col>
                    </Row>
                </Container>
            </>
        );
}

export default Historial;