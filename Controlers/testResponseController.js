const StudentResponse = require('../models/testQuestionResponse');
const TestQuestionMarks = require('../models/testQuestionGrade');

// Create a new StudentResponse
const createStudentResponse = async (req, res) => {
    try {
        const student = req.body.student;
        const testQuestion = req.body.testQuestion;
        
        const response = await StudentResponse.findOne({student, testQuestion});

        if (response) {
            return res.status(401).json({ error: "Already available" });
        }

        const newStudentResponse = await StudentResponse.create(req.body);
        res.status(201).json(newStudentResponse);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get all StudentResponses
const getAllStudentResponses = async (req, res) => {
    try {
        const studentResponses = await StudentResponse.find().populate('student testQuestion');
        res.status(200).json(studentResponses);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get StudentResponse by ID
const getStudentResponseById = async (req, res) => {
    try {
        const studentResponse = await StudentResponse.findById(req.params.id).populate('student testQuestion');
        if (!studentResponse) {
            return res.status(404).json({ error: 'StudentResponse not found' });
        }
        const marks = await TestQuestionMarks.find({ studentResponse: req.params.id }).populate('testQuestion');
        res.status(200).json({ studentResponse, marks });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get StudentResponses by testId and studentId
const getStudentResponsesByTestAndStudent = async (req, res) => {
    try {
        const {studentId } = req.params;
        const studentResponses = await StudentResponse.find({ 
            student: studentId,
        }).populate('student testQuestion');
        
        if (studentResponses.length < 1) {
            return res.status(404).json({ error: 'No responses found for the given test and student' });
        }

        res.status(200).json(studentResponses);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update StudentResponse by ID
const updateStudentResponseById = async (req, res) => {
    try {
        const updatedStudentResponse = await StudentResponse.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!updatedStudentResponse) {
            return res.status(404).json({ error: 'StudentResponse not found' });
        }
        res.status(200).json(updatedStudentResponse);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Delete StudentResponse by ID
const deleteStudentResponseById = async (req, res) => {
    try {
        const deletedStudentResponse = await StudentResponse.findByIdAndDelete(req.params.id);
        if (!deletedStudentResponse) {
            return res.status(404).json({ error: 'StudentResponse not found' });
        }
        res.status(200).json(deletedStudentResponse);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    createStudentResponse,
    getAllStudentResponses,
    getStudentResponseById,
    getStudentResponsesByTestAndStudent,
    updateStudentResponseById,
    deleteStudentResponseById,
};
