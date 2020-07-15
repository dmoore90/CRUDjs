const express = require('express');
const controller = require('../controllers/controller');
const router = express.Router();

router.get('/', controller.getIndex);
router.post('/', controller.postIndex);
router.get('/pages/update_page/:postId', controller.getUpdatePage);
router.get('/pages/test', controller.getTest);

module.exports = router;