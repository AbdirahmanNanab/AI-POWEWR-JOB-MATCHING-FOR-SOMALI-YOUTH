// const mongoose = require('mongoose');

// const jobSchema = new mongoose.Schema({
//   title: String,
//   description: String,
//   employerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
//   applicants: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
//   shortlisted: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
// }, { timestamps: true });

// module.exports = mongoose.model('Job', jobSchema);


const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  type: {
    type: String,
    enum: ['Full-time', 'Part-time', 'Contract', 'Remote'],
    default: 'Full-time'
  },
  salary: String
}, { 
  timestamps: true 
});

module.exports = mongoose.model('Job', jobSchema);