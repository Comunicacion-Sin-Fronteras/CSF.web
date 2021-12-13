import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap';
import PalabrasJson from '../../pages/Juegos/Pantalla/data.json'
import ModuloImagen from './ModuloImagen';

class AdivinaLaPalabra extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //se necesita un valor por default ***
            Palabras: [{
                "id": 1,
                "Palabra": "Hola",
                "Dificultad": "Facil",
                "Descripcion": "Imagen de Referencia",
                "Categoria": "Comida",
                "URL_Imagen": "https://i.ibb.co/fkL9HL5/se-a.png"
            }],
            TextoInput: "",
            Index: 0,
            Correctos:[],
        }
        this.handlerInputOnChange = this.handlerInputOnChange.bind(this)
        this.handlerNext = this.handlerNext.bind(this)
    }
    handlerNext(){
        
        if(this.state.TextoInput.toLowerCase()==this.state.Palabras[this.state.Index].Palabra.toLowerCase()){
            console.log(this.state.Palabras[this.state.Index].Palabra.toLowerCase())
            this.setState({
                TextoInput:"",
            })
        }
        this.setState({
            Index: this.state.Index+1,
        })
    }
    handlerInputOnChange(e){
        this.setState({
            TextoInput: e.target.value,
        })
    }
    componentDidMount() {
        //Aqui se hara la suscripcion a la API
        this.setState({
            Palabras: PalabrasJson,
            IndexMax: PalabrasJson.length,
        })
    }
    render() {
        return (
            <ModuloImagen handlerNext={this.handlerNext} inputChange={this.handlerInputOnChange} Txt={this.state.TextoInput} Url_Imagen={this.state.Palabras[this.state.Index].URL_Imagen} />
        );
    }
}

export default AdivinaLaPalabra;