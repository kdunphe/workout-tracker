const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

// Set Up Express
const PORT = process.env.PORT || 3000;
const app = express();

// Set Up App
app.use(logger('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// API Routes
app.use("/api", apiRoutes);

// HTML Routes
app.use("/", htmlRoutes);

// Database Connection
mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/workout-tracker',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    }
  );

// Start the Server
app.listen(PORT, () => {
	console.log(`App running on port ${PORT}!`);
});