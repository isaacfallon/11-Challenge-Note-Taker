// This file acts as a modular routing file for the project.

// While it is somewhat unnecessary for this challenge, 
// I wanted to include in case we want to easily add more routes in the future.

// Import express and call the Router method
const router = require('express').Router();

// Import our modular router for /notes and use it
const notesRouter = require('./notes');
router.use('/notes', notesRouter);

// Export the modular routing app.
module.exports = router;