const express = require('express');
const { createNotesComment, getAllNotesComments, getNotesCommentById, getCommentsBySubtopicId, updateNotesCommentById, deleteNotesCommentById } = require('../Controlers/notesCommentController');
const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: NotesComments
 *   description: API for managing notes comments
 */

/**
 * @swagger
 * /api/v1/notes/comment:
 *   post:
 *     summary: Create a new notes comment
 *     tags: [NotesComments]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - comment
 *               - subtopicId
 *             properties:
 *               comment:
 *                 type: string
 *               subtopicId:
 *                 type: string
 *     responses:
 *       201:
 *         description: The notes comment was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/NotesComment'
 *       400:
 *         description: Invalid input
 */
router.post('/', createNotesComment);

/**
 * @swagger
 * /api/v1/notes/comment:
 *   get:
 *     summary: Get all notes comments
 *     tags: [NotesComments]
 *     responses:
 *       200:
 *         description: A list of notes comments
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/NotesComment'
 */
router.get('/', getAllNotesComments);

/**
 * @swagger
 * /api/v1/notes/comment/{id}:
 *   get:
 *     summary: Get notes comment by ID
 *     tags: [NotesComments]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The notes comment ID
 *     responses:
 *       200:
 *         description: The notes comment description by ID
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/NotesComment'
 *       404:
 *         description: The notes comment was not found
 */
router.get('/:id', getNotesCommentById);

/**
 * @swagger
 * /api/v1/notes/comment/subtopic/{subtopicId}:
 *   get:
 *     summary: Get comments by subtopic ID
 *     tags: [NotesComments]
 *     parameters:
 *       - in: path
 *         name: subtopicId
 *         schema:
 *           type: string
 *         required: true
 *         description: The subtopic ID
 *     responses:
 *       200:
 *         description: The comments for the specified subtopic
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/NotesComment'
 *       404:
 *         description: No comments found for the specified subtopic
 */
router.get('/subtopic/:subtopicId', getCommentsBySubtopicId);

/**
 * @swagger
 * /api/v1/notes/comment/{id}:
 *   put:
 *     summary: Update notes comment by ID
 *     tags: [NotesComments]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The notes comment ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               comment:
 *                 type: string
 *               subtopicId:
 *                 type: string
 *     responses:
 *       200:
 *         description: The notes comment was successfully updated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/NotesComment'
 *       400:
 *         description: Invalid input
 *       404:
 *         description: The notes comment was not found
 */
router.put('/:id', updateNotesCommentById);

/**
 * @swagger
 * /api/v1/notes/comment/{id}:
 *   delete:
 *     summary: Delete notes comment by ID
 *     tags: [NotesComments]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The notes comment ID
 *     responses:
 *       200:
 *         description: The notes comment was successfully deleted
 *       404:
 *         description: The notes comment was not found
 */
router.delete('/:id', deleteNotesCommentById);

module.exports = router;
