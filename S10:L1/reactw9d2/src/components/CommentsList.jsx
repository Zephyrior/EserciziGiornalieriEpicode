//import { Component } from "react";
import { ListGroup } from "react-bootstrap";
import SingleComment from "./SingleComment";
//author={reviews.author} comment={reviews.comment} rate={reviews.rate}
const CommentsList = (props) => {
  return (
    <>
      <ListGroup>
        {props.comments.map((reviews) => (
          <SingleComment key={reviews._id} review={reviews} fetchComments={props.fetchComments} />
        ))}
      </ListGroup>
    </>
  );
};

export default CommentsList;
