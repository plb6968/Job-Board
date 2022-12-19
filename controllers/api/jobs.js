const Job = require('../../models/job');

module.exports = {
  create,
  index,
  show
}



async function create(req, res) {
  try {
    req.body.user = req.user._id;
    const job = await Job.create(req.body);
    const jobs = await Job.find({});
    res.json(jobs);
  } catch(err) {
    res.status(400).json(err);
  }
}

async function index(req, res) {
  try {
    const allJobs = await Job.find({});
    res.json(allJobs);
  } catch(err) {
    res.status(400).json(err);
  }
}


 async function show(req, res) {
   console.log('Show Initiated')
   try {
     const job = await Job.findById(req.params.id);
     res.json(job);
     console.log(job);
   } catch (err) {
     res.status(400).json(err);
   }
 }