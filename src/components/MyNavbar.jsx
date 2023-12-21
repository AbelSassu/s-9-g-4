import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function MyNavbar() {
    return (
        <Navbar expand="lg" className="bg-secondary text-white w-100 d-flex ">
            <Container className="m-auto justify-content-between">
                <Navbar.Brand href="#home" className="text-white me-5 ">
                    Libreria
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="ms-5">
                    <Nav className="me-auto">
                        <Nav.Link className="text-white" href="#home">
                            Home
                        </Nav.Link>
                        <Nav.Link className="text-white" href="#link">
                            About
                        </Nav.Link>
                        <Nav.Link className="text-white" title="#link2">
                            Browse
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default MyNavbar;
