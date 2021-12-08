import axios from 'axios';
import Cookies from "universal-cookie";

// const baseURL = 'localhost:3001/api/login'
const baseURL = process.env.REACT_APP_SERVER_API_ENDPOINT + "user/login"
const login = async credentials => {
    const cookies = new Cookies(); // determine if authorized, from context or however you're doing it
    const auth = cookies.get("TOKEN");

    if (auth) {
        const { data } = await axios.post(baseURL, credentials);
        return data;
    } else {
        return null;
    }

}

export default { login };