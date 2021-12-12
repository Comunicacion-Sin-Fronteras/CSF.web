import React, { Component } from 'react'
import { Col, Container, Row } from 'reactstrap';
import apis from '../../../api';
import Lista from './Lista';

class Elementos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            HistoryElements: [],
        }
    }
    componentDidMount() {
        const payload = { "Nombre_Usuario": this.props.User }
        console.log(JSON.stringify(payload))
        apis.getHistory(payload)
            .then(response => {
                return response.data.success && response.status == 200 ? response.data.data : response.status
            })
            .then(data => {
                if (data.length != 0 && data != 204) {
                    this.setState({
                        HistoryElements: data
                    })
                }
                console.log(data)
            })

    }
    render() {
        return (
            <Container fluid>
                <Row>
                    <Col>
                        {this.state.HistoryElements.length == 0 ? <h2>Aun no hay Actividades para mostrar</h2> : <Lista Elementos={this.state.HistoryElements} User={this.props.User} />}
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Elementos;