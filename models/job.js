const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const jobSchema = new Schema ({
  title: {
    type: String, 
    required: true
  },
  company: {
    type: String, 
    required: true
  },
  location: {
    type: String, 
    required: true
  },
  description: {
    type: String, 
    required: true
  },
  responcibilities: {
    type: String, 
    required: true
  },
  skills: {
    type: String, 
    required: true
  },
  benifets: {
    type: String, 
    required: true
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
});

module.exports = mongoose.model('Job', jobSchema);