const http = require('http');
const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.status(200).send('Hi sznyc');
})

app.listen(8080, () => {
    console.log('Server started');
})