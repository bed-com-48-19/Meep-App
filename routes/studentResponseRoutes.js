const express = require('express');
const {
    createStudentResponse,
    getAllStudentResponses,
    getStudentResponseById,
    updateStudentResponseById,
    deleteStudentResponseById,
    getStudentResponsesByTestAndStudent
} = require('../Controlers/testResponseController');

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: TestResponses
 *   description: API endpoints for managing student test responses
 */

/**
 * @swagger
 * /api/v1/test-responses:
 *   post:
 *     summary: Create a new student response for a test
 *     tags: [TestResponses]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - studentId
 *               - testId
 *               - responses
 *             properties:
 *               studentId:
 *                 type: string
 *               testId:
 *                 type: string
 *               responses:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     questionId:
 *                       type: string
 *                     answer:
 *                       type: string
 *     responses:
 *       201:
 *         description: The student response was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/StudentResponse'
 *       400:
 *         description: Invalid input
 */

router.post('/', createStudentResponse);

/**
 * @swagger
 * /api/v1/test-responses:
 *   get:
 *     summary: Get all student test responses
 *     tags: [TestResponses]
 *     responses:
 *       200:
 *         description: A list of student test responses
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/StudentResponse'
 */

router.get('/', getAllStudentResponses);

/**
 * @swagger
 * /api/v1/test-responses/{id}:
 *   get:
 *     summary: Get a student test response by ID
 *     tags: [TestResponses]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the student test response to fetch
 *     responses:
 *       200:
 *         description: The student test response details by ID
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/StudentResponse'
 *       404:
 *         description: Student test response not found
 */

router.get('/:id', getStudentResponseById);

/**
 * @swagger
 * /api/v1/test-responses/{id}:
 *   put:
 *     summary: Update a student test response by ID
 *     tags: [TestResponses]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the student test response to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               responses:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     questionId:
 *                       type: string
 *                     answer:
 *                       type: string
 *     responses:
 *       200:
 *         description: The student test response was successfully updated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/StudentResponse'
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Student test response not found
 */

router.put('/:id', updateStudentResponseById);

/**
 * @swagger
 * /api/v1/test-responses/{id}:
 *   delete:
 *     summary: Delete a student test response by ID
 *     tags: [TestResponses]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the student test response to delete
 *     responses:
 *       200:
 *         description: The student test response was successfully deleted
 *       404:
 *         description: Student test response not found
 */

router.delete('/:id', deleteStudentResponseById);

/**
 * @swagger
 * /api/v1/test-responses/student/{studentId}:
 *   get:
 *     summary: Get all test responses for a student
 *     tags: [TestResponses]
 *     parameters:
 *       - in: path
 *         name: studentId
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the student
 *     responses:
 *       200:
 *         description: A list of test responses submitted by the student
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/StudentResponse'
 *       404:
 *         description: No test responses found for the student
 */

router.get('/student/:studentId', getStudentResponsesByTestAndStudent);

module.exports = router;
