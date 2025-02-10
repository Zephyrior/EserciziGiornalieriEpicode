import { Component } from "react";
import SingleBook from "./SingleBook";

{
  /*import fantasy from "../data/books/fantasy.json";
import history from "../data/books/history.json";
import horror from "../data/books/horror.json";
import romance from "../data/books/romance.json";
import scifi from "../data/books/scifi.json";*/
}
import { Col, Container, Form, Row } from "react-bootstrap";

class BookList extends Component {
  state = {
    searchBook: "",
    //fetchedBookId: null,
  };
  fetchBookId = (commentId) => {
    //this.setState({ fetchedBookId: commentId });
    this.props.selectBookId(commentId);
  };

  render() {
    //console.log(this.state.books);
    return (
      <Container>
        <Row className="mb-3">
          <Col>
            <Form.Group>
              <Form.Control
                id="searchBar"
                type="search"
                placeholder="Search a book"
                value={this.state.searchBook}
                onChange={(e) => this.setState({ searchBook: e.target.value })}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          {this.props.books
            .filter((book) => book.title.toLowerCase().includes(this.state.searchBook))
            .map((book) => (
              <SingleBook key={book.asin} books={book} fetchBookId={this.fetchBookId} /*onClick={() => this.props.selectBookId(book.asin)}*/ />
            ))}
        </Row>
      </Container>
    );
  }
}
export default BookList;
