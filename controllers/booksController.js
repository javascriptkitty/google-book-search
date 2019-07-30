const db = require("../models");
const axios = require("axios");
const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=";
// const APIKEY = "AIzaSyB6bQbILSH2fiFIw9alVhxs5EXiBAHkbeI"

module.exports = {
  findById: function(req, res) {
    db.Book.findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  find: function(req, res) {
    db.Book.find()
      .then(dbModel => {
        console.log(dbModel);
        res.json(dbModel);
      })
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    console.log(req);
    db.Book.create(req.body)
      .then(dbModel => {
        res.json(dbModel);
      })
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Book.findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(result => {
        res.json(result);
      })
      .catch(err => res.status(422).json(err));
  },
  search: function(req, res) {
    axios.get(BASEURL + req.params.search).then(response => {
      const books = response.data.items.map(book => {
        const {
          title,
          authors,
          description,
          imageLinks,
          infoLink
        } = book.volumeInfo;

        const bookJson = {
          id: book.id,
          title: title,
          authors: authors,
          description: description,
          link: infoLink,
          image: imageLinks.smallThumbnail
        };

        return bookJson;
      });

      res.json(books);
    });
  }
};
