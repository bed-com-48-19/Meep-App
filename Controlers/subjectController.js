const Subject = require('../models/subjectModel');
const Class = require('../models/classModel');

// Create a new subject
const createSubject = async (req, res) => {
    try {
        // Get the class ID from the request body or request parameters
        const classId = req.body.classId || req.params.classId;

        // Check if the class ID is provided
        if (!classId) {
            return res.status(400).json({ error: 'Class ID is required' });
        }

        // Check if the class exists
        const foundClass = await Class.findById(classId);
        if (!foundClass) {
            return res.status(404).json({ error: 'Class not found' });
        }

        // Create the new subject instance using the request body
        const newSubject = await Subject.create({ ...req.body, class: classId });

        res.status(201).json(newSubject);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get all subjects
const getAllSubjects = async (req, res) => {
    try {
        const subjects = await Subject.find().populate('class');
        res.status(200).json(subjects);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get subject by ID
const getSubjectById = async (req, res) => {
    try {
        const foundSubject = await Subject.findById(req.params.id).populate('class');
        if (!foundSubject) {
            return res.status(404).json({ message: "Subject not found" });
        }
        res.status(200).json(foundSubject);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update subject by ID
const updateSubjectById = async (req, res) => {
    try {
        const updatedSubject = await Subject.findByIdAndUpdate(req.params.id, req.body, { new: true }).populate('class');
        if (!updatedSubject) {
            return res.status(404).json({ message: "Subject not found" });
        }
        res.status(200).json(updatedSubject);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Delete subject by ID
const deleteSubjectById = async (req, res) => {
    try {
        const deletedSubject = await Subject.findByIdAndDelete(req.params.id).populate('class');
        if (!deletedSubject) {
            return res.status(404).json({ message: "Subject not found" });
        }
        res.status(200).json({ message: "Subject deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


module.exports = {
    createSubject,
    getAllSubjects,
    getSubjectById,
    updateSubjectById,
    deleteSubjectById
};
