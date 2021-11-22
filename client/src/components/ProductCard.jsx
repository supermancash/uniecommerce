import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Stack from "react-bootstrap/Stack";
import Ratio from "react-bootstrap/Ratio";
import {Redirect} from "react-router-dom";
import {useState} from "react";

const ProductCard = (props) => {
    let cardsArr = [];
    let cartItemsArr = props.cartItems;
    let redirectArr = [];
    const [redirects, setRedirects] = useState([]);

    const cartHandler = (index) => {
        props.handleCanvas();
        let itemIndex, itemInArr;
        for (let i = 0; i < cartItemsArr.length; i++) {
            if (cartItemsArr[i].details.product === props.productsFromFetch[index].product) {
                itemIndex = i;
                itemInArr = true;
            }
        }
        if (!itemInArr) {
            const item = {
                details: props.productsFromFetch[index],
                addedCount: 1
            }
            cartItemsArr.push(item);
        }

        if (itemInArr) {
            cartItemsArr[itemIndex].addedCount += 1;
        }
        props.setCartItems(cartItemsArr)
    }

    const redirectHandler = (index) => {
        redirectArr[index] = true;
        setRedirects(redirectArr);
        setTimeout(() => {
            redirectArr[index] = false;
            setRedirects(redirectArr);
        }, 100);
    }


    for (let i = 0; i < props.productsFromFetch.length; i++) {
        redirectArr.push(false);
        const pathname = "/" + props.productsFromFetch[i].product;
        cardsArr.push(
            <Col key={i}>
                <Card bg="light">
                    <Ratio aspectRatio="4x3">
                        <Image variant="top" src={"/images/" + props.productsFromFetch[i].image} fluid/>
                    </Ratio>
                    <Card.Body>
                        <Card.Title>{props.productsFromFetch[i].product}</Card.Title>
                        <Card.Text>View Article to read more</Card.Text>
                        <Stack direction="horizontal">
                            <Button variant="secondary" onClick={() => redirectHandler(i)}>View
                                article</Button>
                            <Button className="ms-auto" onClick={() => cartHandler(i)}>Add to Cart</Button>
                        </Stack>
                    </Card.Body>
                </Card>
                {redirects[i] ? <Redirect to={{
                    pathname: pathname,
                    state: JSON.stringify(props)
                }}/> : <></>}
            </Col>
        );
    }


    return (
        <div>
            <br/>
            <Container>
                <h2>{props.items}</h2>
                <Row xs={1} md={3} className="g-4">
                    {cardsArr}
                </Row>
            </Container>
        </div>
    );
}

export default ProductCard;
