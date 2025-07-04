import { Navbar, Nav, Container } from 'react-bootstrap';
import { NavLink, Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <Navbar bg="primary" variant="dark" expand="lg" className="mt-4 mb-4 rounded">
            <Container>
                <Navbar.Brand href="/">BlogApp</Navbar.Brand>
                <Nav className="ms-auto">
                    <Nav.Link as={NavLink} to="/">Home</Nav.Link>
                    <Nav.Link as={Link} to="/categories">Categories</Nav.Link>
                    <Nav.Link as={NavLink} to="/about">About</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default NavBar;
