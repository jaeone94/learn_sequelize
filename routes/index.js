const router = require('express').Router();

const languagesRouter = require('./languages');
const booksRouter = require('./books');

router.use('/languages', languagesRouter);
router.use('/books', booksRouter);

router.get('/', (req, res) => {
    res.send('hello my api server');
})

module.exports = router;