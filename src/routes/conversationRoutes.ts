import { Router } from 'express';
import { createConversation, getConversations, deleteConversation } from '../controllers/conversation';

const conversationRoutes = Router();

/**
 * @swagger
 * /conversations:
 *   post:
 *     summary: Create a new conversation
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 description: Title of the conversation
 *     responses:
 *       201:
 *         description: Conversation created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   description: Unique ID of the conversation
 *                 title:
 *                   type: string
 *                   description: Title of the conversation
 */
conversationRoutes.post('/conversations', createConversation);

/**
 * @swagger
 * /conversations:
 *   get:
 *     summary: Get all conversations
 *     responses:
 *       200:
 *         description: List of conversations retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     description: Unique ID of the conversation
 *                   title:
 *                     type: string
 *                     description: Title of the conversation
 */
conversationRoutes.get('/conversations', getConversations);

/**
 * @swagger
 * /conversations/{id}:
 *   delete:
 *     summary: Delete a conversation
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Unique ID of the conversation to delete
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Conversation deleted successfully
 *       404:
 *         description: Conversation not found
 */
conversationRoutes.delete('/conversations/:id', deleteConversation);

export default conversationRoutes;
