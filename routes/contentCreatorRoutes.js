const express = require('express');
const { createContentCreator, getAllContentCreators, getContentCreatorById, updateContentCreatorById, deleteContentCreatorById } = require('../Controlers/contentCreatorController');
const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: ContentCreators
 *   description: API for managing content creators
 */

/**
 * @swagger
 * /api/v1/creator:
 *   post:
 *     summary: Create a new content creator
 *     tags: [ContentCreators]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - bio
 *             properties:
 *               name:
 *                 type: string
 *               bio:
 *                 type: string
 *     responses:
 *       201:
 *         description: The content creator was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ContentCreator'
 *       400:
 *         description: Invalid input
 */
router.post('/', createContentCreator);

/**
 * @swagger
 * /api/v1/creator:
 *   get:
 *     summary: Get all content creators
 *     tags: [ContentCreators]
 *     responses:
 *       200:
 *         description: A list of content creators
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/ContentCreator'
 */
router.get('/', getAllContentCreators);

/**
 * @swagger
 * /api/v1/creator/{id}:
 *   get:
 *     summary: Get content creator by ID
 *     tags: [ContentCreators]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The content creator ID
 *     responses:
 *       200:
 *         description: The content creator description by ID
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ContentCreator'
 *       404:
 *         description: The content creator was not found
 */
router.get('/:id', getContentCreatorById);

/**
 * @swagger
 * /api/v1/creator/{id}:
 *   put:
 *     summary: Update content creator by ID
 *     tags: [ContentCreators]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The content creator ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               bio:
 *                 type: string
 *     responses:
 *       200:
 *         description: The content creator was successfully updated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ContentCreator'
 *       400:
 *         description: Invalid input
 *       404:
 *         description: The content creator was not found
 */
router.put('/:id', updateContentCreatorById);

/**
 * @swagger
 * /api/v1/creator/{id}:
 *   delete:
 *     summary: Delete content creator by ID
 *     tags: [ContentCreators]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The content creator ID
 *     responses:
 *       200:
 *         description: The content creator was successfully deleted
 *       404:
 *         description: The content creator was not found
 */
router.delete('/:id', deleteContentCreatorById);

module.exports = router;
