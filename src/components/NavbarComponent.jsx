import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from './CartWidget';

const NavbarComponent = () => {
    return(
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home">
                    <a href="/" className="mx-0 d-block navbar-brand">
                        <svg xmlns="http://www.w3.org/2000/svg" aria-label="Ajax logo" viewBox="0 0 96 20" height="1em" fill="currentColor" data-cy="ajax-logo" class="mw-100 header-ajax-logo_logo__j4OWh">
                            <path d="M74.69.88h-5.3l21.25 19.11h5.3L74.69.88m6.14 13.6-6.13 5.51h-5.3l6.12-5.51h5.31m8.99-8.09L95.95.88h-5.3l-6.13 5.51h5.3M13.28.88l-2.17 3.11 11.07 16h4.38L13.28.88M7.66 8.97H12L4.38 19.99H0L7.66 8.97M53.24.88l-2.17 3.11 11.07 16h4.38L53.24.88m-5.62 8.09h4.34l-7.62 11.02h-4.38l7.66-11.02M35.23.88l.01 11.7c-.01 1.9-.9 4.27-3.89 4.47h-1.09v2.94l1.57.01a7.01 7.01 0 0 0 4.81-2.06 8.11 8.11 0 0 0 2.03-5.55V.88h-3.44"></path>
                        </svg>
                    </a>
                </Navbar.Brand>
                <Navbar.Toggle variant='dark' aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <NavDropdown title="Categorias" id="collapsible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Intrusion</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.2">Incendio</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.3">Video Vigilancia</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Confort</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets">Contacto</Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                        <a href="#cart"><CartWidget counter={10}/></a>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
  )
}

export default NavbarComponent