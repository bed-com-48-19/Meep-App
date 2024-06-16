const express = require('express');
const router = express.Router();
const { createVideoComment, getAllVideoComments, getVideoCommentById, getCommentsByVideoId, updateVideoCommentById, deleteVideoCommentById } = require('../Controlers/videoCommentController');

/**
 * @swagger
 * components:
 *   schemas:
 *     VideoComment:
 *       type: object
 *       required:
 *         - text
 *         - videoId
 *         - userId
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the video comment
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
 *         id: 60d5f3f5e7b0c2b2f8f0c77a
 *         text: "Great video!"
 *         videoId: 60d5f3f5e7b0c2b2f8f0c77b
 *         userId: 60d5f3f5e7b0c2b2f8f0c77c
 *         createdAt: "2023-06-15T12:00:00Z"
 */

/**
 * @swagger
 * tags:
 *   name: Video Comments
 *   description: API for managing video comments
 */

/**
 * @swagger
 * /video-comments:
 *   post:
 *     summary: Create a new video comment
 *     tags: [Video Comments]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/VideoComment'
 *     responses:
 *       201:
 *         description: The video comment was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/VideoComment'
 *       500:
 *         description: Some server error
 */
router.post('/', createVideoComment);

/**
 * @swagger
 * /video-comments:
 *   get:
 *     summary: Returns the list of all video comments
 *     tags: [Video Comments]
 *     responses:
 *       200:
 *         description: The list of video comments
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/VideoComment'
 *       500:
 *         description: Some server error
 */
router.get('/', getAllVideoComments);

/**
 * @swagger
 * /video-comments/{id}:
 *   get:
 *     summary: Get video comment by ID
 *     tags: [Video Comments]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the video comment
 *     responses:
 *       200:
 *         description: The video comment
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/VideoComment'
 *       404:
 *         description: Video comment not found
 *       500:
 *         description: Some server error
 */
router.get('/:id', getVideoCommentById);

/**
 * @swagger
 * /video-comments/video/{videoId}:
 *   get:
 *     summary: Get comments by video ID
 *     tags: [Video Comments]
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
 *                 $ref: '#/components/schemas/VideoComment'
 *       500:
 *         description: Some server error
 */
router.get('/video/:videoId', getCommentsByVideoId);

/**
 * @swagger
 * /video-comments/{id}:
 *   put:
 *     summary: Update video comment by ID
 *     tags: [Video Comments]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the video comment
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/VideoComment'
 *     responses:
 *       200:
 *         description: The video comment was updated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/VideoComment'
 *       404:
 *         description: Video comment not found
 *       500:
 *         description: Some server error
 */
router.put('/:id', updateVideoCommentById);

/**
 * @swagger
 * /video-comments/{id}:
 *   delete:
 *     summary: Delete video comment by ID
 *     tags: [Video Comments]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the video comment
 *     responses:
 *       200:
 *         description: The video comment was deleted
 *       404:
 *         description: Video comment not found
 *       500:
 *         description: Some server error
 */
router.delete('/:id', deleteVideoCommentById);

module.exports = router;
