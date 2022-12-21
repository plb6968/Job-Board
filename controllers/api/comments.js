const Job = require('../../models/job');

module.exports = {
  create,
  update,
  delete: deleteComment 
}

async function create(req, res) {
  req.body.user = req.user._id;
  req.body.userName = req.user.name;
  const job = await Job.findById(req.params.id);
  job.comments.push(req.body);
  await job.save();
  console.log(job);
  const allJobs = await Job.find({});
  res.json(allJobs);
}

async function update(req, res) {
  
}

async function deleteComment(req,res) {

}