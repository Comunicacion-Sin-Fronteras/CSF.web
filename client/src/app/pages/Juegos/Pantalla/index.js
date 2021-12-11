import './app.css';
import Nav from './Nav';
import Test from './Test';
import Int from './int';
import {Card} from './Card';
import cd from './data';

function HomeNotLoggin() {
  return (
    <html>
<body className='bodyJuego'>
      <div>
        <Nav/>
        <Test/>
        <div className="divC">
        {cd.map(cd => (
          <Card classes="mr" key={`${cd.id}`}>
            <Card.Body>         
              <Card.Image src={cd.image} />
            </Card.Body>
          </Card>
        ))}
        </div>
        <Int/>
      </div>
    </body>
    </html>
  );
}

export default HomeNotLoggin;