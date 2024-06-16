const express = require('express');
const router = express.Router();
const subtopicController = require('../Controlers/subtopicController');

/**
 * @swagger
 * components:
 *   schemas:
 *     Subtopic:
 *       type: object
 *       required:
 *         - title
 *         - topic
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the subtopic
 *         title:
 *           type: string
 *           description: The title of the subtopic
 *         topic:
 *           type: string
 *           description: The id of the related topic
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: The date the subtopic was created
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: The date the subtopic was updated
 *       example:
 *         id: 60d5f3f5e7b0c2b2f8f0c77a
 *         title: Introduction to Adverbs
 *         topic: 5f8d0d55b54764421b7160c9
 *         createdAt: 2022-01-10T10:00:00Z
 *         updatedAt: 2022-01-10T10:00:00Z
 */

/**
 * @swagger
 * tags:
 *   name: Subtopics
 *   description: The subtopics managing API
 */

/**
 * @swagger
 * /subtopics:
 *   post:
 *     summary: Create a new subtopic
 *     tags: [Subtopics]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Subtopic'
 *     responses:
 *       201:
 *         description: The subtopic was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Subtopic'
 *       500:
 *         description: Some server error
 */
router.post('/', subtopicController.createSubtopic);

/**
 * @swagger
 * /subtopics:
 *   get:
 *     summary: Returns the list of all the subtopics
 *     tags: [Subtopics]
 *     responses:
 *       200:
 *         description: The list of the subtopics
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Subtopic'
 *       500:
 *         description: Some server error
 */
router.get('/', subtopicController.getAllSubtopics);

/**
 * @swagger
 * /subtopics/{id}:
 *   get:
 *     summary: Get the subtopic by id
 *     tags: [Subtopics]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The subtopic id
 *     responses:
 *       200:
 *         description: The subtopic description by id
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Subtopic'
 *       404:
 *         description: The subtopic was not found
 *       500:
 *         description: Some server error
 */
router.get('/:id', subtopicController.getSubtopicById);

/**
 * @swagger
 * /subtopics/{id}:
 *   put:
 *     summary: Update the subtopic by id
 *     tags: [Subtopics]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The subtopic id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Subtopic'
 *     responses:
 *       200:
 *         description: The subtopic was updated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Subtopic'
 *       404:
 *         description: The subtopic was not found
 *       500:
 *         description: Some server error
 */
router.put('/:id', subtopicController.updateSubtopicById);

/**
 * @swagger
 * /subtopics/{id}:
 *   delete:
 *     summary: Remove the subtopic by id
 *     tags: [Subtopics]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The subtopic id
 *     responses:
 *       200:
 *         description: The subtopic was deleted
 *       404:
 *         description: The subtopic was not found
 *       500:
 *         description: Some server error
 */
router.delete('/:id', subtopicController.deleteSubtopicById);

/**
 * @swagger
 * /subtopics/{subtopicId}/comments:
 *   get:
 *     summary: Get all comments for a subtopic by subtopic ID
 *     tags: [Subtopics]
 *     parameters:
 *       - in: path
 *         name: subtopicId
 *         schema:
 *           type: string
 *         required: true
 *         description: The subtopic id
 *     responses:
 *       200:
 *         description: The list of comments for the subtopic
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Comment'
 *       404:
 *         description: No comments found for this subtopic
 *       500:
 *         description: Some server error
 */
router.get('/:subtopicId/comments', subtopicController.getCommentsBySubtopicId);

module.exports = router;
