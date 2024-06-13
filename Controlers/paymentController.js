const Payment = require('../models/paymentModel'); // Adjust the path as necessary

// Get payment by student and topic IDs
exports.getPaymentByStudentAndTopic = async (req, res) => {
  try {
    const { student, topic } = req.params;
    const payment = await Payment.findOne({ student, topic }).populate('student').populate('topic');
    if (!payment) {
      return res.status(404).json({ message: "Payment not found" });
    }
    res.status(200).json(payment);
  } catch (error) {
    res.status(500).json({ message: "Error fetching payment", error });
  }
};

// Update payment by student and topic IDs
exports.updatePaymentByStudentAndTopic = async (req, res) => {
  try {
    const { student, topic } = req.params;
    const { amount, email, isPaidFor } = req.body;
    const updatedPayment = await Payment.findOneAndUpdate(
      { student, topic },
      { amount, email },
      {isPaidFor, isPaidFor},
      { new: true, runValidators: true }
    ).populate('student').populate('topic');
    if (!updatedPayment) {
      return res.status(404).json({ message: "Payment not found" });
    }
    res.status(200).json(updatedPayment);
  } catch (error) {
    res.status(500).json({ message: "Error updating payment", error });
  }
};

// Other controller functions (createPayment, getAllPayments, deletePaymentById)
exports.createPayment = async (req, res) => {
  try {
    const payment = new Payment(req.body);
    const savedPayment = await payment.save();
    res.status(201).json(savedPayment);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getAllPayments = async (req, res) => {
  try {
    const payments = await Payment.find().populate('student').populate('topic');
    res.status(200).json(payments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deletePaymentById = async (req, res) => {
  try {
    const payment = await Payment.findByIdAndDelete(req.params.id);
    if (!payment) return res.status(404).json({ message: 'Payment not found' });
    res.status(200).json({ message: 'Payment deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
