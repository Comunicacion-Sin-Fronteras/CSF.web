// import logo from './logo.svg';
import './app.css';
import AppRouting from './router';
// require("dotenv").config()
const BASE_URL = process.env.REACT_APP_SERVER_API_ENDPOINT;

function App() {
  return (
    <main className="App">
      <AppRouting></AppRouting>
      <p>
        COMUNICACIÓN SIN FRONTERAS
      </p>
      <p>CONFIG: {BASE_URL}</p>
    </main>
  );
}

export default App;
