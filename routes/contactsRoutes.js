const express = require('express');
const { createContact, getAllContacts, getContactsByTutorId, updateContactById, deleteContactById } = require('../Controlers/contactsController');
const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Contacts
 *   description: API for managing tutor contacts
 */

/**
 * @swagger
 * /api/v1/tuto/contacts:
 *   post:
 *     summary: Create a new contact
 *     tags: [Contacts]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - phone
 *             properties:
 *               name:
 *                 type: string
 *               phone:
 *                 type: string
 *     responses:
 *       201:
 *         description: The contact was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Contact'
 *       400:
 *         description: Invalid input
 */
router.post('/', createContact);

/**
 * @swagger
 * /api/v1/tuto/contacts:
 *   get:
 *     summary: Get all contacts
 *     tags: [Contacts]
 *     responses:
 *       200:
 *         description: A list of contacts
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Contact'
 */
router.get('/', getAllContacts);

/**
 * @swagger
 * /api/v1/tuto/contacts/tutor/{tutorId}:
 *   get:
 *     summary: Get contacts by tutor ID
 *     tags: [Contacts]
 *     parameters:
 *       - in: path
 *         name: tutorId
 *         schema:
 *           type: string
 *         required: true
 *         description: The tutor ID
 *     responses:
 *       200:
 *         description: The contacts for the specified tutor
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Contact'
 *       404:
 *         description: No contacts found for the specified tutor
 */
router.get('/tutor/:tutorId', getContactsByTutorId);

/**
 * @swagger
 * /api/v1/tuto/contacts/{id}:
 *   get:
 *     summary: Get contact by ID
 *     tags: [Contacts]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The contact ID
 *     responses:
 *       200:
 *         description: The contact description by ID
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Contact'
 *       404:
 *         description: The contact was not found
 */
router.get('/:id', getContactsByTutorId);

/**
 * @swagger
 * /api/v1/tuto/contacts/{id}:
 *   put:
 *     summary: Update contact by ID
 *     tags: [Contacts]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The contact ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               phone:
 *                 type: string
 *     responses:
 *       200:
 *         description: The contact was successfully updated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Contact'
 *       400:
 *         description: Invalid input
 *       404:
 *         description: The contact was not found
 */
router.put('/:id', updateContactById);

/**
 * @swagger
 * /api/v1/tuto/contacts/{id}:
 *   delete:
 *     summary: Delete contact by ID
 *     tags: [Contacts]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The contact ID
 *     responses:
 *       200:
 *         description: The contact was successfully deleted
 *       404:
 *         description: The contact was not found
 */
router.delete('/:id', deleteContactById);

module.exports = router;
