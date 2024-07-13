import { Container, Nav, Navbar, } from "react-bootstrap"

export const Menu = () =>{
    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="#home">Crud-Remedios</Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#features">Pedidos</Nav.Link>
                            <Nav.Link href="#pricing">Promoçoes</Nav.Link>
                        </Nav>
                </Container>
            </Navbar>
        </>
    )
}