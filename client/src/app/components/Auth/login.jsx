import { Button, FormGroup, Label, Input, FormFeedback } from "reactstrap"
import React, { useState, useContext } from 'react';
import { UserContext } from "../../../context/UserContext";
import loginService from "./../Auth/services/index";


export default function Login() {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [userContext, setUserContext] = useContext(UserContext)
    const [error, setError] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const formSubmitHandler = async event => {
        event.preventDefault()
        // const user = loginService.login({ username: email, password })
        // setUserContext(oldValues => {
        //     return { ...oldValues, token: data.token, user: user }
        // })

        setIsSubmitting(true)
        setError("")

        const genericErrorMessage = "Something went wrong! Please try again later."
        // console.log(process.env.REACT_APP_SERVER_API_ENDPOINT);
        fetch(process.env.REACT_APP_SERVER_API_ENDPOINT + "user/login", {
            method: "POST",
            credentials: "include",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username: email, password }),
        })
            .then(async response => {
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
                    console.log("retrieved dataaaaaa:")
                    console.log(data)
                    window.localStorage.setItem(
                        'loggedUser', JSON.stringify(data)
                    )
                    // localStorage.setItem('user', data.token)
                    setUserContext(oldValues => {
                        console.log(data.token)
                        return { ...oldValues, token: data.token }
                    })
                    // console.log(UserContext.token)
                }
            })
            .catch(error => {
                setIsSubmitting(false)
                setError(genericErrorMessage)
            })
    }

    return (
        <div>
            {error && < div class="container">
                < div class="alert alert-info" role="alert">
                    {error}
                </div>
            </div>}
            {/* {error && <Callout intent="danger">{error}</Callout>} */}
            <form onSubmit={formSubmitHandler} className="auth-form">
                <FormGroup>
                    <Label for="email">
                        Valid input
                    </Label>
                    
                    <Input id="email"
                        placeholder="Email"
                        type="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        required
                        valid />
                    <FormFeedback valid>
                        Sweet! that name is available
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
                        valid />
                    <FormFeedback valid>
                        Sweet! that name is available
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