const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth'); // Ensure this line appears only once
const dashboardRoutes = require('./routes/dashboard'); // Other routes if needed
const app = express();
require('dotenv').config();

app.use(express.json());
app.use(express.static('public'));
app.use('/api/auth', authRoutes); // Use authRoutes only once
app.use('/api/dashboard', dashboardRoutes); // Use dashboardRoutes once

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));
  const PORT = process.env.PORT || 3000; // Set the port

  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
module.exports = app;
