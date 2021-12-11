import './NoRegistrado.css';
import Nav from './Nav';
import Test from './Test';
import {Card} from './Card';
import cd from './data';
import { Button } from "reactstrap";

function HomeNotLoggin() {
  return (
    <html>
      <body className='bodyNoRegistrado'>
        <div>
          <Nav/>
          <Test/>
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