import './app.css';
import Nav from './Nav2';
import Test from './Test';
import {Card} from './Card';
import cd from './data';

function App2() {
  return (
    <main className="App2">
      <Nav/>
      <Test/>
      <div className="divC">
      {cd.map(movie => (
        <Card classes="mr" key={`${cd.id}`}>
          <Card.Body>
            <Card.Title>{cd.title}</Card.Title>
            <Card.Text>{cd.desc}</Card.Text>            
          </Card.Body>
        </Card>
      ))}
      </div>
    </main>
  );
}

export default App2;