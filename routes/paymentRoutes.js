const express = require('express');
const router = express.Router();
const paymentController = require('../Controlers/paymentController'); // Adjust the path as necessary

// Create a new payment
router.post('/', paymentController.createPayment);

// Get all payments
router.get('/', paymentController.getAllPayments);

// Get payment by student and topic IDs
router.get('/:student/:topic', paymentController.getPaymentByStudentAndTopic);

// Update payment by student and topic IDs
router.put('/:student/:topic', paymentController.updatePaymentByStudentAndTopic);

// Delete payment by ID
router.delete('/:id', paymentController.deletePaymentById);

module.exports = router;
