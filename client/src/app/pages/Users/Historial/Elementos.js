import React, { Component } from 'react'
import { Container } from 'reactstrap';
import apis from '../../../../api';

class Elementos extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            User: "David",
        }
    }
    componentDidMount() {
        const payload = {"Nombre_Usuario": this.state.User}
        console.log(payload)
        fetch('http://localhost:3000/api/activities',{
            body: JSON.stringify(payload)})
        .then(response=>{
            console.log(response)
        })

    }
    render() { 
        return ( 
            <Container>

            </Container>
         );
    }
}
 
export default Elementos;