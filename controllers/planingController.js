const db = require("../models");


// Defining methods for the planingController
module.exports = {
  
  saveStory: function (req, res) {
    db.Planing.create(req.body)
      .then(dbModel => res.status(201).json(dbModel))
      .catch(err => res.status(422).json(err));
      //.catch(err => res.send(err));
  }
};
