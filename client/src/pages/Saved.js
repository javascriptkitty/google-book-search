import React, { Component } from "react";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import Hero from "../components/Hero";
import BookCard from "../components/BookCard";

class Saved extends Component {
  state = {
    book: {}
  };

  componentDidMount() {
    this.getBook();
  }

  getBook() {
    API.getBook(this.props.params.id).then(res =>
      this.setState({ book: res.data })
    );
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Hero />
          </Col>
        </Row>
        <Row>
          <h2> Saved Books </h2>
        </Row>
        <Row>
          {this.state.books.map(book => (
            <BookCard
              key={book.id}
              title={book.title}
              link={book.link}
              image={book.image}
              authors={book.author}
            />
          ))}
        </Row>
      </Container>
    );
  }
}

export default Saved;
