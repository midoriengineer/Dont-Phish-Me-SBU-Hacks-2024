
const express = require('express');
const bodyParser = require('body-parser');
const apiCall = require('./coolapi.js');

const app = express();
const port= 3000;

// This will be the middleware to parse JSON files
app.use(bodyParser.json());

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
        res.json(apiCall())
    }
)

//starts server 
app.listen(3000, () => {
    console.log('Subject: server is running on http://localhost:3000/')
    }

)