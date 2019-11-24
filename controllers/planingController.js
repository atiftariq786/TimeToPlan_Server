const Story = require("../models/planing");

createStory = (req, res) => {
  const body = req.body

  if (!body) {
      return res.status(400).json({
          success: false,
          error: 'You must provide a story',
      })
  }

  const story = new Story(body)

  if (!story) {
      return res.status(400).json({ success: false, error: err })
  }

  story.save()      
      .then(() => {
          return res.status(201).json({
              success: true,
              id: story._id,
              message: 'Story created!',
          })
      })
      .catch(error => {
          return res.status(400).json({
              error,
              message: 'Story not created!',
          }) 
      })
}
module.exports = {
    createStory
    
}

/*
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

*/
