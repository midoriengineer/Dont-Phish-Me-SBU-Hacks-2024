
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
  let data = {
    Subject: "Job Opportunity",
    Body: "Exciting job opportunity available! Apply now and join our dynamic team.",
    FromName: "Human Resources",
    FromEmail: "hr@companyabc.com",
    Attachments: "job_application_form.docx",
    IsPhishing: "false",
    Security: "true",
  };

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
  let legitimate = `You are a teacher that generates emails for users to inform them phishing emails how bad phishing emails are.

  Your response should include a JSON object that should fill out the model provided and thats it.
  
  Use real names for first and last, subject and body should be indicative of whether they are phishing scams or real emails you could recieve in a workplace.

Write safe emails that are not phishing and that are safe for the user to click on,also do not use links, best practices is telling the employee to come to the office or schedule a meeting or phone call
  
  Maximum Word for Category: 
  Subject - 12.
  Body - 35.
  
  If isPhish true, it can be unverified or secure. If isPhish false, it can only be secure.
  
  If a link is included, create a fake dummy link with 8 random integers and characters for isPhish true email.
  
  JSON Body is below:
  
  ${dataModel.emailModel}
  
  Avoid including any other input other than filling out the json body object. AND DO NOT USE /n for the object, just make the json one line, return it as a json and not as a string`
  let legitimate = `You are a teacher that generates emails for users to inform them phishing emails how bad phishing emails are.

  Your response should include a JSON object that should fill out the model provided and thats it.
  
  Use real names for first and last, subject and body should be indicative of whether they are phishing scams or real emails you could recieve in a workplace.

Write safe emails that are not phishing and that are safe for the user to click on,also do not use links, best practices is telling the employee to come to the office or schedule a meeting or phone call
  
  Maximum Word for Category: 
  Subject - 12.
  Body - 35.
  
  If isPhish true, it can be unverified or secure. If isPhish false, it can only be secure.
  
  If a link is included, create a fake dummy link with 8 random integers and characters for isPhish true email.
  
  JSON Body is below:
  
  ${dataModel.emailModel}
  
  Avoid including any other input other than filling out the json body object. AND DO NOT USE /n for the object, just make the json one line, return it as a json and not as a string`


  let arr = [nonlegitimate, legitimate, nonlegitimate, legitimate, nonlegitimate, legitimate, nonlegitimate, legitimate]
  randomChoice = arr[Math.floor(Math.random() * arr.length)]

  const chatCompletion = await openai.chat.completions.create({
    messages: [{ role: 'assistant', content: randomChoice }],
    model: 'gpt-3.5-turbo',
  });
  return chatCompletion.choices[0].message;

}



app.get('/', (req, res) => {
    // send json response
    // turn string into json
    str = "{'message': 'Hello, World!'}";
    // using async
    // send apiCall to the client
    apiCall().then((rem) => {
      let extractedContent = rem.content.match(/\{([^}]+)\}/)[0];
      let text = rem.content;
      const startIndex = text.indexOf('{');
      const endIndex = text.lastIndexOf('}');
      const jsonObjectString = text.substring(startIndex, endIndex + 1);
      console.log(jsonObjectString);
      res.send(JSON.parse(jsonObjectString));
      //if json error, send random data

      
    }).catch((error) => {
      // Handle errors by sending random data from the array
      const randomIndex = Math.floor(Math.random() * dataModel.dummyEmails.length);
      res.status(500).send(dataModel.dummyEmails[randomIndex]);
    });
  });

//starts server 
app.listen(port, () => {
  console.log(`Subject: server is running on http://localhost:${port}/`)
})