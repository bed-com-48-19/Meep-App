// models/subtopicModel.js
const mongoose = require('mongoose');

const subtopicSchema = new mongoose.Schema({
    subtopic_name: { type: String, required: true },
    description: { type: String },
    subtopic_img_url: { type: String },
    topic: { type: mongoose.Schema.Types.ObjectId, ref: 'Topic', required: true },
    videos: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Video' }], // Add videos field
    quizzes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Quiz' }] // Add quizzes field
});

const Subtopic = mongoose.model('Subtopic', subtopicSchema);

module.exports = Subtopic;
