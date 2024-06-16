const express = require('express');
const { createSubject, getAllSubjects, getSubjectById, updateSubjectById, deleteSubjectById, getSubjectWithSubtopics } = require('../Controlers/subjectController');
const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Subject:
 *       type: object
 *       required:
 *         - name
 *         - classId
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the subject
 *         name:
 *           type: string
 *           description: The name of the subject
 *         classId:
 *           type: string
 *           description: The id of the class
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: The date the subject was added
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: The date the subject information was updated
 *       example:
 *         id: 60d5f3f5e7b0c2b2f8f0c77a
 *         name: Mathematics
 *         classId: 5f8d0d55b54764421b7160c9
 *         createdAt: 2022-01-10T10:00:00Z
 *         updatedAt: 2022-01-10T10:00:00Z
 */

/**
 * @swagger
 * tags:
 *   name: Subjects
 *   description: The subject managing API
 */

/**
 * @swagger
 * /subjects:
 *   post:
 *     summary: Create a new subject
 *     tags: [Subjects]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Subject'
 *     responses:
 *       201:
 *         description: The subject was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Subject'
 *       500:
 *         description: Some server error
 */
router.post('/', createSubject);

/**
 * @swagger
 * /subjects:
 *   get:
 *     summary: Returns the list of all the subjects
 *     tags: [Subjects]
 *     responses:
 *       200:
 *         description: The list of the subjects
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Subject'
 *       500:
 *         description: Some server error
 */
router.get('/', getAllSubjects);

/**
 * @swagger
 * /subjects/{id}:
 *   get:
 *     summary: Get the subject by id
 *     tags: [Subjects]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The subject id
 *     responses:
 *       200:
 *         description: The subject description by id
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Subject'
 *       404:
 *         description: The subject was not found
 *       500:
 *         description: Some server error
 */
router.get('/:id', getSubjectById);

/**
 * @swagger
 * /subjects/{classId}/{subjectName}:
 *   get:
 *     summary: Get the subject by classId and subjectName
 *     tags: [Subjects]
 *     parameters:
 *       - in: path
 *         name: classId
 *         schema:
 *           type: string
 *         required: true
 *         description: The class id
 *       - in: path
 *         name: subjectName
 *         schema:
 *           type: string
 *         required: true
 *         description: The name of the subject
 *     responses:
 *       200:
 *         description: The subject description with subtopics
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Subject'
 *       404:
 *         description: The subject was not found
 *       500:
 *         description: Some server error
 */
router.get('/:classId/:subjectName', getSubjectWithSubtopics);

/**
 * @swagger
 * /subjects/{id}:
 *   put:
 *     summary: Update the subject by id
 *     tags: [Subjects]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The subject id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Subject'
 *     responses:
 *       200:
 *         description: The subject was updated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Subject'
 *       404:
 *         description: The subject was not found
 *       500:
 *         description: Some server error
 */
router.put('/:id', updateSubjectById);

/**
 * @swagger
 * /subjects/{id}:
 *   delete:
 *     summary: Remove the subject by id
 *     tags: [Subjects]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The subject id
 *     responses:
 *       200:
 *         description: The subject was deleted
 *       404:
 *         description: The subject was not found
 *       500:
 *         description: Some server error
 */
router.delete('/:id', deleteSubjectById);

module.exports = router;
