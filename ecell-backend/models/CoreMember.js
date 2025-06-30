const mongoose = require('mongoose');
const CoreMemberSchema = new mongoose.Schema({
  name: String,
  position: String,
  img: String
});
module.exports = mongoose.model('CoreMember', CoreMemberSchema);