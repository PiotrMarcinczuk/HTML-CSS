const express = require('express');
const path = require('path');
const app = express();

const linksData = [
    {name: 'Home', url: '/'},
    {name: 'Artykuly', url: '/articles'},
    {name: 'Google', url: 'https://google.com'}
];

const viewsPath = path.join(__dirname, 'views') // jest to adres pliku ktory jest aktualnie wykonywany
app.set('views', viewsPath);
app.set('view engine', 'ejs');
app.use(express.static('./public'));

app.get('/', (req, res) => {
    res.render('pages/home', {
        pageHeading: 'Strona www',
        pageTitle: 'Strona główna',
        links: linksData
    });
})

app.listen(8080, () => {console.log('Server started!')});