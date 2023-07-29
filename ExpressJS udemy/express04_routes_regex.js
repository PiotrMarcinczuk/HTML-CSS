const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Main page');
})

app.get('/users/:id([0-9]{1,8})/:name-:age', (req, res) => { // mozna sciezke dalej np /news/:year([0-9]{4}-:month)
    res.send('Route for User ID: ' + req.params.id + '/' + req.params.name + '-' + req.params.age);
}) // /users/12345 [0-9]{1,8} musi zawierac od 1 do 8 znakow, ktora musza byc liczbami od 0 do 9

app.get('/article/:id(*)', function(req, res){
    res.send('Route for article: ' + req.params.id);
}) // /article/new-post/ess dowolna ilosc znakow cyfr po /article/

var handler = function(req, res, next){
    res.send('Route api/rest: ' + req.params.param);
}

app.get('/api/:param(*)', handler); // /api/save/23
app.get('/rest/:param(*)', handler); // /rest/sznyc-23

app.get('*', (req, res) => {
    res.send('404 - invalid url');
})
app.listen(8080);