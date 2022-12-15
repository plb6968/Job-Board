const express = require('express');
const router = express.Router();
const jobsCTRL = require('../../controllers/api/jobs');


// POST /api/jobs (Create a new Job post)
router.post('/jobs', jobs.create);
