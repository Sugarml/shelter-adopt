// server/seed.js
const mongoose = require("mongoose");
const Animal = require("./models/Animal"); // 確保有 Animal.js

mongoose.connect("mongodb://127.0.0.1:27017/shelter-adopt", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(async () => {
  console.log("MongoDB connected");

 const Animals = [
  {
    name: "Lucky",
    type: "Dog",
    age: "2歲",
    description: "活潑可愛，喜歡散步。",
    image: "/images/lucky.jpg"
  },
  {
    name: "Mimi",
    type: "Cat",
    age: "1歲",
    description: "安靜又親人。",
    image: "/images/mimi.jpg"
  }
];

  await Animal.insertMany(Animals);
  console.log("Fake data inserted");

  process.exit(0);
})
.catch(err => console.error(err));
