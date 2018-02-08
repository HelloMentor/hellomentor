var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  u_name: { type: String, required: true, max: 15 },
  role: { type: Schema.ObjectId, required: true, ref: 'Role' },
  f_name: { type: String, required: true },
  l_name: { type: String, required: true },
  email: { type: String, required: true },
  dob: { type: Date }
});

UserSchema
.virtual('name')
.get(function () {
  return this.f_name + ' ' + this.l_name;
});

UserSchema
.virtual('url')
.get(function () {
  return '/user/' + this._id;
});

module.exports = mongoose.model('User', UserSchema);
