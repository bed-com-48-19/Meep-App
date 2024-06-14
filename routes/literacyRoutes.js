const express = require('express');
const { createLiteracy, getAllLiteracies, getLiteracyById, updateLiteracyById, deleteLiteracyById } = require('../Controlers/literacyController');

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Literacies
 *   description: API for managing literacy content
 */

/**
 * @swagger
 * /api/v1/literacy:
 *   post:
 *     summary: Create a new literacy content
 *     tags: [Literacies]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - content
 *             properties:
 *               title:
 *                 type: string
 *               content:
 *                 type: string
 *     responses:
 *       201:
 *         description: The literacy content was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Literacy'
 *       400:
 *         description: Invalid input
 */
router.post('/', createLiteracy);

/**
 * @swagger
 * /api/v1/literacy:
 *   get:
 *     summary: Get all literacy content
 *     tags: [Literacies]
 *     responses:
 *       200:
 *         description: A list of literacy content
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Literacy'
 */
router.get('/', getAllLiteracies);

/**
 * @swagger
 * /api/v1/literacy/{id}:
 *   get:
 *     summary: Get literacy content by ID
 *     tags: [Literacies]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The literacy content ID
 *     responses:
 *       200:
 *         description: The literacy content description by ID
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Literacy'
 *       404:
 *         description: The literacy content was not found
 */
router.get('/:id', getLiteracyById);

/**
 * @swagger
 * /api/v1/literacy/{id}:
 *   put:
 *     summary: Update literacy content by ID
 *     tags: [Literacies]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The literacy content ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               content:
 *                 type: string
 *     responses:
 *       200:
 *         description: The literacy content was successfully updated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Literacy'
 *       400:
 *         description: Invalid input
 *       404:
 *         description: The literacy content was not found
 */
router.put('/:id', updateLiteracyById);

/**
 * @swagger
 * /api/v1/literacy/{id}:
 *   delete:
 *     summary: Delete literacy content by ID
 *     tags: [Literacies]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The literacy content ID
 *     responses:
 *       200:
 *         description: The literacy content was successfully deleted
 *       404:
 *         description: The literacy content was not found
 */
router.delete('/:id', deleteLiteracyById);

module.exports = router;
