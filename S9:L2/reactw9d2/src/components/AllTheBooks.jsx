import { Badge, Button, Card, Col, Container, Row } from "react-bootstrap";

import fantasy from "../data/books/fantasy.json";
import history from "../data/books/history.json";
import horror from "../data/books/horror.json";
import romance from "../data/books/romance.json";
import scifi from "../data/books/scifi.json";

import { Component } from "react";

class AllTheBooks extends Component {
  state = { books: fantasy };
  render() {
    return (
      <Container>
        <div>
          <Button variant="light" onClick={() => this.setState({ books: fantasy })}>
            Fantasy
          </Button>
          <Button variant="light" onClick={() => this.setState({ books: history })}>
            History
          </Button>
          <Button variant="light" onClick={() => this.setState({ books: horror })}>
            Horror
          </Button>
          <Button variant="light" onClick={() => this.setState({ books: romance })}>
            Romance
          </Button>
          <Button variant="light" onClick={() => this.setState({ books: scifi })}>
            Sci-Fi
          </Button>
          <hr />
        </div>
        <Row>
          {this.state.books.map((book) => {
            return (
              <Col xs={12} sm={6} lg={4} className="mb-5 text-center" key={book.asin}>
                <Card className="border border-success rounded-2 p-2 mx-auto" style={{ width: "18rem" }}>
                  <Card.Img variant="top" src={book.img} />
                  <Card.Body>
                    <Card.Title>{book.title}</Card.Title>
                    <div className="d-flex justify-content-between align-items-center mb-2 mt-4">
                      <Badge className="bg-success rounded-pill">$ {book.price}</Badge>
                      <Button variant="warning">Buy Now</Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    );
  }
}
export default AllTheBooks;
