import React, { useCallback, useEffect, useState, useContext } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { SeniasList, SeniasInsert, SeniasUpdate } from '../pages/Senias'
import { NotFoundError } from '../pages/Errors/'
import Login from '../components/Auth/login';
import Loader from '../components/Loader';
import 'bootstrap/dist/css/bootstrap.min.css'
import { UserContext } from '../../context/UserContext';

function AppRouting() {
    const [token, setToken] = useState();
    const [isLoading, setLoading] = useState();
    const [userContext, setUserContext] = useContext(UserContext)

    const verifyUser = useCallback(() => {
        fetch(process.env.REACT_APP_SERVER_API_ENDPOINT + "user/refreshToken", {
            method: "POST",
            credentials: "include",
            headers: { "Content-Type": "application/json" },
        }).then(async response => {
            if (response.ok) {
                const data = await response.json()
                setUserContext(oldValues => {
                    return { ...oldValues, token: data.token }
                })
            } else {
                setUserContext(oldValues => {
                    return { ...oldValues, token: null }
                })
            }
            // call refreshToken every 5 minutes to renew the authentication token.
            setTimeout(verifyUser, 5 * 60 * 1000)
        })
    }, [setUserContext])

    useEffect(() => {
        const loggedInUser = window.localStorage.getItem("loggedUser");
        // const refreshtoken = localStorage.getItem("refreshToken");
        if (loggedInUser) {
            const user = JSON.parse(loggedInUser);
            setToken({ token: "1234" });

            console.log("user stted:")
            console.log(token)
            verifyUser()
        }
    }, [verifyUser])


    if (!token) {
        return (
            <div>
                Credentials needed!
                <Login setToken={setToken} />
            </div>
        )
    } else if (isLoading) {
        <Loader />
    } else {
        return (
            <Router>
                <Routes>
                    <Route path="/senia/list" exact element={<SeniasList />} />
                    <Route path="/senia/create" exact element={<SeniasInsert />} />
                    <Route
                        path="/senia/update/:id"
                        exact
                        element={<SeniasUpdate />}
                    />
                    <Route path="/" element={<div>Home</div>} />
                    <Route path="*" element={<NotFoundError />} />
                </Routes>
            </Router>
        )
    }

}

export default AppRouting