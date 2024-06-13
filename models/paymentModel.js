// payment Model
const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
    amount: { type: String },
    email : { type: String },
    isPaidFor: { type: Boolean},
    student: { type: mongoose.Schema.Types.ObjectId, ref: 'Student',}, 
    topic: { type: mongoose.Schema.Types.ObjectId, ref: 'Topic', },
});

const payment = mongoose.model('Payment', paymentSchema);

module.exports = payment;