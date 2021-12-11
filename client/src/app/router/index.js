import React from 'react'
import { NuevaContrasena, Registrarse, RecuperarContrasena, VerificarCorreo, EditarCuenta, Historial } from '../pages/Users'
import { BrowserRouter as Router, Link, Route, Routes, Navigate, Outlet } from 'react-router-dom'
import { SeniasList, SeniasInsert, SeniasUpdate } from '../pages/Senias'
import { NotFoundError } from '../pages/Errors/'
import { Container } from 'reactstrap';
import UserLogin from '../pages/Users/UserLogin';
import tokenService from '../components/Auth/services/tokenService';
import axios from 'axios';
import Cookies from "universal-cookie";
import HomeJuegos from '../pages/Juegos/HomeJuegos'
import HomeNotLoggin from '../pages/Home/HomeNoRegistrado'
import HomeLoggin from '../pages/Home/HomeRegistrado'

function AppRouting() {
    return (
        // <Container>
            <Router>
                <Routes>
                    <Route path="/auth/login" exact element={<UserLogin></UserLogin>} />
                    <Route path="/home" element={<PrivateRoute />}>
                        <Route path="/home/" element={<HomeLoggin/>} />
                    </Route>

                    <Route path="/senia" element={<PrivateRoute />}>
                        <Route path="/senia/create" element={<SeniasInsert />} />
                        <Route path="/senia/list" element={<SeniasList />} />
                        <Route path="/senia/update/:id" exact element={<SeniasUpdate />} />
                    </Route>
                    
                    <Route path="/users/NuevaContrasena" exact element={<NuevaContrasena />} />
                    <Route path="/users/RecuperarContrasena" exact element={<RecuperarContrasena />} />
                    <Route path="/users/Registrarse" exact element={<Registrarse />} />
                    <Route path="/users/VerificarCorreo" exact element={<VerificarCorreo />} />
                    {/* Remover linea 31 al final de las pruebas*/}
                    <Route path="/users/Historial" exact element={<Historial />} />
                    <Route path="/users/Historial/:User" exact element={<Historial/> }/>

                    <Route path="/users" element={<PrivateRoute />}>
                        <Route path="/users/EditarCuenta" exact element={<EditarCuenta />} />
                    </Route>
                    
                    <Route path="/juegos/Home" exact element={<HomeJuegos />} />
                    <Route
                        path="/senia/update/:id"
                        exact
                        element={<SeniasUpdate />}
                    />
                    <Route path="/" element={<HomeNotLoggin/>} />
                    <Route path="*" element={<NotFoundError />} />
                </Routes>
            </Router>
        //</Container>


    )
    // }

}

const PrivateRoute = () => {

    const cookies = new Cookies(); // determine if authorized, from context or however you're doing it
    const token = cookies.get("TOKEN");
    const refreshToken = cookies.get("REFRESHTOKEN");
    // const baseURL = process.env.REACT_APP_SERVER_API_ENDPOINT + "user/refreshToken"
    var isLogin = false;
    if (token) {
        var isLogin = true;
        if (refreshToken) {
            tokenService.refreshToken();
        } else {
            console.log("no se encontro refreshtoken")
        }
    } else {
        console.log("no se encontraron tokens")
        // return <Navigate to="/auth/login" />
        isLogin = false;
        // return false;
    }
    // console.log(isLogin)

    // return (<div><Outlet/></div>);

    // return(<div>loading</div>)
    // if(auth){
    //     console.log("verified user")
    // } else {
    //     console.log("not verified user")

    // }
    // // If authorized, return an outlet that will render child elements
    // // If not, return element that will navigate to login page
    return isLogin ? <Outlet /> : <Navigate to="/auth/login" />;
}
export default AppRouting