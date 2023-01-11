const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(cors());

app.post("/", (req, res) => {
  res.json({
    message: "hello world"
  });
});

app.listen(port, () => {
  console.log("App is listening on http://localhost:3000");
});
