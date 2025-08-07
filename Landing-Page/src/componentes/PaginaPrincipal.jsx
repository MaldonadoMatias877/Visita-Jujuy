import { Container, Card } from 'react-bootstrap';
import '../estilos/PaginaPrincipal.css';
import yungasImg from '../assets/Yungas.jpg';
import jujuyImg from '../assets/Jujuy.jpg';
//import quebradaImg from '../assets/Quebrada.jpg';
import punaImg from '../assets/Puna.jpg';
import vallesImg from '../assets/Valles.jpg';

function PaginaPrincipal() {
  return (
    <Container fluid className="fondo-jujuy">
      <div className="contenedor-cards">
        <div className="card-col">
          <Card className="card-container">
            <Card.Img variant="top" src={yungasImg} />
            <Card.Body>
              <Card.Title>Yungas</Card.Title>
            </Card.Body>
          </Card>
        </div>

        <div className="card-col">
          <Card className="card-container">
            <Card.Img variant="top" src={jujuyImg}/>
            <Card.Body>
              <Card.Title>Quebrada</Card.Title>
            </Card.Body>
          </Card>
        </div>

        <div className="card-col">
          <Card className="card-container">
            <Card.Img variant="top" src={punaImg}/>
            <Card.Body>
              <Card.Title>Puna</Card.Title>
            </Card.Body>
          </Card>
        </div>

        <div className="card-col">
          <Card className="card-container">
            <Card.Img variant="top" src={vallesImg}/>
            <Card.Body>
              <Card.Title>Valles</Card.Title>
            </Card.Body>
          </Card>
        </div>
      </div>
    </Container>
  );
}

export default PaginaPrincipal;
