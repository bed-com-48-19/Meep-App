const mongoose = require('mongoose');

const notesSchema = new mongoose.Schema({
    paragraph1: { type: String },
    paragraph2: { type: String },
    image_url1: { type: String },
    image_url2: { type: String },
    paragraph3: { type: String },
    paragraph4: { type: String },
    subtopic: { type: mongoose.Schema.Types.ObjectId, ref: 'Subtopic', required: true }
});

const Notes = mongoose.model('Notes', notesSchema);

module.exports = Notes;
