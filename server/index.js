
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port= 3000;

// This will be the middleware to parse JSON files
app.use(bodyParser.json());

// Route to the random emails // basically what was being done in the emailRouter.js
app.post('/generate-emails', (req, res) => {
// Extract the subject and body from the request body
const { subject, body } = req.body;

// Generate a random number (0 or 1) to determine if it's a phishing link or a legitimate link
const isPhishing = Math.random() < 0.5;   

// Construct the phishing email object
const email = {
    subject: subject,
    body: body,
    link: isPhishing ? 'http://phishing.example.com' : 'http://legitimate.example.com',
    isPhishing: isPhishing
};

//this is what will be returned
res.json(email);
});

//This will work as a default route
app.get('/', (req, res) => {
    //send json response
    //turn string into json
        str = "{'message': 'Hello, World!'}"
        res.json(str)
    }
)

//starts server 
app.listen(3000, () => {
    console.log('Subject: server is running on http://localhost:3000/')
    }

)