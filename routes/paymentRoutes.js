const express = require('express');
const router = express.Router();
const paymentController = require('../Controlers/paymentController'); // Adjust the path as necessary

/**
 * @swagger
 * tags:
 *   name: Payments
 *   description: API endpoints for managing payments
 */

/**
 * @swagger
 * /api/v1/payments:
 *   post:
 *     summary: Create a new payment
 *     tags: [Payments]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               amount:
 *                 type: number
 *               description:
 *                 type: string
 *               studentId:
 *                 type: string
 *               topicId:
 *                 type: string
 *     responses:
 *       201:
 *         description: The payment was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Payment'
 *       400:
 *         description: Invalid input
 */
router.post('/', paymentController.createPayment);

/**
 * @swagger
 * /api/v1/payments:
 *   get:
 *     summary: Get all payments
 *     tags: [Payments]
 *     responses:
 *       200:
 *         description: A list of payments
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Payment'
 */
router.get('/', paymentController.getAllPayments);

/**
 * @swagger
 * /api/v1/payments/{student}/{topic}:
 *   get:
 *     summary: Get payment by student and topic IDs
 *     tags: [Payments]
 *     parameters:
 *       - in: path
 *         name: student
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the student
 *       - in: path
 *         name: topic
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the topic
 *     responses:
 *       200:
 *         description: The payment details for the specified student and topic
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Payment'
 *       404:
 *         description: Payment not found for the specified student and topic
 */
router.get('/:student/:topic', paymentController.getPaymentByStudentAndTopic);

/**
 * @swagger
 * /api/v1/payments/{student}/{topic}:
 *   put:
 *     summary: Update payment by student and topic IDs
 *     tags: [Payments]
 *     parameters:
 *       - in: path
 *         name: student
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the student
 *       - in: path
 *         name: topic
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the topic
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               amount:
 *                 type: number
 *               description:
 *                 type: string
 *     responses:
 *       200:
 *         description: The payment was successfully updated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Payment'
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Payment not found for the specified student and topic
 */
router.put('/:student/:topic', paymentController.updatePaymentByStudentAndTopic);

/**
 * @swagger
 * /api/v1/payments/{id}:
 *   delete:
 *     summary: Delete payment by ID
 *     tags: [Payments]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the payment to delete
 *     responses:
 *       200:
 *         description: The payment was successfully deleted
 *       404:
 *         description: Payment not found
 */
router.delete('/:id', paymentController.deletePaymentById);

module.exports = router;
