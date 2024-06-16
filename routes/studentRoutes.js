const express = require('express');
const { createStudent, getAllStudents, getStudentById, getStudentByUsername, deleteStudentById, updateStudentById } = require('../Controlers/studentController');

const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Student:
 *       type: object
 *       required:
 *         - name
 *         - username
 *         - email
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the student
 *         name:
 *           type: string
 *           description: The name of the student
 *         username:
 *           type: string
 *           description: The username of the student
 *         email:
 *           type: string
 *           description: The email of the student
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: The date the student was added
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: The date the student information was updated
 *       example:
 *         id: d5fE_asz
 *         name: John Doe
 *         username: johndoe
 *         email: johndoe@example.com
 *         createdAt: 2022-01-10T10:00:00Z
 *         updatedAt: 2022-01-10T10:00:00Z
 */

/**
 * @swagger
 * tags:
 *   name: Students
 *   description: The student managing API
 */

/**
 * @swagger
 * /students:
 *   post:
 *     summary: Create a new student
 *     tags: [Students]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Student'
 *     responses:
 *       201:
 *         description: The student was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Student'
 *       500:
 *         description: Some server error
 */
router.post('/', createStudent);

/**
 * @swagger
 * /students:
 *   get:
 *     summary: Returns the list of all the students
 *     tags: [Students]
 *     responses:
 *       200:
 *         description: The list of the students
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Student'
 *       500:
 *         description: Some server error
 */
router.get('/', getAllStudents);

/**
 * @swagger
 * /students/{id}:
 *   get:
 *     summary: Get the student by id
 *     tags: [Students]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The student id
 *     responses:
 *       200:
 *         description: The student description by id
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Student'
 *       404:
 *         description: The student was not found
 *       500:
 *         description: Some server error
 */
router.get('/:id', getStudentById);

/**
 * @swagger
 * /students/username/{username}:
 *   get:
 *     summary: Get the student by username
 *     tags: [Students]
 *     parameters:
 *       - in: path
 *         name: username
 *         schema:
 *           type: string
 *         required: true
 *         description: The student username
 *     responses:
 *       200:
 *         description: The student description by username
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Student'
 *       404:
 *         description: The student was not found
 *       500:
 *         description: Some server error
 */
router.get('/username/:username', getStudentByUsername);

/**
 * @swagger
 * /students/{id}:
 *   put:
 *     summary: Update the student by the id
 *     tags: [Students]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The student id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Student'
 *     responses:
 *       200:
 *         description: The student was updated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Student'
 *       404:
 *         description: The student was not found
 *       500:
 *         description: Some server error
 */
router.put('/:id', updateStudentById);

/**
 * @swagger
 * /students/{id}:
 *   delete:
 *     summary: Remove the student by id
 *     tags: [Students]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The student id
 *     responses:
 *       200:
 *         description: The student was deleted
 *       404:
 *         description: The student was not found
 *       500:
 *         description: Some server error
 */
router.delete('/:id', deleteStudentById);

module.exports = router;
