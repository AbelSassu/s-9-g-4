import React from "react";
import { Button, Form } from "react-bootstrap";

class AddComment extends React.Component {
    state = {
        comment: {
            comment: "",
            rate: 1,
            elementId: this.props.asin,
        },
    };

    sendComment = async (e) => {
        e.preventDefault();
        try {
            console.log("Sending comment:", this.state.comment);
            let response = await fetch(
                "https://striveschool-api.herokuapp.com/api/comments",
                {
                    method: "POST",
                    body: JSON.stringify(this.state.comment),
                    headers: {
                        Authorization:
                            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTczNGM3YWZlMDMxZTAwMTliYTE5MmEiLCJpYXQiOjE3MDMxNjM1MjcsImV4cCI6MTcwNDM3MzEyN30.eNmlGtH4IJ6k_DV_-mCaaAj8CJssSl7beNk_PaSm6Ig",
                    },
                }
            );
            if (response.ok) {
                alert("Fatti una vita.");
                this.setState({
                    comment: {
                        comment: "",
                        rate: 1,
                        elementId: this.props.asin,
                    },
                });
            } else {
                alert("Qualcosa è andato storto");
            }
        } catch (err) {
            console.log("Errore:", err);
            alert("Errore");
        }
    };

    render() {
        return (
            <div className="mb-3">
                <Form onSubmit={this.sendComment}>
                    <Form.Group>
                        <Form.Label>Commenta qua sotto!</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Ti rode il culo? Scrivilo qua!"
                            value={this.state.comment.comment}
                            onChange={(e) =>
                                this.setState({
                                    comment: {
                                        ...this.state.comment,
                                        comment: e.target.value,
                                    },
                                })
                            }
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Voto da 1 a 5</Form.Label>
                        <Form.Control
                            as="select"
                            value={this.state.comment.rate}
                            onChange={(e) =>
                                this.setState({
                                    comment: {
                                        ...this.state.comment,
                                        rate: e.target.value,
                                    },
                                })
                            }
                        >
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </Form.Control>
                    </Form.Group>
                    <Button className="mt-3" variant="primary" type="submit">
                        Invia
                    </Button>
                </Form>
            </div>
        );
    }
}

export default AddComment;
