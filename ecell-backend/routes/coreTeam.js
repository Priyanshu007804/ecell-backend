const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

// Create a schema for core members
const coreMemberSchema = new mongoose.Schema({
  name: String,
  position: String,
  img: String
});

// Create a model from the schema
const CoreMember = mongoose.model('core_member', coreMemberSchema, 'core_members');

// GET endpoint to fetch all core team members
router.get('/core-team', async (req, res) => {
  try {
    const members = await CoreMember.find();
    res.json(members);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;