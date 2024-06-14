const express = require('express');
const {
    createStudentQuiz,
    getAllStudentQuizzes,
    getStudentQuizById,
    getQuizzesByStudentAndQuiz,
    updateStudentQuizById,
    deleteStudentQuizById,
    getAllQuizzesByStudent
} = require('../Controlers/studentQuizzesController');

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: StudentQuizzes
 *   description: API endpoints for managing student quizzes
 */

/**
 * @swagger
 * /api/v1/student-quizzes:
 *   post:
 *     summary: Create a new student quiz
 *     tags: [StudentQuizzes]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - studentId
 *               - quizId
 *             properties:
 *               studentId:
 *                 type: string
 *               quizId:
 *                 type: string
 *     responses:
 *       201:
 *         description: The student quiz was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/StudentQuiz'
 *       400:
 *         description: Invalid input
 */
router.post('/', createStudentQuiz);

/**
 * @swagger
 * /api/v1/student-quizzes:
 *   get:
 *     summary: Get all student quizzes
 *     tags: [StudentQuizzes]
 *     responses:
 *       200:
 *         description: A list of student quizzes
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/StudentQuiz'
 */
router.get('/', getAllStudentQuizzes);

/**
 * @swagger
 * /api/v1/student-quizzes/{id}:
 *   get:
 *     summary: Get a student quiz by ID
 *     tags: [StudentQuizzes]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the student quiz to fetch
 *     responses:
 *       200:
 *         description: The student quiz details by ID
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/StudentQuiz'
 *       404:
 *         description: Student quiz not found
 */
router.get('/:id', getStudentQuizById);

/**
 * @swagger
 * /api/v1/student-quizzes/student/{studentId}:
 *   get:
 *     summary: Get all quizzes for a student
 *     tags: [StudentQuizzes]
 *     parameters:
 *       - in: path
 *         name: studentId
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the student
 *     responses:
 *       200:
 *         description: A list of quizzes taken by the student
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/StudentQuiz'
 *       404:
 *         description: No quizzes found for the student
 */
router.get('/student/:studentId', getAllQuizzesByStudent);

/**
 * @swagger
 * /api/v1/student-quizzes/student/quizzes/{studentId}/{quizId}:
 *   get:
 *     summary: Get quizzes by student and quiz IDs
 *     tags: [StudentQuizzes]
 *     parameters:
 *       - in: path
 *         name: studentId
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the student
 *       - in: path
 *         name: quizId
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the quiz
 *     responses:
 *       200:
 *         description: The quizzes for the specified student and quiz
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/StudentQuiz'
 *       404:
 *         description: No quizzes found for the specified student and quiz
 */
router.get('/student/quizzes/:studentId/:quizId', getQuizzesByStudentAndQuiz);

/**
 * @swagger
 * /api/v1/student-quizzes/{id}:
 *   put:
 *     summary: Update a student quiz by ID
 *     tags: [StudentQuizzes]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the student quiz to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               studentId:
 *                 type: string
 *               quizId:
 *                 type: string
 *     responses:
 *       200:
 *         description: The student quiz was successfully updated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/StudentQuiz'
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Student quiz not found
 */
router.put('/:id', updateStudentQuizById);

/**
 * @swagger
 * /api/v1/student-quizzes/{id}:
 *   delete:
 *     summary: Delete a student quiz by ID
 *     tags: [StudentQuizzes]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the student quiz to delete
 *     responses:
 *       200:
 *         description: The student quiz was successfully deleted
 *       404:
 *         description: Student quiz not found
 */
router.delete('/:id', deleteStudentQuizById);

module.exports = router;
