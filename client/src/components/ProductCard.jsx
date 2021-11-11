import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";



const ProductCard = () => {
    let cards = [];
    for (let i = 0; i < 10; i++) {
        cards.push(
            <Col>
                <Card bg="light">
                    <Card.Img variant="top" src="holder.js/100px160" />
                    <Card.Body>
                        <Card.Title>{i}</Card.Title>
                        <Card.Text>
                            This is a longer card with supporting text below as a natural
                            lead-in to additional content. This content is a little bit longer.
                        </Card.Text>
                        <Button>See Article</Button>
                    </Card.Body>
                </Card>
            </Col>
        );
    }
    return (
        <div>
            <Row xs={1} md={3} className="g-4">
                {cards}
            </Row>
        </div>
    );
}

export default ProductCard;
