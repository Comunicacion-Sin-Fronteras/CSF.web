import '../../../components/JuegoAdivina/app.css';
import Nav from '../../Home/HomeRegistrado/Nav2';
import Test from './EncabezadoJuego';
import Int from './int';
import ModuloJuego from '../../../components/JuegoAdivina/ModuloJuego'
import React, { Component } from 'react'
import Finalizado from '../../../components/FinDeJuego/Finalizado';
import { Container } from 'reactstrap';

class Adivina extends Component {
  constructor(props) {
    super(props)
    this.state = {
      Terminado: false
    }
    this.handlderTerminar = this.handlderTerminar.bind(this)
  }
  handlderTerminar(correctas,palabras,calificacion) {
    this.setState({
      Terminado: true,
      Correctas: correctas,
      Max: palabras,
      Calificacion: calificacion,
    })
  }
  render() {
    return (
      <div>
        <Nav />
        <Test />
        <Container fluid>
          {this.state.Terminado? <Finalizado Calificacion={this.state.Calificacion} Correctos={this.state.Correctas} Max={this.state.Max}/> : <ModuloJuego changeWindow={this.handlderTerminar} />}

        </Container>
        
      </div>
    );
  }
}

export default Adivina;