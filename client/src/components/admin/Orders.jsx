import Container from "react-bootstrap/Container";
import {useEffect, useState} from "react";
import Accordion from "react-bootstrap/Accordion";
import ListGroup from "react-bootstrap/ListGroup";

const Orders = () => {
    const [ordersFromFetch, setOrdersFromFetch] = useState([]);

    useEffect(() => {
        const getOrders = () => {
            fetch('/api/orders', {
                method: 'GET',
                headers: {
                    "content-type": "application/json"
                }
            }).then((res) => res.json())
                .then(data => {
                        data.reverse();
                        setOrdersFromFetch(data);
                    }
                )
                .catch(err => console.log(err));
        }
        getOrders();
        setInterval(() => {
            getOrders();
        }, 5000);
    }, []);

    const accordions = ordersFromFetch.map(order =>
        <Accordion.Item key={ordersFromFetch.indexOf(order)} eventKey={ordersFromFetch.indexOf(order).toString()}>
            <Accordion.Header>
                Order made by: {order.customer.name}
            </Accordion.Header>
            <Accordion.Body>
                Order Contents: {" (Order ID: " + order._id + ")"}
                <ListGroup>
                    {order.cart.map(cartItem =>
                        <ListGroup.Item>
                            {cartItem.details.product} {cartItem.addedCount > 1 ? "(Quantity: " + cartItem.addedCount + ")" : ""}
                        </ListGroup.Item>
                    )}
                </ListGroup>
            </Accordion.Body>
        </Accordion.Item>
    );

    return (
        <>
            <Container>
                <br/>
                <h3>Recent orders</h3>
                <Accordion defaultActiveKey="0">
                    {accordions.length ? accordions : <p>Sorry, no recent orders found</p>}
                </Accordion>
            </Container>
        </>
    )
}

export default Orders;