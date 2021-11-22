import Offcanvas from "react-bootstrap/Offcanvas";
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";
import {useEffect, useState} from "react";
import {Redirect} from "react-router-dom";
import {Alert, CloseButton, FormControl, InputGroup} from "react-bootstrap";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";


const CartCanvas = (props) => {
    const [redirectCart, setRedirectCart] = useState(false);
    const [forceLocalUpdate, setFLU] = useState(false);

    const removeHandler = (itemToRemove) => {
        const cartItemsArr = props.cartItems;
        cartItemsArr.splice(cartItemsArr.indexOf(itemToRemove));
        props.setCartItems(cartItemsArr);

        // This forces the component to rerender and acknowledge that the item has been removed from the cart
        setFLU(!forceLocalUpdate);
    }

    return (
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
                                            <InputGroup>
                                                <FormControl type="number"
                                                             defaultValue={item.addedCount}
                                                             bsPrefix="cartInput"
                                                             onChange={(e) => {
                                                                 let cartItemsArr = props.cartItems;
                                                                 cartItemsArr[cartItemsArr.indexOf(item)].addedCount = e.target.value;
                                                                 props.setCartItems(cartItemsArr);
                                                             }}
                                                />
                                            </InputGroup>
                                            <>{item.details.product}</>
                                            <Container>
                                                <Image width="50%" src={"/images/" + item.details.image}/>
                                            </Container>
                                            <CloseButton onClick={() => removeHandler(item)} className="ms-auto" />
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