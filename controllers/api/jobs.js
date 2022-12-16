const Job = require('../../models/job');

module.exports = {
  create,
  //index
}


async function create(req, res) {
  try {
    req.body.user = req.user._id;
    const job = await Job.create(req.body);
    res.json(job);
  } catch(err) {
    res.status(400).json(err);
  }
}

//async function index(req, res) {
  //const job = await Job.find({user: req.user_id})
  //res.json(job);
//}