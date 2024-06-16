const express = require('express');
const { createNote, getAllNotes, getNoteById, updateNoteById, deleteNoteById } = require('../Controlers/subtopicNotesIntroController');
const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Note:
 *       type: object
 *       required:
 *         - title
 *         - content
 *         - subtopicId
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the note
 *         title:
 *           type: string
 *           description: The title of the note
 *         content:
 *           type: string
 *           description: The content of the note
 *         subtopicId:
 *           type: string
 *           description: The id of the related subtopic
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: The date the note was created
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: The date the note was updated
 *       example:
 *         id: 60d5f3f5e7b0c2b2f8f0c77a
 *         title: Introduction to Adverbs
 *         content: Adverbs are words that modify verbs, adjectives, or other adverbs.
 *         subtopicId: 5f8d0d55b54764421b7160c9
 *         createdAt: 2022-01-10T10:00:00Z
 *         updatedAt: 2022-01-10T10:00:00Z
 */

/**
 * @swagger
 * tags:
 *   name: Notes
 *   description: The notes managing API
 */

/**
 * @swagger
 * /notes:
 *   post:
 *     summary: Create a new note
 *     tags: [Notes]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Note'
 *     responses:
 *       201:
 *         description: The note was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Note'
 *       500:
 *         description: Some server error
 */
router.post('/', createNote);

/**
 * @swagger
 * /notes:
 *   get:
 *     summary: Returns the list of all the notes
 *     tags: [Notes]
 *     responses:
 *       200:
 *         description: The list of the notes
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Note'
 *       500:
 *         description: Some server error
 */
router.get('/', getAllNotes);

/**
 * @swagger
 * /notes/{id}:
 *   get:
 *     summary: Get the note by id
 *     tags: [Notes]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The note id
 *     responses:
 *       200:
 *         description: The note description by id
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Note'
 *       404:
 *         description: The note was not found
 *       500:
 *         description: Some server error
 */
router.get('/:id', getNoteById);

/**
 * @swagger
 * /notes/{id}:
 *   put:
 *     summary: Update the note by id
 *     tags: [Notes]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The note id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Note'
 *     responses:
 *       200:
 *         description: The note was updated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Note'
 *       404:
 *         description: The note was not found
 *       500:
 *         description: Some server error
 */
router.put('/:id', updateNoteById);

/**
 * @swagger
 * /notes/{id}:
 *   delete:
 *     summary: Remove the note by id
 *     tags: [Notes]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The note id
 *     responses:
 *       200:
 *         description: The note was deleted
 *       404:
 *         description: The note was not found
 *       500:
 *         description: Some server error
 */
router.delete('/:id', deleteNoteById);

module.exports = router;
