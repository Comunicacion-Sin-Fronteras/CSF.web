import './Registrado.css';
import Nav from './Nav2';
import { Card } from './Card';
import cd from './data';
import { Button } from "reactstrap";
import Cookies from "universal-cookie";
import TitleLogo from './TitleLogo';
import { Navigate } from 'react-router-dom';

function HomeLoggin() {
  const cookies = new Cookies();
  let user = cookies.get("USER")
  if (user) {
    // user.nombre = 'roy';
    return (
      <html>
        <body className='bodyRegistrado'>
          <div>
            <Nav />
            <TitleLogo name={user.nombre} />
            <div className="divC">
              {cd.map(cd => (
                <Card classes="mr" key={`${cd.id}`}>
                  <Card.Body>
                    <Card.Title>{cd.title}</Card.Title>
                    <Card.Text>{cd.desc}</Card.Text>
                    <Button className="bc" href="https://www.conapred.org.mx/documentos_cedoc/DiccioSenas_ManosVoz_ACCSS.pdf">Conoce Más</Button>{' '}
                  </Card.Body>
                </Card>
              ))}
            </div>
          </div>
        </body>
      </html>
    );
  } else {
    return (
      <div>
        Ha ocurrido un error al obtener el usuario
        <Navigate to="/home"></Navigate>
      </div>
    )
  }

}

export default HomeLoggin;