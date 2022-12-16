const express = require('express');
const router = express.Router();
const jobsCtrl = require('../../controllers/api/jobs');


// POST /api/jobs (Create a new Job post)
router.post('/', jobsCtrl.create);
//router.get('/jobs', jobsCtrl.index);

module.exports = router;
