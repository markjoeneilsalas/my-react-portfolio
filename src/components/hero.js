import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function AutoLayoutExample() {
  return (
    <Container>
      <Row>
        <Col className='bg-warning'>
            <h3><span class="h2 text-warning">Hello I`am Mark!</span></h3>
        </Col>
        <Col>
           
        </Col>
      </Row>
    </Container>
  );
}

export default AutoLayoutExample;