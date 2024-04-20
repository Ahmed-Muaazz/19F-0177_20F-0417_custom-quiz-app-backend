const express = require("express");
const form = require("./routes/form");
const cors = require("cors");

const app = express();
const PORT = 3004;

app.use(express.urlencoded({ extended: false }));

app.use(express.json());

app.use(cors());

app.use("/api", form);

app.get("/", (req, res) => {
  res.send("Hi from server");
});

const start = async () => {
  try {
    app.listen(PORT, () => {
      console.log(`server running on port ${PORT}`);
    });
  } catch (err) {
    console.log(err);
  }
};

start();
