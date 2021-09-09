const controller = require('./languages.controller');
const router = require('express').Router();

router.get('/', controller.getLanguagesAll);
router.get('/:id', controller.getLanguagesOne);
router.post('/', controller.createLanguages);
router.put('/', controller.updateLanguages);
router.delete('/:id', controller.deleteLanguages);

module.exports = router;