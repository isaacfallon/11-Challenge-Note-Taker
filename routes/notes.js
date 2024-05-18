// Import express and call the Router method
const notes = require('express').Router();

// Destructure the modules we need from the 'fsUtils' file
const { readFromFile, readAndAppend } = require('../helpers/fsUtils');

// Destructure the 'uuidv4' module so we can add individual id's for each note. 
const { v4: uuidv4 } = require('uuid');

// GET Route for retrieving all notes
notes.get('/', (req, res) => {
  readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});

// POST Route for adding a new note
notes.post('/', (req, res) => {
  const { title, text } = req.body;

  if (req.body) {
    const newNote = {
      title,
      text,
      id: uuidv4(),
    };
    readAndAppend(newNote, './db/db.json');
    res.json(`Note added successfully`);
  } else {
    res.error('Error in adding note');
  }
});

// DELETE Route for deleting an existing note
/* "In order to delete a note, you'll need to read all notes from the db.json file, 
 remove the note with the given id property, and then rewrite the notes to the db.json file."" */
notes.delete('/api/notes:id', (req, res) => {
});

module.exports = notes;