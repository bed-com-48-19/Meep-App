const Topic = require('../models/topicModel');
const Subject = require('../models/subjectModel');
const Class = require('../models/classModel');

// Create a new topic
const createTopic = async (req, res) => {
    try {
        // Get the subject ID from the request body or request parameters
        const subjectId = req.body.subjectId || req.params.subjectId;

        // Check if the subject ID is provided
        if (!subjectId) {
            return res.status(400).json({ error: 'Subject ID is required' });
        }

        // Check if the subject exists
        const foundSubject = await Subject.findById(subjectId);
        if (!foundSubject) {
            return res.status(404).json({ error: 'Subject not found' });
        }

        // Create the new topic instance using the request body
        const newTopic = await Topic.create({ ...req.body, subject: subjectId });

        res.status(201).json(newTopic);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


// Get all topics
const getAllTopics = async (req, res) => {
    try {
        const topics = await Topic.find().populate('subject').populate('class');
        res.status(200).json(topics);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get topic by ID
const getTopicById = async (req, res) => {
    try {
        const foundTopic = await Topic.findById(req.params.id).populate('subject').populate('class');
        if (!foundTopic) {
            return res.status(404).json({ message: "Topic not found" });
        }
        res.status(200).json(foundTopic);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update topic by ID
const updateTopicById = async (req, res) => {
    try {
        const updatedTopic = await Topic.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedTopic) {
            return res.status(404).json({ message: "Topic not found" });
        }
        res.status(200).json(updatedTopic);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Delete topic by ID
const deleteTopicById = async (req, res) => {
    try {
        const deletedTopic = await Topic.findByIdAndDelete(req.params.id);
        if (!deletedTopic) {
            return res.status(404).json({ message: "Topic not found" });
        }
        res.status(200).json({ message: "Topic deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    createTopic,
    getAllTopics,
    getTopicById,
    updateTopicById,
    deleteTopicById
};
