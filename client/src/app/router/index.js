import React from 'react'
import { NuevaContrasena, RecuperarContrasena, VerificarCorreo, EditarCuenta, Historial } from '../pages/Users'
import { BrowserRouter as Router, Route, Routes, Navigate, Outlet } from 'react-router-dom'
import { SeniasList, SeniasInsert, SeniasUpdate } from '../pages/Senias'
import { NotFoundError } from '../pages/Errors/'
// import { Container } from 'reactstrap';
import UserLogin from '../pages/Users/UserLogin';
import tokenService from '../components/Auth/services/tokenService';
// import axios from 'axios';
import Cookies from "universal-cookie";
import HomeJuegos from '../pages/Juegos/HomeJuegos'
import Adivina from '../pages/Juegos/Pantalla/index'
import HomeNotLoggin from '../pages/Home/HomeNoRegistrado'
import HomeLoggin from '../pages/Home/HomeRegistrado'
import Perfil from '../pages/Users/Perfil'

function AppRouting() {
    return (
        // <Container>
        <Router>
            <Routes>
                <Route path="/auth/login" element={<NotLogginRequieredRoute />}>
                    <Route path="/auth/login" exact element={<UserLogin></UserLogin>} />
                </Route>
                <Route path="/home" element={<PrivateRoute />}>
                    <Route path="/home/" element={<HomeLoggin />} />
                </Route>

                <Route path="/senia" element={<PrivateRoute />}>
                    <Route path="/senia/create" element={<SeniasInsert />} />
                    <Route path="/senia/list" element={<SeniasList />} />
                    <Route path="/senia/update/:id" exact element={<SeniasUpdate />} />
                </Route>

                <Route path="/users" element={<NotLogginRequieredRoute />}>
                    <Route path="/users/Registrarse" exact element={<UserLogin isSignUp={true} />} />
                    <Route path="/users/VerificarCorreo" exact element={<VerificarCorreo />} />
                </Route>
                <Route path="/users" element={<PrivateRoute />}>
                    <Route path="/users/Historial" exact element={<Historial detallado={false} />} />
                    <Route path="/users/Historial/Detalles" exact element={<Historial detallado={true} />} />
                </Route>
                <Route path="/users/NuevaContrasena" exact element={<NuevaContrasena />} />
                <Route path="/users/RecuperarContrasena" exact element={<RecuperarContrasena />} />

                <Route path="/users" element={<PrivateRoute />}>
                    <Route path="/users/EditarCuenta" exact element={<EditarCuenta />} />
                    <Route path="/users/Perfil" exact element={<Perfil />} />
                </Route>

                <Route path="/juegos/Home" exact element={<HomeJuegos />} />
                <Route path="/juegos/Adivina" exact element={<Adivina />} />
                <Route
                    path="/senia/update/:id"
                    exact
                    element={<SeniasUpdate />}
                />
                <Route path="/" element={<NotLogginRequieredRoute />}>
                {/* used as transfer */}
                    <Route path="/" element={<HomeNotLoggin />} />
                </Route>
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
        isLogin = true;
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

    // // If authorized, return an outlet that will render child elements
    // // If not, return element that will navigate to login page
    return isLogin ? <Outlet /> : <Navigate to="/auth/login" />;
}

const NotLogginRequieredRoute = () => {

    const cookies = new Cookies(); // determine if authorized, from context or however you're doing it
    const token = cookies.get("TOKEN");
    const refreshToken = cookies.get("REFRESHTOKEN");
    // const baseURL = process.env.REACT_APP_SERVER_API_ENDPOINT + "user/refreshToken"
    var isLogin = false;
    if (token) {
        isLogin = true;
        if (refreshToken) {
            tokenService.refreshToken();
        } else {
            console.log("no se encontro refreshtoken")
        }
    } else {
        // console.log("no se encontraron tokens")
        // return <Navigate to="/auth/login" />
        isLogin = false;
        // return false;
    }

    // // If authorized, return an outlet that will render child elements
    // // If not, return element that will navigate to login page
    return !isLogin ? <Outlet /> : <Navigate to="/home" />;
}
export default AppRouting
