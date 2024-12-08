const express = require("express");
const mongoose = require("mongoose");

const cors = require("cors");
const dishes = require("./routes/dishRoutes");
const userRoutes = require("./routes/userRoutes");

const app = express();
const port = 3001;

app.use(cors());

app.use(express.json());

mongoose
    .connect(
      "mongodb+srv://messagesarfarazhussain:XOKfSqRHcAZ3S7eO@gfg-mern.hlb4k.mongodb.net/?retryWrites=true&w=majority&appName=GFG-MERN"
    )
  .then(() => {
    console.log("Connected");
  })
  .catch((err) => {
    console.log(err);
  });

// middleware
app.use((req, res, next) => {
  console.log("Time:", Date.now());
  next();
});

app.get("/", (req, res) => {
  res.json("Hello");
});

app.use("/api", dishes);
app.use("/api/user", userRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
