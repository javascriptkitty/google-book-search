import React, { Component } from "react";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import BookCard from "../components/BookCard";

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
      <Container>
        <Row>
          <Col size="md-12" />
        </Row>
        <Row>
          <h2> Saved Books </h2>
        </Row>
        <Row>
          <List>
            {this.state.books.map(book => (
              <ListItem>
                <BookCard
                  id={book._id}
                  deleteBook={this.deleteBook}
                  showDelete={true}
                  showSave={false}
                  key={book.id}
                  title={book.title}
                  link={book.link}
                  image={book.image}
                  authors={book.authors}
                  description={book.description}
                />
              </ListItem>
            ))}
          </List>
        </Row>
      </Container>
    );
  }
}

export default Saved;
