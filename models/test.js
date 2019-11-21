const mongoose = require("mongoose");


mongoose.connect('mongodb://localhost:27017/planing_database', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});