// routes/notesRoutes.js
const express = require('express');
const router = express.Router();
const notesController = require('../controlers/notesController');

router.post('/', notesController.createNote);
router.get('/', notesController.getAllNotes);
router.get('/:id', notesController.getNoteById);
router.put('/:id', notesController.updateNoteById);
router.delete('/:id', notesController.deleteNoteById);

module.exports = router;
