import React from "react";
import CommentList from "./CommentList";
import AddComment from "./AddComment";

class CommentArea extends React.Component {
    state = {
        comments: [],
        isLoading: true,
    isError: false,
    };

    componentDidMount = async () => {
        try {
            let response = await fetch(
                "https://striveschool-api.herokuapp.com/api/comments/" +
                    this.props.asin,
                {
                    headers: {
                        Authorization:
                            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTczNGM3YWZlMDMxZTAwMTliYTE5MmEiLCJpYXQiOjE3MDMxNjM1MjcsImV4cCI6MTcwNDM3MzEyN30.eNmlGtH4IJ6k_DV_-mCaaAj8CJssSl7beNk_PaSm6Ig",
                    },
                }
            );
            if (response.ok) {
                let comments = await response.json();
                console.log(
                    this.props.asin,
                    comments
                );
                this.setState({
                    comments: comments,
                    isLoading: false,
                    isError: false,
                    
                });
            } else {
                console.log("Errore");
                this.setState({ isLoading: false, isError: true });
            }
        } catch (error) {
            console.log(error);
            this.setState({ isLoading: false, isError: true });
        }
    };
    render() {
        return (
        <div>
            <AddComment asin={this.props.asin} />
            <CommentList commentsToShow={this.state.comments} />
        </div>
        )
    }
}
export default CommentArea;
