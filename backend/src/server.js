const express = require('express');
const mongoose = require('mongoose');
const config = require('./config');
const todoRoutes = require('./routes/todos');
const authRoutes = require('./routes/auth');

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/api/todos', todoRoutes); // Adjust route base path as needed
app.use('/api/auth', authRoutes);

// Connect to MongoDB
mongoose.connect(config.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Start server
app.listen(config.PORT, () => {
  console.log(`Server running on http://localhost:${config.PORT}`);
});
