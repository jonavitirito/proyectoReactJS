import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CardWidget from './CardWidgetComponent';
import { Link } from 'react-router-dom';
import "./NavBarComponent.css";



function NavBar() {
  return (
   
    <Navbar expand="lg" className="bg-body-tertiary navegador">
      <Container>
        <Navbar.Brand className='title'> <Link to="/">J HAppliances </Link> </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Item><Link to="/">Inicio</Link> </Nav.Item>
            <NavDropdown title="Productos" id="basic-nav-dropdown" className='categorias'>
              <NavDropdown.Item > <Link to="/category/Heladeras">Heladeras</Link></NavDropdown.Item>
              <NavDropdown.Item > <Link to="/category/Lavarropas">
                Lavarropas</Link>
              </NavDropdown.Item>
              <NavDropdown.Item > <Link to="/category/Cocinas">Cocinas</Link></NavDropdown.Item>
              <NavDropdown.Item > <Link to="/category/Termotanques">
                Termotanques</Link>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <CardWidget/>
      </Container>
      
    </Navbar>
  );
}

export default NavBar;
