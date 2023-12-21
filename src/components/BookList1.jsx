import React from "react";
import books from "../data/books.json";
import SingleBook1 from "./SingleBook1";
import { Col, Form, Row, Container } from "react-bootstrap";

class BookList1 extends React.Component {
    state = { search: "" };

    render() {
        const { search } = this.state;
        const filteredBooks = books.fantasy.filter((book) =>
            book.title.toLowerCase().includes(search.toLowerCase())
        );

        return (
            <Container>
                <Row>
                    <Col>
                        <Form.Group>
                            <Form.Label className="label">
                                Il peso della cultura...
                            </Form.Label>
                            <Form.Control
                                className="search1"
                                type="text"
                                placeholder="Cerca la tua arma qui!"
                                value={search}
                                onChange={(e) =>
                                    this.setState({
                                        search: e.target.value,
                                    })
                                }
                            />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    {filteredBooks.map((book) => (
                        <SingleBook1 b={book} key={book.asin} />
                        
                    ))}
                </Row>
            </Container>
        );
    }
}
export default BookList1;
