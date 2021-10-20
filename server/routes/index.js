//To put all route here if you want to add in future

const router = require('express').Router();
var bookRoute = require('./bookRoute');

router.use('/book',bookRoute);

module.exports = router;