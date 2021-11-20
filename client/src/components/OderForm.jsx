import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";
import {useState} from "react";

const OderForm = (props) => {
    const [thankYou, setThankYou] = useState(false);
    const [orderContent, setOrderContent] = useState("I'm ready, place my order");
    const [orderVariant, setOrderVariant] = useState("primary");
    const [name, setName] = useState("");
    const [street, setStreet] = useState("");
    const [hnumber, setHnumber] = useState("");
    const [email, setEmail] = useState("");


    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name.length) {
            setOrderContent("Please enter a name");
            setOrderVariant("danger");
            setTimeout(() => {
                    setOrderVariant("primary")
                    setOrderContent("I'm ready, place my order")
                }, 2000
            );
        }
        if (!street.length) {
            setOrderContent("Please enter a street");
            setOrderVariant("danger");
            setTimeout(() => {
                    setOrderVariant("primary")
                    setOrderContent("I'm ready, place my order")
                }, 2000
            );
        }
        if (!hnumber.length) {
            setOrderContent("Please enter a length");
            setOrderVariant("danger");
            setTimeout(() => {
                    setOrderVariant("primary")
                    setOrderContent("I'm ready, place my order")
                }, 2000
            );
        }
        if (!email.length) {
            setOrderContent("Please enter a E-mail");
            setOrderVariant("danger");
            setTimeout(() => {
                    setOrderVariant("primary")
                    setOrderContent("I'm ready, place my order")
                }, 2000
            );
        }
        if(name.length && street.length && hnumber.length && email.length) {
            const dataForPost = {
                customer: {
                    name: name,
                    address: street + " " + hnumber,
                    email: email
                },
                cart: props.cartItems
            }
            console.log(dataForPost);
            fetch('/api/orders', {
                method: 'POST',
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(dataForPost)
            }).catch(err => console.log(err));
            setThankYou(true);
        }
    }

    return (
        <>
            {thankYou ?
                <div className="thankyou">
                    <h1>Thank you for ordering at Ecommerce Storefront</h1>
                </div>
                :
                <Container>
                    <h2>Place your order</h2>
                    <Form>
                        <Form.Group>
                            <Form.Label>Name</Form.Label>
                            <Form.Control onChange={(e) => setName(e.target.value)}
                                          placeholder="Please enter your Full Name"/>
                        </Form.Group>
                        <br/>
                        <Row>
                            <Col>
                                <Form.Group>
                                    <Form.Label>Street</Form.Label>
                                    <Form.Control onChange={(e) => setStreet(e.target.value)}
                                                  placeholder="Please enter your Street Name"/>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group>
                                    <Form.Label>House Number</Form.Label>
                                    <Form.Control onChange={(e) => setHnumber(e.target.value)}
                                                  placeholder="Pleas enter your House Number"/>
                                </Form.Group>
                            </Col>
                        </Row>
                        <br/>
                        <Form.Group>
                            <Form.Label>E-Mail</Form.Label>
                            <Form.Control onChange={(e) => setEmail(e.target.value)} type="email"
                                          placeholder="Please enter your email adress"/>
                        </Form.Group>
                        <br/>
                        <Stack direction="horizontal">
                            <Button variant="secondary" onClick={() => props.handleCanvas()}>
                                Review Cart
                            </Button>
                            <Button variant={orderVariant} className="ms-auto" type="submit"
                                    onClick={(e) => handleSubmit(e)}>
                                {orderContent}
                            </Button>
                        </Stack>
                    </Form>
                </Container>
            }

        </>
    )
}

export default OderForm;