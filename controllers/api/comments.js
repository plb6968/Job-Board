const Job = require('../../models/job');

module.exports = {
  create,
  update,
  delete: deleteComment 
}

async function create(req, res) {
  req.body.user = req.user._id;
  req.body.userName = req.user.name;
  const job = await Job.findById(req.params.jobId);
  job.comments.push(req.body);
  await job.save();
  res.json(job);
}

async function update(req, res) {
  const job = await Job.findById(req.params.id);
  const comment = job.comments.id(req.body.id);
  comment.text = req.body.text;
  await job.save();
  res.json(job);
}

async function deleteComment(req, res) {
  console.log('delete triggered');
  const job = await Job.findOne({'comments._id': req.params.id});
  job.comments.remove(req.params.id);
  await job.save()
  res.json(job);
}