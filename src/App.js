import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav, Row, Col, Image, Button } from 'react-bootstrap';
import devlogo from './hero.png'

function App() {
  return (
    <div className='App bg-dark'>
      <header>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">
              <span class="h2 text-warning">Dx</span>
              <span class="h2 text-light">dev</span>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="m-auto text-uppercase text-warning text-center">
                <Nav.Link href="#home">home</Nav.Link>
                <Nav.Link href="#portfolio">portfolio</Nav.Link>
                <Nav.Link href="#experiences">experiences</Nav.Link>
              </Nav>
              <Nav>
                <Button variant="contained bg-primary text-light">Hire me!</Button>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
      <section>
        <Container>
          <Row className='pt-5 '>
            <Col>
              <Image src={devlogo} alt="logo" 
              fluid 
              rounded
              className='rounded mx-auto d-block'
              />
            </Col>
          </Row>
        </Container>
      </section>
      
    </div>
    
  );
}

export default App;