const OpenAI = require('openai');
const { Configuration, OpenAIApi } = OpenAI;

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const port = 3001;

const configuration = new Configuration({
    organization: "org-d4SpfISokIaLlS7gim8pCfLS",
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

app.use(bodyParser.json());
app.use(cors());

app.post("/", (req, res) => {
  res.json({
    message: "hello world"
  });
});

app.listen(port, () => {
  console.log("App is listening on http://localhost:3001");
});
