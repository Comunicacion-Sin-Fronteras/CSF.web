import { Button, FormGroup, Label, Input, FormFeedback } from "reactstrap"
import React, { useState } from 'react';
import Cookies from "universal-cookie";
import { useNavigate  } from "react-router-dom";

export default function Login() {
    const navigate = useNavigate()
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [error, setError] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    
    const formSubmitHandler = async event => {
        event.preventDefault()
        setIsSubmitting(true)
        setError("")

        const genericErrorMessage = "Something went wrong! Please try again later."
        // console.log(process.env.REACT_APP_SERVER_API_ENDPOINT);
        fetch(process.env.REACT_APP_SERVER_API_ENDPOINT + "user/login", {
            method: "POST",
            credentials: "include",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ correo_Electronico: email, password }),
        }).then(async response => {
            setIsSubmitting(false)
            if (!response.ok) {
                if (response.status === 400) {
                    setError("Please fill all the fields correctly!")
                    // console.log({ correo_Electronico: email, password })
                } else if (response.status === 401) {
                    setError("Invalid email and password combination.")
                } else {
                    setError(genericErrorMessage)
                }
            } else {
                const data = await response.json()
                const cookies = new Cookies();
                cookies.set("TOKEN", data.token, {
                    path: "/",
                });
                cookies.set("REFRESHTOKEN", data.refreshToken, {
                    path: "/",
                });
                // this.props.history.push('/senia/list')
                //  console.log("setting new token:" + data.token)
                console.log("setting new token:" + cookies.get("TOKEN"))
                console.log("setting new rtoken:" + cookies.get("REFRESHTOKEN"))
                navigate("/senia/list");
            }
        }).catch(error => {
            setIsSubmitting(false)
            setError(genericErrorMessage)
        })
        
    }

    return (
        <div>
            {error && < div className="container">
                < div className="alert alert-info" role="alert">
                    {error}
                </div>
            </div>}
            {/* {error && <Callout intent="danger">{error}</Callout>} */}
            <form onSubmit={formSubmitHandler} className="auth-form">
                <FormGroup>
                    <Label for="email">
                        Correo Electronico:
                    </Label>
                    <Input id="email"
                        placeholder="Email"
                        type="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        required
                    />
                    <FormFeedback valid>
                        Correo Valido
                    </FormFeedback>
                </FormGroup>
                <FormGroup>
                    <Label for="password">
                        Valid input
                    </Label>
                    <Input id="password"
                        placeholder="Password"
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        required
                    />
                    <FormFeedback valid>
                        Password Correcta
                    </FormFeedback>
                </FormGroup>
                <Button
                    intent="primary"
                    value="submit"
                    disabled={isSubmitting}
                    text={`${isSubmitting ? "Signing In" : "Sign In"}`}
                    type="submit"
                >{`${isSubmitting ? "Signing In" : "Sign In"}`}</Button>
            </form>
        </div>

    )
}