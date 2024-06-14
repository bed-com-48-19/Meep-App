const express = require('express');
const router = express.Router();
const classController = require('../Controlers/classController');

/**
 * @swagger
 * tags:
 *   name: Classes
 *   description: API for managing classes
 */

/**
 * @swagger
 * /api/v1/class:
 *   post:
 *     summary: Create a new class
 *     tags: [Classes]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *             properties:
 *               name:
 *                 type: string
 *     responses:
 *       201:
 *         description: The class was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Class'
 *       400:
 *         description: Invalid input
 */
router.post('/', classController.createClass);

/**
 * @swagger
 * /api/v1/class:
 *   get:
 *     summary: Get all classes
 *     tags: [Classes]
 *     responses:
 *       200:
 *         description: A list of classes
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Class'
 */
router.get('/', classController.getAllClasses);

/**
 * @swagger
 * /api/v1/class/{id}:
 *   get:
 *     summary: Get class by ID
 *     tags: [Classes]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The class ID
 *     responses:
 *       200:
 *         description: The class description by ID
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Class'
 *       404:
 *         description: The class was not found
 */
router.get('/:id', classController.getClassById);

/**
 * @swagger
 * /api/v1/class/{id}:
 *   put:
 *     summary: Update class by ID
 *     tags: [Classes]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The class ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *     responses:
 *       200:
 *         description: The class was successfully updated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Class'
 *       400:
 *         description: Invalid input
 *       404:
 *         description: The class was not found
 */
router.put('/:id', classController.updateClassById);

/**
 * @swagger
 * /api/v1/class/{id}:
 *   delete:
 *     summary: Delete class by ID
 *     tags: [Classes]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The class ID
 *     responses:
 *       200:
 *         description: The class was successfully deleted
 *       404:
 *         description: The class was not found
 */
router.delete('/:id', classController.deleteClassById);

module.exports = router;
