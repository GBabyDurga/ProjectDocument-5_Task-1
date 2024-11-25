const express = require('express');
const authenticateToken = require('../middleware/auth');
const authorizeRoles = require('../middleware/role'); // Middleware for role-based access (assuming it's created)
const router = express.Router();

// General dashboard accessible to all authenticated users
router.get('/', authenticateToken, (req, res) => {
  res.json({ message: `Welcome to your dashboard, ${req.user.role}!` });
});

// Example: Admin-specific dashboard route
router.get('/admin', authenticateToken, authorizeRoles('Admin'), (req, res) => {
  res.json({ message: 'Welcome to the Admin dashboard!' });
});

// Example: Analyst-specific dashboard route
router.get('/analyst', authenticateToken, authorizeRoles('Analyst'), (req, res) => {
  res.json({ message: 'Welcome to the Analyst dashboard!' });
});

// Example: Viewer-specific dashboard route
router.get('/viewer', authenticateToken, authorizeRoles('Viewer'), (req, res) => {
  res.json({ message: 'Welcome to the Viewer dashboard!' });
});


  

module.exports = router;
