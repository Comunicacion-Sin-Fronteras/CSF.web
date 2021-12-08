import axios from 'axios';
import Cookies from "universal-cookie";

// const baseURL = 'localhost:3001/api/login'
const baseURL = process.env.REACT_APP_SERVER_API_ENDPOINT + "user/refreshToken"

const refreshToken = async () => {
    const cookies = new Cookies(); 
    const refreshToken = cookies.get("REFRESHTOKEN");

    if(refreshToken){
        // console.log(`"trying to get new token" ${refreshToken}`)
        axios.post(baseURL, { refreshToken }).then(function (response) {
            const data = response.data
            cookies.set("TOKEN", data.token, {
                path: "/",
            });cookies.set("REFRESHTOKEN", data.refreshToken, {
                path: "/",
            });
            // console.log("Token verificado y acutalizado. going to outlet, REFRESHTOKEN stted: ")
            // console.log(data.token)
        }).catch(function (error) {
            // console.log("el token no a sido verificado y acutalizado: ")
            console.log(error);
        });
    }
}

export default { refreshToken };