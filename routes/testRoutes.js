const express = require('express');
const { createTest, getAllTests, getTestById, updateTestById, deleteTestById } = require('../Controlers/testController');
const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Test:
 *       type: object
 *       required:
 *         - name
 *         - description
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the test
 *         name:
 *           type: string
 *           description: The name of the test
 *         description:
 *           type: string
 *           description: The description of the test
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: The date the test was created
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: The date the test was last updated
 *       example:
 *         id: 60d5f3f5e7b0c2b2f8f0c77a
 *         name: "Math Test"
 *         description: "A test for basic math skills"
 *         createdAt: 2022-01-10T10:00:00Z
 *         updatedAt: 2022-01-10T10:00:00Z
 */

/**
 * @swagger
 * tags:
 *   name: Tests
 *   description: The tests managing API
 */

/**
 * @swagger
 * /tests:
 *   post:
 *     summary: Create a new test
 *     tags: [Tests]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Test'
 *     responses:
 *       201:
 *         description: The test was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Test'
 *       500:
 *         description: Some server error
 */
router.post('/', createTest);

/**
 * @swagger
 * /tests:
 *   get:
 *     summary: Returns the list of all the tests
 *     tags: [Tests]
 *     responses:
 *       200:
 *         description: The list of tests
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Test'
 *       500:
 *         description: Some server error
 */
router.get('/', getAllTests);

/**
 * @swagger
 * /tests/{id}:
 *   get:
 *     summary: Get test by id
 *     tags: [Tests]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The test id
 *     responses:
 *       200:
 *         description: The test description by id
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Test'
 *       404:
 *         description: The test was not found
 *       500:
 *         description: Some server error
 */
router.get('/:id', getTestById);

/**
 * @swagger
 * /tests/{id}:
 *   put:
 *     summary: Update the test by id
 *     tags: [Tests]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The test id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Test'
 *     responses:
 *       200:
 *         description: The test was updated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Test'
 *       404:
 *         description: The test was not found
 *       500:
 *         description: Some server error
 */
router.put('/:id', updateTestById);

/**
 * @swagger
 * /tests/{id}:
 *   delete:
 *     summary: Remove the test by id
 *     tags: [Tests]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The test id
 *     responses:
 *       200:
 *         description: The test was deleted
 *       404:
 *         description: The test was not found
 *       500:
 *         description: Some server error
 */
router.delete('/:id', deleteTestById);

module.exports = router;
