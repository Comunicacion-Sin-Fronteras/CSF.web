import './Registrado.css';
import Nav from './Nav2';
import Test from './TitleLogo';
import {Card} from './Card';
import cd from './data';
import { Button } from "reactstrap";
import Cookies from "universal-cookie";
import TitleLogo from './TitleLogo';

function HomeNotLoggin() {
  const cookies = new Cookies();
  let user = cookies.get("USER")
  // user.nombre = 'roy';
  return (
    <html>
      <body className='bodyRegistrado'>
        <div>
          <Nav/>
          <TitleLogo name={user.nombre}/>
          <div className="divC">
            {cd.map(cd => (
              <Card classes="mr" key={`${cd.id}`}>
                <Card.Body>
                  <Card.Title>{cd.title}</Card.Title>
                  <Card.Text>{cd.desc}</Card.Text>            
                  <Button className="bc" href = "https://www.conapred.org.mx/documentos_cedoc/DiccioSenas_ManosVoz_ACCSS.pdf">Conoce Más</Button>{' '}
                </Card.Body>
              </Card>
            ))}
          </div>
        </div>
      </body>
    </html>
  );
}

export default HomeNotLoggin;