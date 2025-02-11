//import { Component } from "react";
import CommentsList from "./CommentsList";
import AddComment from "./AddComment";
import { Spinner, Alert } from "react-bootstrap";
import { useEffect, useState } from "react";
//console.log("ID passato:", this.props.id);

const CommentArea = (props) => {
  //state = {
  //  comments: [],
  // isLoading: false,
  // };

  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchComments = async () => {
    setIsLoading(true);
    console.log(props.id);
    try {
      const resp = await fetch("https://striveschool-api.herokuapp.com/api/comments/" + props.id, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzkzNjBmYmI3NDcwMTAwMTU4YjJiMmUiLCJpYXQiOjE3Mzg4NTMwOTEsImV4cCI6MTc0MDA2MjY5MX0.1KaJHLhEmhiG1UzL05p7lApSDCVQ2uDdezJfuWBLjMA",
        },
      });
      if (resp.ok) {
        const comments = await resp.json();
        console.log(comments);
        setComments(comments);
        setIsLoading(false);
      } else {
        throw new Error();
      }
    } catch (error) {
      console.log(error);
    }
  };

  //useEffect(() => {
  //  fetchComments();
  //}, []);

  // componentDidUpdate(prevProps) {
  //   if (prevProps.id !== this.props.id) {
  //     this.fetchComments();
  //   }

  useEffect(() => {
    fetchComments();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.id]);

  return (
    <div>
      {isLoading ? (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      ) : comments.length === 0 ? (
        <Alert key="danger" variant="danger">
          There are no comments in this book.
        </Alert>
      ) : (
        <CommentsList comments={comments} fetchComments={fetchComments} />
      )}

      <AddComment elementId={props.id} fetchComments={fetchComments} />
    </div>
  );
};

export default CommentArea;
