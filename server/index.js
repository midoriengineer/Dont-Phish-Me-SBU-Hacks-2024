
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port= 3000;

// Importing the Router being used 
const emailRouter = require('./routes/emailRouter');

// This will be the middleware to parse JSON files
app.use(bodyParser.json());

//Will this come up as undefined? Check line 6 of emailRouter.js
app.use('/genemails', emailRouter);

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