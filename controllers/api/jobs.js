const Job = require('../../models/job');

module.exports = {
  create
}

async function create(req, res) {
  await Job.create(req.body);
}