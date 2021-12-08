import React, { Component } from "react";
import './PantallasJuego.css';
import Logotipo_Dark_Animated from "../../img/animated/Logotipo_Dark_Animated.gif";
import Adivina from "../../img/juegos/Adivina.PNG";
import Memorama from "../../img/juegos/Memorama.PNG";
import {Button} from 'reactstrap';

class HomeJuegos extends Component {
    render() {
        return (
            <div class="principal">
                <div class="container">
                    <div class="logo">
                        <h1>
                            <p id="juego" align="center">    
                                Juegos 
                                <img src={Logotipo_Dark_Animated} width="150px" align="right" />
                            </p>
                        </h1>
                        <div class="boxes">
                            <div class="memorama">
                                <img src={Memorama} width="300px" align="left"/> 
                                <div>
                            <Button
                                type="submit"
                                onClick=" "
                                size="lg"
                                style={{
                                backgroundColor: "#22201C",
                                border: "#22201C",
                                marginTop: "35px",
                                }}
                            >
                                <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="60"
                                height="60"
                                fill="currentColor"
                                class="bi bi-play-circle text-warning"
                                viewBox="0 0 16 16"
                                >
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z" />
                                </svg>
                            </Button>
                            </div>
                            </div>
                            <div class="adivina">
                                <img src={Adivina} width="300px"/>
                            </div>
                            
                            <div>
                            <Button
                                type="submit"
                                onClick=" "
                                size="lg"
                                style={{
                                backgroundColor: "#22201C",
                                border: "#22201C",
                                marginTop: "35px",
                                }}
                            >
                                <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="60"
                                height="60"
                                fill="currentColor"
                                class="bi bi-play-circle text-warning"
                                viewBox="0 0 16 16"
                                >
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z" />
                                </svg>
                            </Button>
                            </div>
                        </div>
                    </div>
                    
                    

                    <div class="Regresar">
                        <Button
                        type="submit"
                        onClick=" "
                        style={{
                            backgroundColor: "#22201C",
                            marginTop: "2em",
                            marginRight: "65em",
                            border: "#22201C",
                        }}
                        >
                        <svg
                            xmlns="../../index.js"
                            width="60"
                            height="60"
                            fill="currentColor"
                            class="bi bi-arrow-counterclockwise text-warning "
                            viewBox="0 0 16 16"
                        >
                            <path
                            fill-rule="evenodd"
                            d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2v1z"
                            />
                            <path d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466z" />
                        </svg>
                        </Button>
                    </div>
                </div>
            </div>
        );
    }
}

export default HomeJuegos;