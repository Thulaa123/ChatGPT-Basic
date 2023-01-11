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
        prompt: "Say this is a test",
        max_tokens: 7,
        temperature: 0,
    });
    console.log(response.data)
    if(response.data){
        if(response.data.choices){
        }
    }
});

app.listen(port, () => {
  console.log("App is listening on http://localhost:3001");
});
