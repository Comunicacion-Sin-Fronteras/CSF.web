import React, { Component } from 'react'
import { Badge, Col, Container, Row } from 'reactstrap';
import apis from '../../../api';

class SeniaDetails extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            Seña: "",
         }
    }
    componentDidMount() {
        apis.getSeniaById(this.props.id)
        .then(response=>{
            console.log(response.data.data);
            this.setState({
                Seña: response.data.data
            })
        })
    }
    render() { 
        return ( 
            <Container>
                <Row>
                    <Col>
                        <img src={this.state.Seña.URL_Imagen}/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Badge color="dark">
                            {this.state.Seña.Palabra}
                        </Badge>
                    </Col>
                    <Col>
                        Dificultad: <Badge>
                            {this.state.Seña.Dificultad}
                        </Badge>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        Categoria: {this.state.Seña.Categoria}
                    </Col>
                </Row>
                <Row>
                    <Col>
                        Resumen: {this.state.Seña.Descripcion}
                    </Col>
                </Row>
            </Container>
         );
    }
}
 
export default SeniaDetails;