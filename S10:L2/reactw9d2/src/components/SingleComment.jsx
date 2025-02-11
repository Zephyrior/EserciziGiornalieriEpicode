//import { Component } from "react";
import { Button, ListGroup } from "react-bootstrap";

const SingleComment = (props) => {
  console.log(props);
  const handleDelete = async (id) => {
    await fetch("https://striveschool-api.herokuapp.com/api/comments/" + id, {
      method: "DELETE",
      headers: {
        authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzkzNjBmYmI3NDcwMTAwMTU4YjJiMmUiLCJpYXQiOjE3Mzg4NTMwOTEsImV4cCI6MTc0MDA2MjY5MX0.1KaJHLhEmhiG1UzL05p7lApSDCVQ2uDdezJfuWBLjMA",
      },
    });
    props.fetchComments();
  };

  return (
    <>
      <ListGroup.Item className="border border-0" onClick={console.log("You clicked on this element id:" + props.review._id)}>
        <h6 className="mt-1">
          ✍︎
          <a className="link-underline-primary"> {props.review.author}</a> says:
        </h6>
        <p>
          {props.review.comment}. I give it a <strong> {props.review.rate} rating </strong>{" "}
          <Button
            variant="danger"
            size="sm"
            onClick={() => {
              handleDelete(props.review._id);
            }}
          >
            x
          </Button>
        </p>
      </ListGroup.Item>
    </>
  );
};

export default SingleComment;
