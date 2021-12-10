import React, { Component } from 'react'
import { Button, Container, Row, Col } from "reactstrap"
import Nav from '../../Home/HomeRegistrado/Nav2'
import Elementos from './Elementos'

class Historial extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        return (
            <>
                <Nav />
                <Container>
                    <Elementos/>
                </Container>
            </>
        );
    }
}

export default Historial;