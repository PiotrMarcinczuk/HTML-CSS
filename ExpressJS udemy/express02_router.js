const express = require('express');

const testRouter = require('./express02_routerModule.js');
const app = express();

app.all('/', (req, res) => {
    res.status(200).send('main page, route /');
})

app.use('/test', testRouter);
app.listen(8080);