var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var RoleSchema = new Schema({
  type: { type: String, required: true, enum: ['Mentee', 'Mentor', 'Mod'], default: 'Mentee'}
});

module.exports = mongoose.model('Role', RoleSchema);
