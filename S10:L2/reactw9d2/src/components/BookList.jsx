import { useState } from "react";
import SingleBook from "./SingleBook";

{
  /*import fantasy from "../data/books/fantasy.json";
import history from "../data/books/history.json";
import horror from "../data/books/horror.json";
import romance from "../data/books/romance.json";
import scifi from "../data/books/scifi.json";*/
}
import { Col, Container, Form, Row } from "react-bootstrap";

const BookList = (props) => {
  // state = {
  //   searchBook: "",
  //   fetchedBookId: "",
  // };

  const [searchBook, setSearchBook] = useState("");
  const [fetchedBookId, setFetchedBookId] = useState("");

  const fetchBookId = (commentId) => {
    setFetchedBookId(commentId);
    props.selectBookId(commentId);
  };

  //console.log(this.state.books);
  return (
    <Container>
      <Row className="mb-3">
        <Col>
          <Form.Group>
            <Form.Control id="searchBar" type="search" placeholder="Search a book" value={searchBook} onChange={(e) => setSearchBook(e.target.value)} />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        {props.books
          .filter((book) => book.title.toLowerCase().includes(searchBook))
          .map((book) => (
            <SingleBook
              key={book.asin}
              books={book}
              fetchBookId={fetchBookId}
              fetchedBookId={fetchedBookId} /*onClick={() => this.props.selectBookId(book.asin)}*/
            />
          ))}
      </Row>
    </Container>
  );
};

export default BookList;
