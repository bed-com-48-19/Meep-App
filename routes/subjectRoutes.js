// routes/subjectRoutes.js
const express = require('express');
const router = express.Router();
const subjectController = require('../controlers/subjectController');

// Create a new subject
router.post('/', subjectController.createSubject);

// Get all subjects
router.get('/', subjectController.getAllSubjects);

// Get subject by ID
router.get('/:id', subjectController.getSubjectById);

// Update subject by ID
router.put('/:id', subjectController.updateSubjectById);

// Delete subject by ID
router.delete('/:id', subjectController.deleteSubjectById);

module.exports = router;
