import Accordion from "react-bootstrap/Accordion";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";

const Cart = (props) => {
    let accordions = props.cartItems.map(item =>
        <Accordion.Item key={props.cartItems.indexOf(item)} eventKey={props.cartItems.indexOf(item)}>
            <Accordion.Header>
                <Image width="8%" height="5%" src={"/images/" + item.details.image}/>
                {item.addedCount + " " + item.details.product}{item.addedCount>1 ? "s" : ""}</Accordion.Header>
            <Accordion.Body>{item.details.description}</Accordion.Body>
        </Accordion.Item>
    );


    return (
        <>
            <Container>
                <h2>Cart</h2>
                {accordions.length ? <Accordion>{accordions}</Accordion> :
                    <p>Your Cart is empty, visit the shop to add items to your cart :D </p>}
            </Container>
        </>
    );
}

export default Cart;