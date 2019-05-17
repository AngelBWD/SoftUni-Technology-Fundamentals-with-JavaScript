const Mountaineer = require('../models/Mountaineer');

module.exports = {
    getIndex: function (req, res) {
        Mountaineer.find({}).then(function (mountaineers) {
            res.render('index', { mountaineers });
          });
    },
    getCreate: function (req, res) {
        res.render('create');
    },
    postCreate: function (req, res) {
        let mountaineer = req.body;
        Mountaineer.create(mountaineer).then(function () {
      res.redirect('/');
    });
    },
    getEdit: function (req, res) {
        let id = req.params.id;
        Mountaineer.findById(id).then(function (mountaineer) {
      res.render('edit', { mountaineer });
    });
    },
    postEdit: function (req, res) {
        let id = req.params.id;
    let newMountaineer = req.body;
    Mountaineer.findByIdAndUpdate(id, newMountaineer).then(function () {
      res.redirect('/');
   });;
    },
    getDelete: function (req, res) {
        let id = req.params.id;
        Mountaineer.findById(id).then(function (mountaineer) {
          res.render('delete', { mountaineer });
        });
    },
    postDelete: function (req, res) {
        let id = req.params.id;
        Mountaineer.findByIdAndRemove(id).then(function () {
           res.redirect('/');
        });
    }
};