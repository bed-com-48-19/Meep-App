const express = require('express');
const router = express.Router();
const topicController = require('../Controlers/topicController');

/**
 * @swagger
 * components:
 *   schemas:
 *     Topic:
 *       type: object
 *       required:
 *         - title
 *         - description
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the topic
 *         title:
 *           type: string
 *           description: The title of the topic
 *         description:
 *           type: string
 *           description: The description of the topic
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: The date the topic was created
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: The date the topic was last updated
 *       example:
 *         id: 60d5f3f5e7b0c2b2f8f0c77a
 *         title: "Introduction to Algebra"
 *         description: "A comprehensive guide to understanding algebra"
 *         createdAt: 2022-01-10T10:00:00Z
 *         updatedAt: 2022-01-10T10:00:00Z
 */

/**
 * @swagger
 * tags:
 *   name: Topics
 *   description: The topics managing API
 */

/**
 * @swagger
 * /topics:
 *   post:
 *     summary: Create a new topic
 *     tags: [Topics]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Topic'
 *     responses:
 *       201:
 *         description: The topic was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Topic'
 *       500:
 *         description: Some server error
 */
router.post('/', topicController.createTopic);

/**
 * @swagger
 * /topics:
 *   get:
 *     summary: Returns the list of all the topics
 *     tags: [Topics]
 *     responses:
 *       200:
 *         description: The list of topics
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Topic'
 *       500:
 *         description: Some server error
 */
router.get('/', topicController.getAllTopics);

/**
 * @swagger
 * /topics/{id}:
 *   get:
 *     summary: Get topic by id
 *     tags: [Topics]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The topic id
 *     responses:
 *       200:
 *         description: The topic description by id
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Topic'
 *       404:
 *         description: The topic was not found
 *       500:
 *         description: Some server error
 */
router.get('/:id', topicController.getTopicById);

/**
 * @swagger
 * /topics/{id}:
 *   put:
 *     summary: Update the topic by id
 *     tags: [Topics]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The topic id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Topic'
 *     responses:
 *       200:
 *         description: The topic was updated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Topic'
 *       404:
 *         description: The topic was not found
 *       500:
 *         description: Some server error
 */
router.put('/:id', topicController.updateTopicById);

/**
 * @swagger
 * /topics/{id}:
 *   delete:
 *     summary: Remove the topic by id
 *     tags: [Topics]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The topic id
 *     responses:
 *       200:
 *         description: The topic was deleted
 *       404:
 *         description: The topic was not found
 *       500:
 *         description: Some server error
 */
router.delete('/:id', topicController.deleteTopicById);

module.exports = router;
