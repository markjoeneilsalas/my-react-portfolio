import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';


function TypesExample() {
  return (
    <div className='App' bg="dark" variant="dark">
      <header>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          <span class="h2 text-warning">Dx</span>
          <span class="h2 text-danger">Dev</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="m-auto text-uppercase text-warning">
            <Nav.Link href="#home">home</Nav.Link>
            <Nav.Link href="#portfolio">portfolio</Nav.Link>
            <Nav.Link href="#experiences">experiences</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">Learn More</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Contact Me
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      </header>
      
    </div>
    
  );
}

export default TypesExample;