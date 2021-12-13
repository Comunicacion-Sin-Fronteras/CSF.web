import '../../../components/JuegoAdivina/app.css';
import Nav from '../../Home/HomeRegistrado/Nav2';
import Test from './EncabezadoJuego';
import Int from './int';
import ModuloJuego from '../../../components/JuegoAdivina/ModuloJuego'


function Adivina() {
  // const [isSubmitting, setIsSubmitting] = useState(false)
  // const [game, setGame] = useState(false)
  // const [error, setError] = useState("")


  // const loadGame = async event => {
  //   event.preventDefault()
  //   setIsSubmitting(true)
  //   setError("")

  //   const genericErrorMessage = "Something went wrong! Please try again later."
  //   const dificultad = "hard"
  //   // console.log(process.env.REACT_APP_SERVER_API_ENDPOINT);
  //   fetch(process.env.REACT_APP_SERVER_API_ENDPOINT + `game/${dificultad}`, {
  //       method: "POST",
  //       credentials: "include",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify({ correo_Electronico: email, password }),
  //   }).then(async response => {
  //       setIsSubmitting(false)
  //       if (!response.ok) {
  //           if (response.status === 400) {
  //               setError("Please fill all the fields correctly!")
  //               // console.log({ correo_Electronico: email, password })
  //           } else if (response.status === 401) {
  //               setError("Invalid email and password combination.")
  //           } else {
  //               setError(genericErrorMessage)
  //           }
  //       } else {
  //           const data = await response.json()
  //           // this.props.history.push('/senia/list')
  //           //  console.log("setting new token:" + data.token)
  //           console.log("setting new token:" + cookies.get("TOKEN"))
  //           console.log("setting new rtoken:" + cookies.get("REFRESHTOKEN"))
  //           console.log("user stted:" )
  //           console.log(cookies.get("USER"))
  //           navigate("/home");
  //       }
  //   }).catch(error => {
  //       setIsSubmitting(false)
  //       setError(genericErrorMessage)
  //   })

// }
  return (
        <div>
          <Nav />
          <Test />
          <div className="divC">
            <ModuloJuego/>
          </div>
        </div>
  );
}

export default Adivina;