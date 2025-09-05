// server/clearAnimals.js
const mongoose = require("mongoose");
const Animal = require("./models/Animal");

mongoose.connect("mongodb://127.0.0.1:27017/shelter-adopt", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(async () => {
  await Animal.deleteMany({});
  console.log("All animals deleted!");
  process.exit(0);
})
.catch(err => console.error(err));
