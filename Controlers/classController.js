// controllers/classController.js
const Class = require('../models/classModel');

// Create a new class
const createClass = async (req, res) => {
    try {
        const newClass = await Class.create(req.body);
        res.status(201).json(newClass);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get all classes
const getAllClasses = async (req, res) => {
    try {
        const classes = await Class.find();
        res.status(200).json(classes);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get class by ID
const getClassById = async (req, res) => {
    try {
        const foundClass = await Class.findById(req.params.id);
        if (!foundClass) {
            return res.status(404).json({ message: "Class not found" });
        }
        res.status(200).json(foundClass);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update class by ID
const updateClassById = async (req, res) => {
    try {
        const updatedClass = await Class.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedClass) {
            return res.status(404).json({ message: "Class not found" });
        }
        res.status(200).json(updatedClass);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Delete class by ID
const deleteClassById = async (req, res) => {
    try {
        const deletedClass = await Class.findByIdAndDelete(req.params.id);
        if (!deletedClass) {
            return res.status(404).json({ message: "Class not found" });
        }
        res.status(200).json({ message: "Class deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    createClass,
    getAllClasses,
    getClassById,
    updateClassById,
    deleteClassById
};
