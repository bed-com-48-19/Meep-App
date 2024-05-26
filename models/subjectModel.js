// Subject Model
const mongoose = require('mongoose');

const subjectSchema = new mongoose.Schema({
    name: { type: String, required: true },
    image_url: { type: String },
    description : { type: String },
    class: { type: mongoose.Schema.Types.ObjectId, ref: 'Class', required: true }, // Reference to Class model
    creator_name: { type: String }
});

const Subject = mongoose.model('Subject', subjectSchema);

module.exports = Subject;
