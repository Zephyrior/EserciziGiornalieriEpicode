import { Component } from "react";
import { Badge, Button, Card, Col } from "react-bootstrap";
//import CommentArea from "./CommentArea";

class SingleBook extends Component {
  state = { selected: false };
  render() {
    return (
      <>
        <Col xs={12} sm={6} className="mb-5 text-center ">
          <Card
            className={this.state.selected ? "border-3 border-danger bg-secondary-subtle rounded-2 p-2 mx-auto" : "border border-success rounded-2 p-2 mx-auto"}
            style={{ width: "18rem" }}
          >
            {/*onClick={() => this.props.fetchBookId(this.props.books.asin)}*/}

            <Card.Img
              variant="top"
              src={this.props.books.img}
              onClick={() => {
                this.setState({ selected: !this.state.selected }, console.log(this.props.books.asin));
                this.props.fetchBookId(this.props.books.asin);
              }}
            />
            <Card.Body>
              <Card.Title>{this.props.books.title}</Card.Title>
              <div className="d-flex justify-content-between align-items-center mb-2 mt-4">
                <Badge className="bg-success rounded-pill">$ {this.props.books.price}</Badge>
                <Button variant="warning">Buy Now</Button>
              </div>
              {/* <div className={this.state.selected ? "d-block" : "d-none"}>{this.state.selected && <CommentArea id={this.props.books.asin} />}</div>*/}
            </Card.Body>
          </Card>
        </Col>
      </>
    );
  }
}
export default SingleBook;
