var express = require('express');
var router = express.Router();

// obsluga localhost:8080/test
router.get('/', (req, res) => {
    res.status(200).send('/test route - get method from module');
})

router.post('/', (req, res) => {
    res.status(200).send('/test route - post method from module');
})

module.exports = router;