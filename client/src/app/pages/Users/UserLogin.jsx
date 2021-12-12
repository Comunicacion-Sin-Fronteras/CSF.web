import React, { Component } from 'react';
import { Button } from 'reactstrap';
import Login from '../../components/Auth/login';
import Registrarse from './Registrarse';
import Logotipo_Dark from "../../img/Logotipo_Dark.png";
import "./PantallasUsuario.css";
import { Link } from "react-router-dom";


class UserLogin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            loginscreen: [],
            loginmessage: '',
            buttonLabel: 'Iniciar Sesión',
            isLogin: true,
            signupMessage: 'Registro',
            LoginMessage: 'Iniciar Sesión',
        }
        // var userLogin = [];

    }
    componentWillMount() {
        var userLogin = [];
        if (this.props.isSignUp) {
            this.setState({
                buttonLabel: 'Registro',
                isLogin: false,
            })
            userLogin.push(<Registrarse parentContext={this} />);
        } else {
            if (this.props.message)
                userLogin.push(<Login parentContext={this} key="loginmount" appContext={this.props.parentContext} />);
            else
                userLogin.push(<Login parentContext={this} key="loginmount" appContext={this.props.parentContext} />);
        }
        var loginmessage = "Crea tu cuenta";
        this.setState({
            userLogin: userLogin,
            loginmessage: loginmessage
        })
    }
    handleClick(event) {
        // console.log("event",event);
        var loginmessage;
        if (this.state.isLogin) {
            var userLogin = [];
            userLogin.push(<Registrarse parentContext={this} />);
            loginmessage = "Crea tu cuenta";
            this.setState({
                userLogin: userLogin,
                loginmessage: loginmessage,
                buttonLabel: "Registro",
                isLogin: false
            })
        }
        else {
            var userLogin = [];
            userLogin.push(<Login parentContext={this} key="login" />);
            loginmessage = "Inicia Sesión";
            this.setState({
                userLogin: userLogin,
                loginmessage: loginmessage,
                buttonLabel: "Iniciar Sesión",
                isLogin: true
            })
        }
    }

    render() {
        return (
            <div className="principal">
                <div className="container">
                    <div className="logo">
                        <img src={Logotipo_Dark} width="240px" />
                    </div>
                    <div className="formulario">
                        <h1>{this.state.buttonLabel}</h1>
                        <div className="UserLogin">
                            {this.state.userLogin}
                            <div style={{ color: "white" }}>
                                {this.state.loginmessage}
                                <div>
                                    <Button
                                        style={{
                                            backgroundColor: "transparent",
                                            border: "none",
                                        }}
                                        onClick={(event) => this.handleClick(event)}>
                                        o bien &nbsp;
                                        <b>
                                            {this.state.buttonLabel == this.state.LoginMessage ? this.state.signupMessage : this.state.LoginMessage}

                                        </b>
                                        {/* {this.state.buttonLabel} */}
                                    </Button>
                                </div>
                            </div>
                            <div className="Regresar">
                                <Link to="/">
                                    <Button
                                        type="submit"
                                        style={{
                                            backgroundColor: "#22201C",
                                            border: "#22201C",
                                            paddingTop: "5vh"
                                        }}
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="60"
                                            height="60"
                                            fill="currentColor"
                                            className="bi bi-arrow-counterclockwise text-warning "
                                            viewBox="0 0 16 16"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2v1z"
                                            />
                                            <path d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466z" />
                                        </svg>
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        );
    }
}

export default UserLogin;