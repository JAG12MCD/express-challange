const express = require('express');
const notesControllers = require('./controllers');
const router = express.Router();

router.get('/', notesControllers.getAllNotes);
router.post('/', notesControllers.saveNote);
router.delete('/:id', notesControllers.deleteNote);

module.exports = router;
