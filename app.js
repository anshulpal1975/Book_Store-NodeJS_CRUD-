require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const bookRoutes = require('./routes/bookRoutes'); // Your route files
const userRoutes = require('./routes/userRoutes'); // Import user routes

const app = express();
app.use(express.json()); // Middleware to parse JSON bodies


mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Use book routes
app.use('/api/books', bookRoutes);


// Use the user routes
app.use('/api/users', userRoutes);

// Default route
app.get('/', (req, res) => {
  res.send('Welcome to the Bookstore API');
});


// Set up the server
const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
