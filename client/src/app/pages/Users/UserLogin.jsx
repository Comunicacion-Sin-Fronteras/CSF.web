import React, { Component } from 'react';
import { Button } from 'reactstrap';
import Login from '../../components/Auth/login';
import Registrarse from './Registrarse';

class UserLogin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            loginscreen: [],
            loginmessage: '',
            buttonLabel: 'Registro',
            isLogin: true
        }
        // var userLogin = [];

    }
    componentWillMount() {
        var userLogin = [];
        userLogin.push(<Login parentContext={this} key="loginmount" appContext={this.props.parentContext} />);
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
            loginmessage = "Already registered.Go to Login";
            this.setState({
                userLogin: userLogin,
                loginmessage: loginmessage,
                buttonLabel: "Login",
                isLogin: false
            })
        }
        else {
            var userLogin = [];
            userLogin.push(<Login parentContext={this} key="login"  />);
            loginmessage = "Not Registered yet.Go to registration";
            this.setState({
                userLogin: userLogin,
                loginmessage: loginmessage,
                buttonLabel: "Register",
                isLogin: true
            })
        }
    }

    render() {
        return (
            <div className="UserLogin">
                {this.state.userLogin}
                <div>
                    {this.state.loginmessage}
                    <div>
                        <Button onClick={(event) => this.handleClick(event)}>
                            {this.state.buttonLabel}
                        </Button>
                    </div>
                </div>
            </div>
        );
    }
}

export default UserLogin;