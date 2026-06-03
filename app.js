const express = require('express');

const app = express();

const PORT = 3000;

app.get('/api/v1/hello-api', (req, res) => {
    res.send('Hello World, Welcome to Backend Code and API')
})

app.get('/api/v1/hello-json', (req, res) => {
    res.json({
        message: 'Meow'
    })
})

app.listen (PORT, () =>{
    console.log('Server API App is listening on port $(PORT)')
})