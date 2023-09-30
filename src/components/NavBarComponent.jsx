import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CardWidget from './CardWidgetComponent';
import { Link } from 'react-router-dom';
import "./NavBarComponent.css";
import UseCollection from '../hooks/UseCollection';
import React from 'react';


function NavBar() {
  const {products, loading}= UseCollection("categories");
 console.log(products)
  return (
   
    <Navbar expand="lg" className="bg-body-tertiary navegador">
      <Container>
        <Navbar.Brand className='tittle-container'> <Link to="/" className='tittle'><div><img src="https://cdn-icons-png.flaticon.com/512/998/998779.png" alt="#" />JHAppliances</div> </Link> </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='nav-container'>
          <Nav className="me-auto" >
            <Nav.Item><Link to="/" className='inicio'>Inicio</Link> </Nav.Item>
            {loading ? null : (
              <NavDropdown title="Productos" id="basic-nav-dropdown" className='products'>
                {products[0].name.map((category, index) => {
                  return (
                    <NavDropdown.Item key={index} >
                      <Link to={`/category/${category}`} className='category'>{category}</Link>
                    </NavDropdown.Item>
                  );
                })}
              </NavDropdown>
            )}

          </Nav>
        </Navbar.Collapse>
        <CardWidget/>
      </Container>
      
    </Navbar>
  );
}

export default NavBar;
