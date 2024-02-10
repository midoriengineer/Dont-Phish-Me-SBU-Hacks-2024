
const express = require('express');
const app = express();




app.get('/', (req, res) => {
    //send json response
    //turn string into json
        str = "{'message': 'Hello, World!'}"
        res.json(str)
        



    }
)


app.listen(3000, () => {
    console.log('Subject: server is running on http://localhost:3000/')
    }

)

