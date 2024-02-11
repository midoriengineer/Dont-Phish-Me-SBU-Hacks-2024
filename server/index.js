
const express = require('express');
const bodyParser = require('body-parser');
//const apiCall = require('./coolapi');
const dataModel = require('./dataModel')
const app = express();
const port = 4000;
//cors
const cors = require('cors');
app.use(cors());


// This will be the middleware to parse JSON files
app.use(bodyParser.json());

const dotenv = require('dotenv').config();
const OpenAI = require('openai');

async function apiCall() {
  //console.log(apiKey)
  const apiKey = dotenv.parsed.OPEN_API_KEY
  const openai = new OpenAI({
    apiKey: apiKey, // This is the default and can be omitted
  });

  let nonlegitimate = `You are a teacher that generates emails for users to inform them phishing emails how bad phishing emails are.

  Your response should include a JSON object that should fill out the model provided and thats it.
  
  Use real names for first and last, subject and body should be indicative of whether they are phishing scams or real emails you could recieve in a workplace.
  
  Maximum Word for Category: 
  Subject - 12.
  Body - 35.
  
  If isPhish true, it can be unverified or secure. If isPhish false, it can only be secure.
  
  If a link is included, create a fake dummy link with 8 random integers and characters for isPhish true email.
  
  JSON Body is below:
  
  ${dataModel.emailModel}
  
  Avoid including any other input other than filling out the json body object. AND DO NOT USE /n for the object, just make the json one line, return it as a json and not as a string`
  let legitimate = "hello"
  let arr = [nonlegitimate, nonlegitimate, nonlegitimate, nonlegitimate, nonlegitimate, nonlegitimate, nonlegitimate, nonlegitimate]
  randomChoice = arr[Math.floor(Math.random() * arr.length)]

  const chatCompletion = await openai.chat.completions.create({
    messages: [{ role: 'assistant', content: nonlegitimate }],
    model: 'gpt-3.5-turbo',
  });
  return chatCompletion.choices[0].message;

}




// Route to the random emails // basically what was being done in the emailRouter.js
app.post('/generate-emails', (req, res) => {
  // Extract the subject and body from the request body
  const { subject, body } = req.body;
  const apiCall = require('./coolapi.js');
  // Generate a random number (0 or 1) to determine if it's a phishing link or a legitimate link
  const isPhishing = Math.random() < 0.5;

  // Construct the phishing email object
  const email = {
    subject: subject,
    body: body,
    link: isPhishing ? 'http://phishing.example.com' : 'http://legitimate.example.com',
    isPhishing: isPhishing,
    // New Security Category , Added within Email
    // If it is a phishing email, the security category is 'Unverified' or 
    securityCategory: isPhishing ? (Math.random() < 0.5 ? 'Unverified' : 'Encrypted') : 'Encrypted'
  };

  //this is what will be returned // sends as JSON response
  res.json(email);
});

//This will work as a default route
app.get('/', (req, res) => {
  //send json response
  //turn string into json
  str = "{'message': 'Hello, World!'}"
  //using async
  //send apiCall to the client

  apiCall().then((rem) => {

    let extractedContent = rem.content.match(/\{([^}]+)\}/)[0];
    let text = rem.content;
    const startIndex = text.indexOf('{');
    const endIndex = text.lastIndexOf('}');
    const jsonObjectString = text.substring(startIndex, endIndex + 1);
    console.log(jsonObjectString);
    res.send(JSON.parse(jsonObjectString));
  }
  )



}
)

//starts server 
app.listen(port, () => {
  console.log(`Subject: server is running on http://localhost:${port}/`)
}

)