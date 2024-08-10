import { Container, Nav, Navbar, } from "react-bootstrap"
import { NavLink } from "react-router-dom"

export const Menu = () =>{
    return (
        <>
            <Navbar bg="danger" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="#home">Caps</Navbar.Brand>
                        <Nav className="me-auto">
                            <li className="nav-item">
                                <NavLink to={"/Home"} className={"nav-link"}>Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to={"/"} className={"nav-link"}>Remedios</NavLink>
                            </li>
                        </Nav>
                </Container>
            </Navbar>
        </>
    )
}