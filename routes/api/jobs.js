const express = require('express');
const router = express.Router();
const jobsCtrl = require('../../controllers/api/jobs');


// POST /api/jobs (Create a new Job post)
router.post('/jobs', jobsCtrl.create);

module.exports = router;
