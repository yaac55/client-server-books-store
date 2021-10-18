const router = require('express').Router();
var bookRoute = require('./bookRoute');

router.use('/book',bookRoute);

module.exports = router;