import React from "react";
import { Container, Row, Col } from "../Grid";
import Input from "../Input";
import "./style.css";

const SearchBar = props => {
  return (
    <Container fluid className="searchBar">
      <Row>
        <h2>Book Search</h2>
      </Row>
      <Row>
        <h5>Book</h5>
      </Row>
      <Row>
        <Input {...props} />
      </Row>
    </Container>
  );
};

export default SearchBar;
