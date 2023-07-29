const express = require('express');
const app = express();

// /article/2020/article-test/
// :date = 2020  :title = article-test
app.get('/article/:date/:title', (req, res) => { // : znaczy ze bedziemy chcieli uzyskac wartosc jako zmienna
    res.status(200).send('date: ' + req.params.date + ' ' + 'title: ' + req.params.title);
})

// /12345
app.get('/:id', (req, res) => {
    res.status(200).send('id: ' + req.params.id);
})

app.get('*', (req, res) => {
    res.status(404).send('Nie znaleziono strony');
});

app.listen(8080);