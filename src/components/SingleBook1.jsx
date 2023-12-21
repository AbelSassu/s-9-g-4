import React from "react";
import { Col, Card } from "react-bootstrap";
import CommentArea from "./CommentArea";

class SingleBook1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: false,
        };
    }

    handleClick = () => {
        this.setState((prevState) => ({ selected: !prevState.selected }));
    };

    render() {
        const { b } = this.props;
        const { selected } = this.state;

        return (
            <Col xs={12} sm={6} md={3} key={b.asin}>
                <Card
                    className={`mimmo ${selected ? "selected" : ""}`}
                    onClick={this.handleClick}
                >
                    <Card.Img
                        variant="top"
                        src={b.img}
                        className={`prova ${selected ? "scale" : "unscale"}`}
                    />
                    <Card.Body>
                        <Card.Title>{b.title}</Card.Title>
                        <Card.Text>{b.price} €</Card.Text>
                        <Card.Text>Categoria: {b.category}</Card.Text>
                    </Card.Body>
                </Card>
                {this.state.selected && (
                    <CommentArea asin={this.props.b.asin} />
                )}
            </Col>
        );
    }
}

export default SingleBook1;
