import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";

const AddComment = (props) => {
  // state = {
  //   review: {
  //     comment: "",
  //     rate: "1",
  //     elementId: this.props.elementId,
  //   },
  // };
  const [review, setReview] = useState({ comment: "", rate: "1", elementId: props.elementId });
  const formReset = () => {
    setReview({ ...review, comment: "", rate: "1" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const resp = await fetch("https://striveschool-api.herokuapp.com/api/comments/", {
      method: "POST",
      body: JSON.stringify(review),
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzkzNjBmYmI3NDcwMTAwMTU4YjJiMmUiLCJpYXQiOjE3Mzg4NTMwOTEsImV4cCI6MTc0MDA2MjY5MX0.1KaJHLhEmhiG1UzL05p7lApSDCVQ2uDdezJfuWBLjMA",
        "Content-Type": "application/json",
      },
    });
    if (resp.ok) {
      alert("Comment published successfully");
    }
    formReset();
    props.fetchComments();
  };
  useEffect(() => {
    setReview({ ...review, elementId: props.elementId });
  }, [props.elementId]);

  return (
    <>
      <hr />
      <Form onSubmit={handleSubmit}>
        <h5 className="mb-3">Leave a review</h5>

        <Form.Group className="mb-3" controlId="reviewForm">
          <Form.Label>Your review:</Form.Label>
          <Form.Control
            as="textarea"
            type="text"
            rows={3}
            placeholder="Tell us what you think..."
            required
            value={review.comment}
            onChange={(e) => setReview({ ...review, comment: e.target.value })}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="rateForm">
          <Form.Label>How would you rate it?</Form.Label>
          <Form.Select required value={review.rate} onChange={(e) => setReview({ ...review, rate: e.target.value })}>
            <option>5</option>
            <option>4</option>
            <option>3</option>
            <option>2</option>
            <option>1</option>
          </Form.Select>
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
};

export default AddComment;
