const express = require('express');
const router = express.Router();
const commentCtrl = require('../../controllers/api/comments');

// POST /api/comments (Post a new comment);
router.post('/:id', commentCtrl.create);
// PUT /api/comments (Update a comment);
router.put('/:id', commentCtrl.update);
// DELETE /api/comments (Delete a comment);
router.delete('/:id', commentCtrl.delete);

module.exports = router;