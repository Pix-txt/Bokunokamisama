const express = require('express');

const app = express();

const PORT = 3000;
// number you want the localhost to look for

const status = {}

app.use(express.urlencoded({extended: true}));
// used to show form function

app.get('/api/v1/hello-api', (req, res) => {
    res.send('Hello World, Welcome to Backend Code and API')
});

app.get('/api/v1/hello-json', (req, res) => {
    res.json({
        message: 'Meow'
    })
});

app.post('/api/v1/submit-form', async (req, res) => {
    const body= req.body;
    console.log('Recieved form data:', body);
    // gets the form body

    const responseData = {
        statusCode: 201,
        message: 'Form data submitted succesfully',
        data: body
    }
    // the response data

    res.status(201).json(responseData);
});

app.listen (PORT, () =>{
    console.log('Server API App is listening on port $(PORT)')
});