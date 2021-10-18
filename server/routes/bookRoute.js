const router = require('express').Router();
const bookControler = require('../controllers/book');

router.get('/',bookControler.get_books);
router.get('/:id',bookControler.get_book);
router.post('/',bookControler.create_book);
router.delete('/:id',bookControler.delete_book);
router.put('/:id',bookControler.update_book);

module.exports = router;