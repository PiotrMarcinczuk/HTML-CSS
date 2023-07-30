const express = require('express');
const app = express();

app.use(function(req, res, next){
    console.log('Request: ' + req.method, ' ', req.url);
    req.requestTime = Date.now();
    next(); // bez tego next nie bedzie dzialac
}, function(req, res, next){
    console.log('Druga fun middlewate');
    next();
}
);

app.get('/', (req, res) => {
    res.status(200).send('Hi ' + req.requestTime);
})

app.get('/user/:id', function(req, res, next){
    console.log('Request: ' + req.method, ' ', req.url);
    req.requestTime = Date.now();
    if(req.params.id === '0' || req.params.id === '5'){
        next();
    }else{
        next('route'); // powoduje ze przechodzimy do nastepnego .get
    }
}, function(req, res, next){
    res.send('Brak dostepu');
    next();
}
);

app.get('/user/:id', (req, res) => {
    res.status(200).send('Hello requestTime: ' + req.requestTime + ' id: ' + req.params.id);
})

app.listen(8080);