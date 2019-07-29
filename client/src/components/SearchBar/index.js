import React from "react";
import { Container, Row, Col } from "../Grid";
import Input from "../Input";

const SearchBar = props => {
  return (
    <Container fluid>
      <Row>
        <Col size="md-12" />
        <h3>Book Search</h3>
        <p>Book</p>
        <Input {...props} />
      </Row>
    </Container>
  );
};

export default SearchBar;
