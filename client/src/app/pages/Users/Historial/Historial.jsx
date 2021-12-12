import React, { Component } from 'react'
import { Button, Container, Row, Col } from "reactstrap"
import Nav from '../../Home/HomeRegistrado/Nav2'
import Elementos from './Elementos'
import {useParams} from 'react-router-dom'

function Historial(props) {
    let {User} = useParams()
        return (
            <>
                <Nav />
                <Container fluid>
                    <Row>
                        <Col>
                            <h2>Historial de {User}</h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Elementos User={User}/>
                        </Col>
                    </Row>
                </Container>
            </>
        );
}

export default Historial;