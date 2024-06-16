const express = require('express');
const {
    createTutor,
    getAllTutors,
    getTutorById,
    updateTutorById,
    deleteTutorById
} = require('../Controlers/tutorController');
const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Tutor:
 *       type: object
 *       required:
 *         - name
 *         - subject
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the tutor
 *         name:
 *           type: string
 *           description: The name of the tutor
 *         subject:
 *           type: string
 *           description: The subject the tutor teaches
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: The date the tutor was created
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: The date the tutor was last updated
 *       example:
 *         id: 60d5f3f5e7b0c2b2f8f0c77a
 *         name: "John Doe"
 *         subject: "Mathematics"
 *         createdAt: 2022-01-10T10:00:00Z
 *         updatedAt: 2022-01-10T10:00:00Z
 */

/**
 * @swagger
 * tags:
 *   name: Tutors
 *   description: The tutors managing API
 */

/**
 * @swagger
 * /tutors:
 *   post:
 *     summary: Create a new tutor
 *     tags: [Tutors]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Tutor'
 *     responses:
 *       201:
 *         description: The tutor was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Tutor'
 *       500:
 *         description: Some server error
 */
router.post('/', createTutor);

/**
 * @swagger
 * /tutors:
 *   get:
 *     summary: Returns the list of all the tutors
 *     tags: [Tutors]
 *     responses:
 *       200:
 *         description: The list of tutors
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Tutor'
 *       500:
 *         description: Some server error
 */
router.get('/', getAllTutors);

/**
 * @swagger
 * /tutors/{id}:
 *   get:
 *     summary: Get tutor by id
 *     tags: [Tutors]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The tutor id
 *     responses:
 *       200:
 *         description: The tutor description by id
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Tutor'
 *       404:
 *         description: The tutor was not found
 *       500:
 *         description: Some server error
 */
router.get('/:id', getTutorById);

/**
 * @swagger
 * /tutors/{id}:
 *   put:
 *     summary: Update the tutor by id
 *     tags: [Tutors]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The tutor id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Tutor'
 *     responses:
 *       200:
 *         description: The tutor was updated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Tutor'
 *       404:
 *         description: The tutor was not found
 *       500:
 *         description: Some server error
 */
router.put('/:id', updateTutorById);

/**
 * @swagger
 * /tutors/{id}:
 *   delete:
 *     summary: Remove the tutor by id
 *     tags: [Tutors]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The tutor id
 *     responses:
 *       200:
 *         description: The tutor was deleted
 *       404:
 *         description: The tutor was not found
 *       500:
 *         description: Some server error
 */
router.delete('/:id', deleteTutorById);

module.exports = router;
