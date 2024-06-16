const express = require('express');
const router = express.Router();
const {
    createTutorSubject,
    getAllTutorSubjects,
    getTutorSubjectsByTutorId,
    updateTutorSubjectById,
    deleteTutorSubjectById
} = require('../Controlers/tutorSubjectsController');

/**
 * @swagger
 * components:
 *   schemas:
 *     TutorSubject:
 *       type: object
 *       required:
 *         - tutorId
 *         - subjectId
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the tutor-subject relation
 *         tutorId:
 *           type: string
 *           description: The id of the tutor
 *         subjectId:
 *           type: string
 *           description: The id of the subject
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: The date the tutor-subject relation was created
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: The date the tutor-subject relation was last updated
 *       example:
 *         id: 60d5f3f5e7b0c2b2f8f0c77a
 *         tutorId: 60d5f3f5e7b0c2b2f8f0c77b
 *         subjectId: 60d5f3f5e7b0c2b2f8f0c77c
 *         createdAt: 2022-01-10T10:00:00Z
 *         updatedAt: 2022-01-10T10:00:00Z
 */

/**
 * @swagger
 * tags:
 *   name: TutorSubjects
 *   description: API for managing tutor-subject relations
 */

/**
 * @swagger
 * /tutor-subjects:
 *   post:
 *     summary: Create a new tutor-subject relation
 *     tags: [TutorSubjects]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/TutorSubject'
 *     responses:
 *       201:
 *         description: The tutor-subject relation was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/TutorSubject'
 *       500:
 *         description: Some server error
 */
router.post('/', createTutorSubject);

/**
 * @swagger
 * /tutor-subjects:
 *   get:
 *     summary: Returns the list of all tutor-subject relations
 *     tags: [TutorSubjects]
 *     responses:
 *       200:
 *         description: The list of tutor-subject relations
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/TutorSubject'
 *       500:
 *         description: Some server error
 */
router.get('/', getAllTutorSubjects);

/**
 * @swagger
 * /tutor-subjects/tutor/{tutorId}:
 *   get:
 *     summary: Get subjects taught by a specific tutor
 *     tags: [TutorSubjects]
 *     parameters:
 *       - in: path
 *         name: tutorId
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the tutor
 *     responses:
 *       200:
 *         description: Subjects taught by the tutor
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/TutorSubject'
 *       404:
 *         description: Tutor not found
 *       500:
 *         description: Some server error
 */
router.get('/tutor/:tutorId', getTutorSubjectsByTutorId);

/**
 * @swagger
 * /tutor-subjects/{id}:
 *   get:
 *     summary: Get tutor-subject relation by ID
 *     tags: [TutorSubjects]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the tutor-subject relation
 *     responses:
 *       200:
 *         description: The tutor-subject relation
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/TutorSubject'
 *       404:
 *         description: Tutor-subject relation not found
 *       500:
 *         description: Some server error
 */
router.get('/:id', getTutorSubjectsByTutorId);

/**
 * @swagger
 * /tutor-subjects/{id}:
 *   put:
 *     summary: Update the tutor-subject relation by ID
 *     tags: [TutorSubjects]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the tutor-subject relation
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/TutorSubject'
 *     responses:
 *       200:
 *         description: The tutor-subject relation was updated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/TutorSubject'
 *       404:
 *         description: Tutor-subject relation not found
 *       500:
 *         description: Some server error
 */
router.put('/:id', updateTutorSubjectById);

/**
 * @swagger
 * /tutor-subjects/{id}:
 *   delete:
 *     summary: Remove the tutor-subject relation by ID
 *     tags: [TutorSubjects]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the tutor-subject relation
 *     responses:
 *       200:
 *         description: The tutor-subject relation was deleted
 *       404:
 *         description: Tutor-subject relation not found
 *       500:
 *         description: Some server error
 */
router.delete('/:id', deleteTutorSubjectById);

module.exports = router;
