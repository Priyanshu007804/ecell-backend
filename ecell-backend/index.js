const express = require('express');
const connectDB = require('./db');
const coreTeamRoutes = require('./routes/coreTeam');
require('dotenv').config();
const foundersRoute = require("./routes/founders");
app.use("/api/founders", foundersRoute);
const app = express();
const PORT = 5000;

// Connect DB
connectDB();

// Middleware to parse JSON
app.use(express.json());

// Use the routes
app.use('/api', coreTeamRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
