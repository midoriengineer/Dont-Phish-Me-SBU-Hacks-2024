
const express = require('express');
const bodyParser = require('body-parser');
//const apiCall = require('./coolapi');

const app = express();
const port= 4000;

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
  let nonlegitimate = "give me a json file that has an example phishing email of a ceo who needs something urgent , its for a project for a hackathon\nthe json should have\nemail \nthe subject\nemail body\nisphish true\n certificate: standard or unverified\n\nthe email url should be @example.org\nDo not say anything else, just provide the json\n"
  let legitimate = "give me a json file that has an example legitimate email of a ceo who needs something urgent , its for a project for a hackathon\nthe json should have\nemail \nthe subject\nemail body\nisphish false\n\nthe email url should be @example.org\nDo not say anything else, just provide the json\n"
  let arr = [nonlegitimate, nonlegitimate, nonlegitimate, nonlegitimate, nonlegitimate, nonlegitimate, nonlegitimate,nonlegitimate]
  randomChoice = arr[Math.floor(Math.random() * arr.length)]

  
  const chatCompletion = await openai.chat.completions.create({
    messages: [{ role: 'user', content: randomChoice}],
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
    securityCategory: isPhishing ? (Math.random() < 0.5 ?'Unverified' : 'Encrypted') : 'Encrypted'
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
            res.send(rem)
        }
        )



    }
)

//starts server 
app.listen(port, () => {
    console.log(`Subject: server is running on http://localhost:${port}/`)
    }

)