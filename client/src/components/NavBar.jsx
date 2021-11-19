import Navbar from 'react-bootstrap/Navbar'
import Button from "react-bootstrap/Button";
import {Redirect} from "react-router-dom";
import {useState} from "react";
import Container from "react-bootstrap/Container";

const NavBar = (props) => {
    const [redirectHome, setRedirectHome] = useState(false);


    return (
        <>
            <Navbar bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand onClick={() => {
                        setRedirectHome(true);
                        setTimeout(() => setRedirectHome(false), 1)
                    }}>
                        Ecommerce Storefront
                    </Navbar.Brand>
                </Container>
                <Navbar.Collapse className="justify-content-end">
                    <Container>
                        <Button variant="light"
                                onClick={() => {
                                    props.handleCanvas();
                                }}>
                            🛒
                        </Button>
                    </Container>
                </Navbar.Collapse>
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