const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.status(200).send('Hi sznyc');
})

// statyczne pliki serwerowane
// z folderu public i images
app.use('/public', express.static('public'));
app.use('/images', express.static('images'));

app.listen(8080);
