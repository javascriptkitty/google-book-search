import React from "react";
import { Container, Row, Col } from "../Grid";
import Input from "../Input";
import "./style.css";

const SearchBar = props => {
  return (
    <Container fluid className="searchBar">
      <Row>
        <h3>Book Search</h3>
      </Row>
      <Row>
        <p>Book</p>
      </Row>
      <Row>
        <Input {...props} />
      </Row>
    </Container>
  );
};

export default SearchBar;
