const express = require('express');
const router = express.Router();
const quizController = require('../Controlers/quizController');

/**
 * @swagger
 * tags:
 *   name: Quizzes
 *   description: API endpoints for managing quizzes
 */

/**
 * @swagger
 * /api/v1/quizzes:
 *   post:
 *     summary: Create a new quiz
 *     tags: [Quizzes]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *             properties:
 *               title:
 *                 type: string
 *     responses:
 *       201:
 *         description: The quiz was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Quiz'
 *       400:
 *         description: Invalid input
 */
router.post('/', quizController.createQuiz);

/**
 * @swagger
 * /api/v1/quizzes:
 *   get:
 *     summary: Get all quizzes
 *     tags: [Quizzes]
 *     responses:
 *       200:
 *         description: A list of quizzes
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Quiz'
 */
router.get('/', quizController.getAllQuizzes);

/**
 * @swagger
 * /api/v1/quizzes/{id}:
 *   get:
 *     summary: Get a quiz by ID
 *     tags: [Quizzes]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the quiz to fetch
 *     responses:
 *       200:
 *         description: The quiz details by ID
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Quiz'
 *       404:
 *         description: Quiz not found
 */
router.get('/:id', quizController.getQuizById);

/**
 * @swagger
 * /api/v1/quizzes/{id}:
 *   put:
 *     summary: Update a quiz by ID
 *     tags: [Quizzes]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the quiz to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *     responses:
 *       200:
 *         description: The quiz was successfully updated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Quiz'
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Quiz not found
 */
router.put('/:id', quizController.updateQuizById);

/**
 * @swagger
 * /api/v1/quizzes/{id}:
 *   delete:
 *     summary: Delete a quiz by ID
 *     tags: [Quizzes]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the quiz to delete
 *     responses:
 *       200:
 *         description: The quiz was successfully deleted
 *       404:
 *         description: Quiz not found
 */
router.delete('/:id', quizController.deleteQuizById);
router.delete('/', quizController.deleteAllQuizzes)

module.exports = router;
