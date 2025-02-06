import { Component } from "react";
import CommentsList from "./CommentsList";
import AddComment from "./AddComment";
//console.log("ID passato:", this.props.id);

class CommentArea extends Component {
  state = {
    comments: [],
  };
  fetchComments = async () => {
    try {
      const resp = await fetch("https://striveschool-api.herokuapp.com/api/comments/" + this.props.id, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzkzNjBmYmI3NDcwMTAwMTU4YjJiMmUiLCJpYXQiOjE3Mzg4NTMwOTEsImV4cCI6MTc0MDA2MjY5MX0.1KaJHLhEmhiG1UzL05p7lApSDCVQ2uDdezJfuWBLjMA",
        },
      });
      if (resp.ok) {
        const comments = await resp.json();
        console.log(comments);
        this.setState({ comments });
      } else {
        throw new Error();
      }
    } catch (error) {
      console.log(error);
    }
  };
  componentDidMount() {
    this.fetchComments();
  }
  render() {
    return (
      <>
        <CommentsList comments={this.state.comments} />
        <AddComment elementId={this.props.id} />
      </>
    );
  }
}
export default CommentArea;
