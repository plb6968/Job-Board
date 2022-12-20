const express = require('express');
const router = express.Router();
const commentCtrl = require('../../controllers/api/comments');

// POST /api/comments (Post a new comment);
router.post('/:id', commentCtrl.create);

module.exports = router;