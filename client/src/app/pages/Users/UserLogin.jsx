import React, { Component } from 'react';
import { Button } from 'reactstrap';
import Login from '../../components/Auth/login';

class UserLogin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            loginscreen: [],
            loginmessage: '',
            buttonLabel: 'Register',
            isLogin: true
        }
    }
    componentWillMount() {
        var userLogin = [];
        userLogin.push(<Login parentContext={this} appContext={this.props.parentContext} />);
        var loginmessage = "Not registered yet, Register Now";
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
            // userLogin.push(<Register parentContext={this} />);
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
            userLogin.push(<Login parentContext={this} />);
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
const style = {
    margin: 15,
};
export default UserLogin;