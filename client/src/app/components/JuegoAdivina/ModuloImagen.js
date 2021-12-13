import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Card } from './Card';
import styled from "styled-components";

const Input = styled.input`
  font-size: 18px;
  padding: 10px;
  background: papayawhip;
  border: none;
  border-radius: 16px;
  ::placeholder {
    color: palevioletred;
  }
`;


function Imagen(props) {
    return (
        <Container>
            <Row>
                <Col>
                    <Card classes="mr">
                        <Card.Body>
                            <Card.Image src={props.Url_Imagen} />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col>
                <Row>
                    <Col>
                    <Input type="text" placeholder="Respuesta" value={props.Txt} onChange={props.inputChange}/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <button className="button" onClick={props.handlerNext}><span>Siguiente</span></button>
                    </Col>
                </Row>
                </Col>
            </Row>
        </Container>
    );
}

export default Imagen;