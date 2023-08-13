import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CardWidget from './CardWidgetComponent';

function BasicExample() {
  return (
   
    <Navbar expand="lg" className="bg-body-tertiary navegador">
      <Container>
        <Navbar.Brand href="#home">J HAppliances</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <NavDropdown title="Productos" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Heladeras</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Lavarropas
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Cocinas</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                Termotanques
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <CardWidget/>
      </Container>
      
    </Navbar>
  );
}

export default BasicExample;
