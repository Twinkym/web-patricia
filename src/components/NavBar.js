import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

const NavBar = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">Patricia Admin</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#about">Sobre mí</Nav.Link>
                    <Nav.Link href="#CV">C.V.</Nav.Link>
                    <Nav.Link href="#works">Trabajos</Nav.Link>
                    <Nav.Link href="#contact">Contacto</Nav.Link>
                </Nav>
                <Nav>
                    <NavDropdown title="Idioma" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#catalan">Catalán</NavDropdown.Item>
                    <NavDropdown.Item href="#espanol">Español</NavDropdown.Item>
                    <NavDropdown.Item href="#english">Ingles</NavDropdown.Item>
                    <NavDropdown.Item href="#french">Frances</NavDropdown.Item>
                    <NavDropdown.Item href="#portuguese">Portuges</NavDropdown.Item>
                </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavBar;