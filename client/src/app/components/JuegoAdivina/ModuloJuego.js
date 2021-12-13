import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap';
import Cookies from 'universal-cookie';
import PalabrasJson from '../../pages/Juegos/Pantalla/data.json'
import ModuloImagen from './ModuloImagen';

class AdivinaLaPalabra extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //se necesita un valor por default, no quitar el estado inicial***
            Palabras: [{
                "_id": 1,
                "Palabra": "Hola",
                "Dificultad": "Facil",
                "Descripcion": "Imagen de Referencia",
                "Categoria": "Comida",
                "URL_Imagen": "https://i.ibb.co/fkL9HL5/se-a.png"
            }],
            TextoInput: "",
            Index: 0,
            IndexMax: 0,
            Correctos: [],
            Finalizar: false,
        }
        this.handlerInputOnChange = this.handlerInputOnChange.bind(this)
        this.handlerNext = this.handlerNext.bind(this)
        this.handlerEnd = this.handlerEnd.bind(this)
    }
    componentDidUpdate(prevProps, prevState) {
        if (!this.state.Finalizar) {

            if (this.state.Index == this.state.IndexMax - 1 && prevState.Finalizar == this.state.Finalizar) {
                this.setState({
                    Finalizar: true
                })
            }
        }
    }
    
    handlerEnd() {
        //comprobacion de ultima imagen antes de enviar datos
        var correctos = this.state.Correctos.length
        if (this.state.TextoInput.toLowerCase() == this.state.Palabras[this.state.Index].Palabra.toLowerCase()) {
            correctos++
        }
        //se pasan datos al padre para visualizacion de usuario
        var calificacion = (correctos * 10) / this.state.IndexMax
        this.props.changeWindow(correctos, this.state.IndexMax, calificacion)
        //se hacen los calculos referentes para el payload
        var Fecha = new Date().toLocaleDateString()
        var User = new Cookies().get('USER')
        var palabras = []
        this.state.Palabras.map(palabra=>{
            palabras.push(palabra._id)
        })
        //se construye el payload
        var payload = {
            "Fecha_de_Realizacion": Fecha,
            "Tipo_de_Actividad": "Memorama",
            "Dificultad": "Intermedio",
            "Calificacion": calificacion,
            "Nombre_Usuario": User.nombre,
            "Palabras": palabras
        }
        console.log(payload)

        //Queda pendiente la conexino a la API
    }
    handlerNext() {
        if (this.state.TextoInput.toLowerCase() == this.state.Palabras[this.state.Index].Palabra.toLowerCase()) {
            console.log(this.state.Palabras[this.state.Index].Palabra.toLowerCase())
            this.setState({
                Correctos: this.state.Correctos.concat(1)
            })
        }
        this.setState({
            Index: this.state.Index + 1,
            TextoInput: "",
        })
    }
    handlerInputOnChange(e) {
        this.setState({
            TextoInput: e.target.value,
        })
    }
    //Aqui se hara la suscripcion a la API
    componentDidMount() {
        this.setState({
            Palabras: PalabrasJson,
            IndexMax: PalabrasJson.length,
        })
    }
    render() {
        return (
            <ModuloImagen endActivity={this.handlerEnd} end={this.state.Finalizar} handlerNext={this.handlerNext} inputChange={this.handlerInputOnChange} Txt={this.state.TextoInput} Url_Imagen={this.state.Palabras[this.state.Index].URL_Imagen} />
        );
    }
}

export default AdivinaLaPalabra;