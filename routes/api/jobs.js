const express = require('express');
const router = express.Router();
const jobsCtrl = require('../../controllers/api/jobs');


// POST /api/jobs (Create a new Job post)
router.post('/', jobsCtrl.create);
// GET /api/jobs (Get jobs from database)
router.get('/', jobsCtrl.index);
// GET /api/jobs/:id (Get job from from database using id);
router.get('/:id', jobsCtrl.show);

module.exports = router;
