const express = require('express');
const { registerUser, loginUser } = require('../controllers/userController'); // Ensure correct path
const router = express.Router();

// POST request for user registration
router.post('/register', registerUser);

// POST request for user login
router.post('/login', loginUser);

module.exports = router;
