import Navbar from 'react-bootstrap/Navbar'
import Button from "react-bootstrap/Button";
import {Redirect} from "react-router-dom";
import {useState} from "react";
import Container from "react-bootstrap/Container";
import Stack from "react-bootstrap/Stack";
import {Nav} from "react-bootstrap";

const NavBar = (props) => {
    const [redirectHome, setRedirectHome] = useState(false);


    return (
        <>
            <Navbar bg="primary" variant="dark">
                <Container fluid>
                    <Button variant="light"
                            onClick={() => {
                                setRedirectHome(true);
                                setTimeout(() => setRedirectHome(false), 1);
                            }}
                    >
                        🏠
                    </Button>
                    <Navbar.Brand className="centered">
                        Ecommerce storefront
                    </Navbar.Brand>
                        <Nav className="me-auto my-2 my-lg-0"/>
                        <Button variant="light"
                                onClick={() => {
                                    props.handleCanvas();
                                }}
                                className="ms-auto"
                        >
                            🛒
                        </Button>
                </Container>
            </Navbar>

            {redirectHome ?
                <Redirect to={{
                    pathname: "/",
                    state: JSON.stringify(props)
                }}/> : <></>
            }
        </>
    );
}

export default NavBar;