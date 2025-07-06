const express = require('express');
const connectDB = require('./db');
const CoreTeamRoutes = require('./routes/coreTeam');
const FoundersRoute = require('./routes/founders');
require('dotenv').config();

const app = express(); // ✅ Define app early

const PORT = 5000;

// Connect DB
connectDB();

// Middleware to parse JSON
app.use(express.json());

// Use the routes
app.use('/api/core-team', CoreTeamRoutes);
app.use('/api/founders', FoundersRoute); // ✅ Now it's safe to use

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
