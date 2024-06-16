const express = require('express');
const { createTestQuestion, getAllTestQuestions, getTestQuestionById, updateTestQuestionById, deleteTestQuestionById } = require('../Controlers/testQuestionSchemaController');
const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     TestQuestion:
 *       type: object
 *       required:
 *         - questionText
 *         - options
 *         - correctAnswer
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the test question
 *         questionText:
 *           type: string
 *           description: The text of the question
 *         options:
 *           type: array
 *           items:
 *             type: string
 *           description: The options for the question
 *         correctAnswer:
 *           type: string
 *           description: The correct answer for the question
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: The date the test question was created
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: The date the test question was last updated
 *       example:
 *         id: 60d5f3f5e7b0c2b2f8f0c77a
 *         questionText: "What is the capital of France?"
 *         options: ["Paris", "London", "Rome"]
 *         correctAnswer: "Paris"
 *         createdAt: 2022-01-10T10:00:00Z
 *         updatedAt: 2022-01-10T10:00:00Z
 */

/**
 * @swagger
 * tags:
 *   name: Test Questions
 *   description: The test questions managing API
 */

/**
 * @swagger
 * /test-questions:
 *   post:
 *     summary: Create a new test question
 *     tags: [Test Questions]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/TestQuestion'
 *     responses:
 *       201:
 *         description: The test question was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/TestQuestion'
 *       500:
 *         description: Some server error
 */
router.post('/', createTestQuestion);

/**
 * @swagger
 * /test-questions:
 *   get:
 *     summary: Returns the list of all the test questions
 *     tags: [Test Questions]
 *     responses:
 *       200:
 *         description: The list of test questions
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/TestQuestion'
 *       500:
 *         description: Some server error
 */
router.get('/', getAllTestQuestions);

/**
 * @swagger
 * /test-questions/{id}:
 *   get:
 *     summary: Get test question by id
 *     tags: [Test Questions]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The test question id
 *     responses:
 *       200:
 *         description: The test question description by id
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/TestQuestion'
 *       404:
 *         description: The test question was not found
 *       500:
 *         description: Some server error
 */
router.get('/:id', getTestQuestionById);

/**
 * @swagger
 * /test-questions/{id}:
 *   put:
 *     summary: Update the test question by id
 *     tags: [Test Questions]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The test question id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/TestQuestion'
 *     responses:
 *       200:
 *         description: The test question was updated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/TestQuestion'
 *       404:
 *         description: The test question was not found
 *       500:
 *         description: Some server error
 */
router.put('/:id', updateTestQuestionById);

/**
 * @swagger
 * /test-questions/{id}:
 *   delete:
 *     summary: Remove the test question by id
 *     tags: [Test Questions]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The test question id
 *     responses:
 *       200:
 *         description: The test question was deleted
 *       404:
 *         description: The test question was not found
 *       500:
 *         description: Some server error
 */
router.delete('/:id', deleteTestQuestionById);

module.exports = router;
