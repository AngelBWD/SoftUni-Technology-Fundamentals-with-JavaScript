const Book = require('../models/Book');

module.exports = {
  getIndex: function (req, res) {
    Book.find({}).then(function (books) {
      res.render('index', { books });
    });
  },
  getCreate: function (req, res) {
    res.render('create');
  },
  postCreate: function (req, res) {
    let book = req.body;
    Book.create(book).then(function () {
      res.redirect('/');
    });
  },
  getEdit: function (req, res) {
    let id = req.params.id;
    Book.findById(id).then(function (book) {
      res.render('edit', { book });
    });
  },
  postEdit: function (req, res) {
    let id = req.params.id;
    let newBook = req.body;
    Book.findByIdAndUpdate(id, newBook).then(function () {
      res.redirect('/');
   });;
  },
  getDelete: function (req, res) {
    let id = req.params.id;
    Book.findById(id).then(function (book) {
      res.render('delete', { book });
    });
  },
  postDelete: function (req, res) {
    let id = req.params.id;
    Book.findByIdAndRemove(id).then(function () {
       res.redirect('/');
    });
  }
};