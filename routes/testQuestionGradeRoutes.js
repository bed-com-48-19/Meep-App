const express = require('express');
const { createTestQuestionMarks, getAllTestQuestionMarks, getTestQuestionMarksById, updateTestQuestionMarksById, deleteTestQuestionMarksById, getStudentMarksForQuestion } = require('../Controlers/testQuestionMarksController');
const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     TestQuestionMarks:
 *       type: object
 *       required:
 *         - studentId
 *         - questionId
 *         - marks
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the test question marks
 *         studentId:
 *           type: string
 *           description: The id of the student
 *         questionId:
 *           type: string
 *           description: The id of the question
 *         marks:
 *           type: number
 *           description: The marks obtained by the student for the question
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: The date the test question marks were recorded
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: The date the test question marks were updated
 *       example:
 *         id: 60d5f3f5e7b0c2b2f8f0c77a
 *         studentId: 5f8d0d55b54764421b7160c9
 *         questionId: 5f8d0d55b54764421b7160c8
 *         marks: 5
 *         createdAt: 2022-01-10T10:00:00Z
 *         updatedAt: 2022-01-10T10:00:00Z
 */

/**
 * @swagger
 * tags:
 *   name: Test Question Marks
 *   description: The test question marks managing API
 */

/**
 * @swagger
 * /test-question-marks:
 *   post:
 *     summary: Create new test question marks
 *     tags: [Test Question Marks]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/TestQuestionMarks'
 *     responses:
 *       201:
 *         description: The test question marks were successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/TestQuestionMarks'
 *       500:
 *         description: Some server error
 */
router.post('/', createTestQuestionMarks);

/**
 * @swagger
 * /test-question-marks:
 *   get:
 *     summary: Returns the list of all the test question marks
 *     tags: [Test Question Marks]
 *     responses:
 *       200:
 *         description: The list of test question marks
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/TestQuestionMarks'
 *       500:
 *         description: Some server error
 */
router.get('/', getAllTestQuestionMarks);

/**
 * @swagger
 * /test-question-marks/{id}:
 *   get:
 *     summary: Get test question marks by id
 *     tags: [Test Question Marks]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The test question marks id
 *     responses:
 *       200:
 *         description: The test question marks description by id
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/TestQuestionMarks'
 *       404:
 *         description: The test question marks were not found
 *       500:
 *         description: Some server error
 */
router.get('/:id', getTestQuestionMarksById);

/**
 * @swagger
 * /test-question-marks/{id}:
 *   put:
 *     summary: Update the test question marks by id
 *     tags: [Test Question Marks]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The test question marks id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/TestQuestionMarks'
 *     responses:
 *       200:
 *         description: The test question marks were updated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/TestQuestionMarks'
 *       404:
 *         description: The test question marks were not found
 *       500:
 *         description: Some server error
 */
router.put('/:id', updateTestQuestionMarksById);

/**
 * @swagger
 * /test-question-marks/{id}:
 *   delete:
 *     summary: Remove the test question marks by id
 *     tags: [Test Question Marks]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The test question marks id
 *     responses:
 *       200:
 *         description: The test question marks were deleted
 *       404:
 *         description: The test question marks were not found
 *       500:
 *         description: Some server error
 */
router.delete('/:id', deleteTestQuestionMarksById);

/**
 * @swagger
 * /test-question-marks/question/{questionId}:
 *   get:
 *     summary: Get student marks for a specific question
 *     tags: [Test Question Marks]
 *     parameters:
 *       - in: path
 *         name: questionId
 *         schema:
 *           type: string
 *         required: true
 *         description: The question id
 *     responses:
 *       200:
 *         description: The student marks for the specific question
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/TestQuestionMarks'
 *       404:
 *         description: The question or marks were not found
 *       500:
 *         description: Some server error
 */
router.get('/question/:questionId', getStudentMarksForQuestion);

module.exports = router;
