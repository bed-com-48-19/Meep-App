const express = require('express');
const router = express.Router();
const videoController = require('../Controlers/videoController');

/**
 * @swagger
 * components:
 *   schemas:
 *     Video:
 *       type: object
 *       required:
 *         - title
 *         - description
 *         - url
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the video
 *         title:
 *           type: string
 *           description: The title of the video
 *         description:
 *           type: string
 *           description: The description of the video
 *         url:
 *           type: string
 *           description: The URL of the video
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: The date and time when the video was created
 *       example:
 *         id: 60d5f3f5e7b0c2b2f8f0c77b
 *         title: "Introduction to JavaScript"
 *         description: "Learn the basics of JavaScript programming language."
 *         url: "https://www.youtube.com/watch?v=..."
 *         createdAt: "2023-06-15T12:00:00Z"
 *
 *     Comment:
 *       type: object
 *       required:
 *         - text
 *         - videoId
 *         - userId
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the comment
 *         text:
 *           type: string
 *           description: The text content of the comment
 *         videoId:
 *           type: string
 *           description: The ID of the video associated with the comment
 *         userId:
 *           type: string
 *           description: The ID of the user who posted the comment
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: The date and time when the comment was created
 *       example:
 *         id: 60d5f3f5e7b0c2b2f8f0c77c
 *         text: "Great explanation!"
 *         videoId: 60d5f3f5e7b0c2b2f8f0c77b
 *         userId: 60d5f3f5e7b0c2b2f8f0c77a
 *         createdAt: "2023-06-15T12:05:00Z"
 */

/**
 * @swagger
 * tags:
 *   name: Videos
 *   description: API for managing videos and comments
 */

/**
 * @swagger
 * /videos:
 *   post:
 *     summary: Create a new video
 *     tags: [Videos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Video'
 *     responses:
 *       201:
 *         description: The video was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Video'
 *       500:
 *         description: Some server error
 */
router.post('/', videoController.createVideo);

/**
 * @swagger
 * /videos:
 *   get:
 *     summary: Returns the list of all videos
 *     tags: [Videos]
 *     responses:
 *       200:
 *         description: The list of videos
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Video'
 *       500:
 *         description: Some server error
 */
router.get('/', videoController.getAllVideos);

/**
 * @swagger
 * /videos/{id}:
 *   get:
 *     summary: Get video by ID
 *     tags: [Videos]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the video
 *     responses:
 *       200:
 *         description: The video
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Video'
 *       404:
 *         description: Video not found
 *       500:
 *         description: Some server error
 */
router.get('/:id', videoController.getVideoById);

/**
 * @swagger
 * /videos/{id}:
 *   put:
 *     summary: Update video by ID
 *     tags: [Videos]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the video
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Video'
 *     responses:
 *       200:
 *         description: The video was updated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Video'
 *       404:
 *         description: Video not found
 *       500:
 *         description: Some server error
 */
router.put('/:id', videoController.updateVideoById);

/**
 * @swagger
 * /videos/{id}:
 *   delete:
 *     summary: Delete video by ID
 *     tags: [Videos]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the video
 *     responses:
 *       200:
 *         description: The video was deleted
 *       404:
 *         description: Video not found
 *       500:
 *         description: Some server error
 */
router.delete('/:id', videoController.deleteVideoById);

/**
 * @swagger
 * /videos/{videoId}/comments:
 *   get:
 *     summary: Get all comments for a particular video
 *     tags: [Videos]
 *     parameters:
 *       - in: path
 *         name: videoId
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the video
 *     responses:
 *       200:
 *         description: The list of comments for the video
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Comment'
 *       500:
 *         description: Some server error
 */
router.get('/:videoId/comments', videoController.getCommentsByVideoId);

module.exports = router;
