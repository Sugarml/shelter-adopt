const mongoose = require("mongoose");

const animalSchema = new mongoose.Schema({
  name: String,
  type: String,
  age: String,
  description: String,
  image: String
});

module.exports = mongoose.model("Animal", animalSchema);
