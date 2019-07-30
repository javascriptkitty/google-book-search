import React, { Component } from "react";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";

import BookCard from "../components/BookCard";

// loadBooks = () => {
//   API.get()
//     .then(res =>
//       this.setState({ books: res.data, title: "", author: "", synopsis: "" })
//     )
//     .catch(err => console.log(err));
// };

// saveBook = id => {
//   API.post(id)

//     .catch(err => console.log(err));
// };

// deleteBook = id => {
//   API.delete(id)
//     .then(res => this.loadBooks())
//     .catch(err => console.log(err));
// };

class Saved extends Component {
  state = {
    books: []
  };

  componentDidMount() {
    this.getBooks();
  }

  getBooks() {
    API.getSavedBooks().then(res => this.setState({ books: res.data }));
  }

  deleteBook = bookId => {
    API.deleteBook(bookId)
      .then(() => this.getBooks())
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12" />
        </Row>
        <Row>
          <h2> Saved Books </h2>
        </Row>
        <Row>
          {this.state.books.map(book => (
            <BookCard
              id={book.id}
              deleteBook={this.deleteBook}
              showDelete={true}
              showSave={false}
              key={book.id}
              title={book.title}
              link={book.link}
              image={book.image}
              authors={book.authors}
            />
          ))}
        </Row>
      </Container>
    );
  }
}

export default Saved;
