const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const animalRoutes = require("./routes/animals");

const app = express();
const PORT = 5000;

// middleware
app.use(cors());
app.use(express.json());

// 連接 MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/shelter-adopt", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB connected"))
.catch(err => console.error(err));

// route
app.use("/api/animals", animalRoutes);

// 簡單 Health Check
app.get("/api/health", (req, res) => {
  res.json({ status: "OK", message: "Server running", timestamp: Date.now() });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});