const mongoose = require('mongoose');

const progressSchema = new mongoose.Schema({
    progress_time: { type: String },
    progress_time: { type: Number },
    Video: { type: mongoose.Schema.Types.ObjectId, ref: 'Video', required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
});

const Progress = mongoose.model('Progress', progressSchema);

module.exports = Progress;
