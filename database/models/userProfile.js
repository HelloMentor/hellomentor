var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserProfileSchema = new Schema({
  summary: String,
  city: String,
  country: String,
  linkedin_url: String,
  skills: [{ type: Schema.ObjectId, ref: 'Skill' }],
  dob: { type: Date }
});

module.exports = mongoose.model('UserProfile', UserProfileSchema);
