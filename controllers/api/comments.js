const Job = require('../../models/job');

module.exports = {
  create
}

async function create(req, res) {
  req.body.user = req.user._id;
  req.body.userName = req.user.name;
  const job = await Job.findById(req.params.id);
  job.comments.push(req.body);
  await job.save();
  const allJobs = await Job.find({});
  res.json(allJobs);
}