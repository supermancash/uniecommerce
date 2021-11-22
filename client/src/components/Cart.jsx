import Accordion from "react-bootstrap/Accordion";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";
import {useState} from "react";
import {Redirect} from "react-router-dom";

const Cart = (props) => {
    const [redirectOrder, setRedirectOrder] = useState(false);

    let accordions = props.cartItems.map(item =>
        <Accordion.Item key={props.cartItems.indexOf(item)} eventKey={props.cartItems.indexOf(item)}>
            <Accordion.Header>
                <Image width="8%" height="5%" src={"/images/" + item.details.image}/>
                {item.addedCount + " " + item.details.product}</Accordion.Header>
            <Accordion.Body>{item.details.description}</Accordion.Body>
        </Accordion.Item>
    );


    return (
        <>
            <Container>
                <h2>Cart</h2>
                {accordions.length ?
                    <div>
                        <Accordion>
                            {accordions}
                        </Accordion>
                        <br/>
                        <Stack direction="horizontal">
                            <Button className="ms-auto" onClick={() => {
                                setRedirectOrder(true);
                                setTimeout(() => setRedirectOrder(false), 100)
                            }}>Place my order</Button>
                        </Stack>
                    </div>
                    :
                    <p>Your Cart is empty, visit the shop to add items to your cart :D </p>
                }
            </Container>
            {redirectOrder ?
                <Redirect to={{
                    pathname: "/order",
                    state: JSON.stringify(props)
                }}/>
                :
                <></>
            }
        </>
    );
}

export default Cart;