const express = require("express");
const { getAllProgress, createProgress, getProgress, updateProgress, getUserProgress, deleteProgress } = require("../Controlers/progressController");
const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Progress
 *   description: API endpoints for managing user progress
 */

/**
 * @swagger
 * /api/v1/progress:
 *   get:
 *     summary: Get all progress entries
 *     tags: [Progress]
 *     responses:
 *       200:
 *         description: A list of progress entries
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Progress'
 */
router.get("/", getAllProgress);

/**
 * @swagger
 * /api/v1/progress:
 *   post:
 *     summary: Create a new progress entry
 *     tags: [Progress]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               user_id:
 *                 type: string
 *               video_id:
 *                 type: string
 *               progress:
 *                 type: number
 *     responses:
 *       201:
 *         description: The progress entry was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Progress'
 *       400:
 *         description: Invalid input
 */
router.post("/", createProgress);

/**
 * @swagger
 * /api/v1/progress/{progress_id}:
 *   get:
 *     summary: Get progress entry by ID
 *     tags: [Progress]
 *     parameters:
 *       - in: path
 *         name: progress_id
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the progress entry to fetch
 *     responses:
 *       200:
 *         description: The progress entry details by ID
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Progress'
 *       404:
 *         description: Progress entry not found
 */
router.get("/:progress_id", getProgress);

/**
 * @swagger
 * /api/v1/progress/{progress_id}/{user_id}/{video_id}:
 *   put:
 *     summary: Update progress entry
 *     tags: [Progress]
 *     parameters:
 *       - in: path
 *         name: progress_id
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the progress entry to update
 *       - in: path
 *         name: user_id
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the user
 *       - in: path
 *         name: video_id
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the video
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               progress:
 *                 type: number
 *     responses:
 *       200:
 *         description: The progress entry was successfully updated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Progress'
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Progress entry not found
 */
router.put("/:progress_id/:user_id/:video_id", updateProgress);

/**
 * @swagger
 * /api/v1/progress/{user_id}/{video_id}:
 *   get:
 *     summary: Get user progress for a specific video
 *     tags: [Progress]
 *     parameters:
 *       - in: path
 *         name: user_id
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the user
 *       - in: path
 *         name: video_id
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the video
 *     responses:
 *       200:
 *         description: The user progress for the specified video
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Progress'
 *       404:
 *         description: User progress not found for the specified video
 */
router.get("/:user_id/:video_id", getUserProgress);

/**
 * @swagger
 * /api/v1/progress/{progress_id}:
 *   delete:
 *     summary: Delete progress entry by ID
 *     tags: [Progress]
 *     parameters:
 *       - in: path
 *         name: progress_id
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the progress entry to delete
 *     responses:
 *       200:
 *         description: The progress entry was successfully deleted
 *       404:
 *         description: Progress entry not found
 */
router.delete("/:progress_id", deleteProgress);

module.exports = router;
