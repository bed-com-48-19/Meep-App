const express = require('express');
const { createTestPerfomance, getAllTestPerfomances, getTestPerfomanceById, updateTestPerfomanceById, deleteTestPerfomanceById, getOverallPerformanceForStudent, getStudentTestPerformance } = require('../Controlers/testPerfomanceController');
const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     TestPerformance:
 *       type: object
 *       required:
 *         - studentId
 *         - testId
 *         - score
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the test performance
 *         studentId:
 *           type: string
 *           description: The id of the student
 *         testId:
 *           type: string
 *           description: The id of the test
 *         score:
 *           type: number
 *           description: The score of the student in the test
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: The date the test performance was recorded
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: The date the test performance was updated
 *       example:
 *         id: 60d5f3f5e7b0c2b2f8f0c77a
 *         studentId: 5f8d0d55b54764421b7160c9
 *         testId: 5f8d0d55b54764421b7160c8
 *         score: 85
 *         createdAt: 2022-01-10T10:00:00Z
 *         updatedAt: 2022-01-10T10:00:00Z
 */

/**
 * @swagger
 * tags:
 *   name: Test Performances
 *   description: The test performance managing API
 */

/**
 * @swagger
 * /test-performances:
 *   post:
 *     summary: Create a new test performance
 *     tags: [Test Performances]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/TestPerformance'
 *     responses:
 *       201:
 *         description: The test performance was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/TestPerformance'
 *       500:
 *         description: Some server error
 */
router.post('/', createTestPerfomance);

/**
 * @swagger
 * /test-performances:
 *   get:
 *     summary: Returns the list of all the test performances
 *     tags: [Test Performances]
 *     responses:
 *       200:
 *         description: The list of the test performances
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/TestPerformance'
 *       500:
 *         description: Some server error
 */
router.get('/', getAllTestPerfomances);

/**
 * @swagger
 * /test-performances/{student}/test/{test}:
 *   get:
 *     summary: Get the test performance by student and test id
 *     tags: [Test Performances]
 *     parameters:
 *       - in: path
 *         name: student
 *         schema:
 *           type: string
 *         required: true
 *         description: The student id
 *       - in: path
 *         name: test
 *         schema:
 *           type: string
 *         required: true
 *         description: The test id
 *     responses:
 *       200:
 *         description: The test performance description by student and test id
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/TestPerformance'
 *       404:
 *         description: The test performance was not found
 *       500:
 *         description: Some server error
 */
router.get('/:student/test/:test', getTestPerfomanceById);

/**
 * @swagger
 * /test-performances/{id}:
 *   put:
 *     summary: Update the test performance by id
 *     tags: [Test Performances]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The test performance id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/TestPerformance'
 *     responses:
 *       200:
 *         description: The test performance was updated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/TestPerformance'
 *       404:
 *         description: The test performance was not found
 *       500:
 *         description: Some server error
 */
router.put('/:id', updateTestPerfomanceById);

/**
 * @swagger
 * /test-performances/{id}:
 *   delete:
 *     summary: Remove the test performance by id
 *     tags: [Test Performances]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The test performance id
 *     responses:
 *       200:
 *         description: The test performance was deleted
 *       404:
 *         description: The test performance was not found
 *       500:
 *         description: Some server error
 */
router.delete('/:id', deleteTestPerfomanceById);

/**
 * @swagger
 * /test-performances/student/{studentId}:
 *   get:
 *     summary: Get the overall performance for a student
 *     tags: [Test Performances]
 *     parameters:
 *       - in: path
 *         name: studentId
 *         schema:
 *           type: string
 *         required: true
 *         description: The student id
 *     responses:
 *       200:
 *         description: The overall performance of the student
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/TestPerformance'
 *       404:
 *         description: The student was not found
 *       500:
 *         description: Some server error
 */
router.get('/student/:studentId', getOverallPerformanceForStudent);

/**
 * @swagger
 * /test-performances/student/{studentId}/test/{testId}:
 *   get:
 *     summary: Get student answers and calculate performance for a specific test
 *     tags: [Test Performances]
 *     parameters:
 *       - in: path
 *         name: studentId
 *         schema:
 *           type: string
 *         required: true
 *         description: The student id
 *       - in: path
 *         name: testId
 *         schema:
 *           type: string
 *         required: true
 *         description: The test id
 *     responses:
 *       200:
 *         description: The performance of the student for the specific test
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/TestPerformance'
 *       404:
 *         description: The test performance was not found
 *       500:
 *         description: Some server error
 */
router.get('/student/:studentId/test/:testId', getStudentTestPerformance);

module.exports = router;
