// controllers/subtopicController.js
const Subtopic = require('../models/subTopic');
const Video = require('../models/videoModel');

// Create a new subtopic
const createSubtopic = async (req, res) => {
    try {
        const newSubtopic = await Subtopic.create(req.body);
        res.status(201).json(newSubtopic);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get all subtopics
const getAllSubtopics = async (req, res) => {
    try {
        const subtopics = await Subtopic.find().populate('topic').populate('videos');
        res.status(200).json(subtopics);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get subtopic by ID
const getSubtopicById = async (req, res) => {
    try {
        const foundSubtopic = await Subtopic.findById(req.params.id).populate('topic').populate('videos');
        if (!foundSubtopic) {
            return res.status(404).json({ message: "Subtopic not found" });
        }
        res.status(200).json(foundSubtopic);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update subtopic by ID
const updateSubtopicById = async (req, res) => {
    try {
        const updatedSubtopic = await Subtopic.findByIdAndUpdate(req.params.id, req.body, { new: true }).populate('topic').populate('videos');
        if (!updatedSubtopic) {
            return res.status(404).json({ message: "Subtopic not found" });
        }
        res.status(200).json(updatedSubtopic);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Delete subtopic by ID
const deleteSubtopicById = async (req, res) => {
    try {
        const deletedSubtopic = await Subtopic.findByIdAndDelete(req.params.id);
        if (!deletedSubtopic) {
            return res.status(404).json({ message: "Subtopic not found" });
        }
        res.status(200).json({ message: "Subtopic deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    createSubtopic,
    getAllSubtopics,
    getSubtopicById,
    updateSubtopicById,
    deleteSubtopicById
};
