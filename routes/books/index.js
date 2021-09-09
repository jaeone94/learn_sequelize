const controller = require('./books.controller');
const router = require('express').Router();

router.get('/', controller.getBookAll);
router.post('/', controller.createBook);
router.put('/', controller.updateBook);
router.delete('/:id', controller.deleteBook);

module.exports = router;