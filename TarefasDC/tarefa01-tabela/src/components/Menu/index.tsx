import { Container, Nav, Navbar, } from "react-bootstrap"

export const Menu = () =>{
    return (
        <>
            <Navbar bg="danger" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="#home">Caps</Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#features">Remedios</Nav.Link>
                            <Nav.Link href="#pricing">Promoçoes</Nav.Link>
                        </Nav>
                </Container>
            </Navbar>
        </>
    )
}