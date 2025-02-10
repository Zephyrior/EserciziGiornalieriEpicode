import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNav from "./components/MyNav";
import Welcome from "./components/Welcome";
//import AllTheBooks from "./components/AllTheBooks";
import MyFooter from "./components/MyFooter";
//import SingleBook from "./components/SingleBook";
import BookList from "./components/BookList";
import CommentArea from "./components/CommentArea";

import { Component } from "react";
import { Alert, Button, Col, Container, Row } from "react-bootstrap";

import fantasy from "../src/data/books/fantasy.json";
import history from "../src/data/books/history.json";
import horror from "../src/data/books/horror.json";
import romance from "../src/data/books/romance.json";
import scifi from "../src/data/books/scifi.json";

class App extends Component {
  state = {
    books: fantasy,
    //selected: false,
    bookId: null,
  };

  selectBookId = (newId) => this.setState({ bookId: newId });

  render() {
    return (
      <>
        <MyNav titleShop="Mark's Bookshop" />
        <Welcome content="Welcome to our vast collection of books" header="Browse our books!" />
        {/*<AllTheBooks />*/}
        {/*<SingleBook  />*/}
        <Container>
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
          <hr className="mt-0" />
        </Container>
        <Container>
          <Row>
            <Col xs={8}>
              <BookList books={this.state.books} selectBookId={this.selectBookId} />
            </Col>
            <Col xs={4}>
              {this.state.bookId ? (
                <CommentArea id={this.state.bookId} />
              ) : (
                <Alert key="info" variant="info">
                  Choose a book to view comments
                </Alert>
              )}
            </Col>
          </Row>
        </Container>
        <MyFooter address="2686 Golf Course Drive, Manassas, VA 22110" phoneNumber="+1 703-369-3791" pIva="USA38723312" title="&#169; Mark's Bookshop" />
      </>
    );
  }
}

export default App;
