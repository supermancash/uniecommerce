import Stack from "react-bootstrap/Stack";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import {useState} from "react";

const Product = (props) => {
    const [overlayHidden, setOverlayHidden] = useState(true);

    return (
        <div>
            <br/>
            <Container>
                <Card className="bg-dark bg-opacity-50 text-black text-lg-center">
                    <Card.Img src={"/images/" + props.image} alt="Product image"/>
                    <Card.ImgOverlay>
                        <Stack>
                            <Button className="ms-auto" variant="secondary"
                                    onClick={() => setOverlayHidden(!overlayHidden)}>...</Button>
                        </Stack>
                        <Stack hidden={overlayHidden}>
                            <br/>
                            <Card.Title className="mx-auto">{props.product}</Card.Title>
                            <Card.Text>{props.description}</Card.Text>
                        </Stack>
                    </Card.ImgOverlay>
                </Card>
            </Container>
        </div>
    );

}

export default Product;