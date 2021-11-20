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
            <Container bsPrefix="individualProduct">
                <Card>
                    <Card.Img src={"/images/"+props.image}></Card.Img>
                </Card>
                <p>{props.description}</p>
            </Container>
        </div>
    );

}

export default Product;