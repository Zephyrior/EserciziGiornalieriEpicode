import { Component } from "react";
import { Badge, Button, Card, Col } from "react-bootstrap";

class SingleBook extends Component {
  state = { selected: false };
  render() {
    return (
      <>
        <Col xs={12} sm={6} lg={4} className="mb-5 text-center ">
          <Card
            className={this.state.selected ? "border-3 border-danger bg-secondary-subtle rounded-2 p-2 mx-auto" : "border border-success rounded-2 p-2 mx-auto"}
            style={{ width: "18rem" }}
          >
            <Card.Img variant="top" src={this.props.books.img} onClick={() => this.setState({ selected: !this.state.selected })} />
            <Card.Body>
              <Card.Title>{this.props.books.title}</Card.Title>
              <div className="d-flex justify-content-between align-items-center mb-2 mt-4">
                <Badge className="bg-success rounded-pill">$ {this.props.books.price}</Badge>
                <Button variant="warning">Buy Now</Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </>
    );
  }
}
export default SingleBook;
