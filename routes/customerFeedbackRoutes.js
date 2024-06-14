const express = require('express');
const { createCustomerFeedback, getAllCustomerFeedback, getCustomerFeedbackByTutorId, updateCustomerFeedbackById, deleteCustomerFeedbackById } = require('../Controlers/customerFeedbackController');
const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: CustomerFeedback
 *   description: API for managing customer feedback
 */

/**
 * @swagger
 * /api/v1/tut/feedback:
 *   post:
 *     summary: Create a new customer feedback
 *     tags: [CustomerFeedback]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - feedback
 *               - tutorId
 *             properties:
 *               feedback:
 *                 type: string
 *               tutorId:
 *                 type: string
 *     responses:
 *       201:
 *         description: The customer feedback was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/CustomerFeedback'
 *       400:
 *         description: Invalid input
 */
router.post('/', createCustomerFeedback);

/**
 * @swagger
 * /api/v1/tut/feedback:
 *   get:
 *     summary: Get all customer feedback
 *     tags: [CustomerFeedback]
 *     responses:
 *       200:
 *         description: A list of customer feedback
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/CustomerFeedback'
 */
router.get('/', getAllCustomerFeedback);

/**
 * @swagger
 * /api/v1/tut/feedback/customer/{tutorId}:
 *   get:
 *     summary: Get customer feedback by tutor ID
 *     tags: [CustomerFeedback]
 *     parameters:
 *       - in: path
 *         name: tutorId
 *         schema:
 *           type: string
 *         required: true
 *         description: The tutor ID
 *     responses:
 *       200:
 *         description: The feedback for the specified tutor
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/CustomerFeedback'
 *       404:
 *         description: No feedback found for the specified tutor
 */
router.get('/customer/:tutorId', getCustomerFeedbackByTutorId);

/**
 * @swagger
 * /api/v1/tut/feedback/{id}:
 *   get:
 *     summary: Get customer feedback by ID
 *     tags: [CustomerFeedback]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The feedback ID
 *     responses:
 *       200:
 *         description: The feedback description by ID
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/CustomerFeedback'
 *       404:
 *         description: The feedback was not found
 */
router.get('/:id', getCustomerFeedbackByTutorId);

/**
 * @swagger
 * /api/v1/tut/feedback/{id}:
 *   put:
 *     summary: Update customer feedback by ID
 *     tags: [CustomerFeedback]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The feedback ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               feedback:
 *                 type: string
 *               tutorId:
 *                 type: string
 *     responses:
 *       200:
 *         description: The feedback was successfully updated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/CustomerFeedback'
 *       400:
 *         description: Invalid input
 *       404:
 *         description: The feedback was not found
 */
router.put('/:id', updateCustomerFeedbackById);

/**
 * @swagger
 * /api/v1/tut/feedback/{id}:
 *   delete:
 *     summary: Delete customer feedback by ID
 *     tags: [CustomerFeedback]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The feedback ID
 *     responses:
 *       200:
 *         description: The feedback was successfully deleted
 *       404:
 *         description: The feedback was not found
 */
router.delete('/:id', deleteCustomerFeedbackById);

module.exports = router;
