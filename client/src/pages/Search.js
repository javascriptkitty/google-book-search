import React, { Component } from "react";
import API from "../utils/API";
import { Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import FormBtn from "../components/FormBtn";
import SearchBar from "../components/SearchBar";
import BookCard from "../components/BookCard";
import "./style.css";

class Search extends Component {
  state = {
    search: "",
    key: "",
    books: [],
    title: "",
    image: "",
    author: "",
    description: "",
    btnTxt: "Search"
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.setState({
      btnTxt: "Searching..."
    });
    console.log("i love donuts");

    API.findBooks(this.state.search)
      .then(res =>
        this.setState({
          books: res.data,
          btnTxt: "Search"
        })
      )
      .catch(err => console.log(err));
  };

  saveBook = bookId => {
    debugger;
    const book = this.state.books.find(({ _id }) => _id === bookId);
    API.saveBook(book);
  };

  renderBooks(books) {
    if (books.length) {
      //  debugger;
      return (
        <List>
          {books.map(({ _id, link, title, authors, image, description }) => (
            <ListItem key={_id}>
              <BookCard
                id={_id}
                link={link}
                saveBook={this.saveBook}
                showDelete={false}
                showSave={true}
                title={title}
                authors={authors}
                image={image}
                description={description}
              />
            </ListItem>
          ))}
        </List>
      );
    } else {
      return "No Books to display!";
    }
  }

  render() {
    // console.log(this.state.books);
    return (
      <Container>
        <form>
          <SearchBar
            value={this.state.search}
            onChange={this.handleInputChange}
            name="search"
            placeholder="Enter a book title"
          />
          <FormBtn onClick={this.handleFormSubmit}>{this.state.btnTxt}</FormBtn>
        </form>

        <div>{this.renderBooks(this.state.books)}</div>
      </Container>
    );
  }
}

export default Search;
