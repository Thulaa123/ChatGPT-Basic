const OpenAI = require('openai');
const { Configuration, OpenAIApi } = OpenAI;

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const port = 3001;

const configuration = new Configuration({
    organization: "org-d4SpfISokIaLlS7gim8pCfLS",
    apiKey: "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",
});
const openai = new OpenAIApi(configuration);

app.use(bodyParser.json());
app.use(cors());

app.post("/", async (req, res) => {
    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: "",
        max_tokens: 100,
        temperature: 0,
    });
    console.log(response.data)
    res.json({
        message: "hello world"
    });
});

app.listen(port, () => {
  console.log("App is listening on http://localhost:3001");
});
