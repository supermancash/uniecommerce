import Navbar from 'react-bootstrap/Navbar'
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";

const NavBar = () => {
    const imgInvertColour = {

        filter: 'invert(1)'
    };

    return (
        <div>
            <Navbar bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand>Ecommerce Storefront</Navbar.Brand>
                    <Button href="/cart" variant="light">🛒</Button>
                </Container>
            </Navbar>
            <p/>
        </div>
    );
}

export default NavBar;