import Offcanvas from "react-bootstrap/Offcanvas";
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";
import {useState} from "react";
import {Redirect} from "react-router-dom";
import {Alert} from "react-bootstrap";
import Image from "react-bootstrap/Image";


const CartCanvas = (props) => {
    const [redirectCart, setRedirectCart] = useState(false);

    return(
        <>
            <Offcanvas show={props.showCanvas} onHide={props.handleCanvas} placement="end">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Cart</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    {props.cartItems.length ?
                        <div>
                            {props.cartItems.map(item =>
                                <div>
                                    <Alert variant="secondary">
                                        <Stack direction="horizontal">
                                            {item.addedCount + " "}
                                            {item.details.product}
                                            {item.addedCount>1 ? "s" : ""}
                                            <Image className="ms-auto" width="20%" src={"/images/" + item.details.image} fluid />
                                        </Stack>
                                    </Alert>
                                </div>
                            )}
                            <Stack direction="horizontal">
                                <Button className="ms-auto" onClick={() => {
                                    setRedirectCart(true);
                                    setTimeout(() => setRedirectCart(false), 1);
                                    props.handleCanvas();
                                }
                                }>View Cart</Button>
                            </Stack>

                        </div>
                        :
                        <p>Your Cart is empty, add products to see them here</p>
                    }
                    <Stack direction="horizontal">

                    </Stack>
                </Offcanvas.Body>
                <br/>
            </Offcanvas>
            {redirectCart ?
                <Redirect to={{
                    pathname: "/cart",
                    state: JSON.stringify(props)
                }}/> : <></>
            }
        </>
    );
}

export default CartCanvas;