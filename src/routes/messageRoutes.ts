import { Router } from 'express';
import { sendMessage, getMessages } from '../controllers/message';

const messageRoutes = Router();

/**
 * @swagger
 * /messages:
 *   post:
 *     summary: Send a new message
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               conversationId:
 *                 type: integer
 *                 description: ID of the conversation
 *               isUser:
 *                 type: boolean
 *                 description: Sender of the message ('user' or 'bot')
 *               content:
 *                 type: string
 *                 description: Content of the message
 *     responses:
 *       201:
 *         description: Message sent successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   description: Unique ID of the message
 *                 conversationId:
 *                   type: integer
 *                   description: ID of the conversation
 *                 isUser:
 *                   type: boolean
 *                   description: Sender of the message
 *                 content:
 *                   type: string
 *                   description: Content of the message
 */
messageRoutes.post('/messages', sendMessage);

/**
 * @swagger
 * /conversations/{id}/messages:
 *   get:
 *     summary: Get all messages in a conversation
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Unique ID of the conversation
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Messages retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     description: Unique ID of the message
 *                   conversationId:
 *                     type: integer
 *                     description: ID of the conversation
 *                   isUser: 
 *                     type: boolean
 *                     description: Sender of the message
 *                   content:
 *                     type: string
 *                     description: Content of the message
 */
messageRoutes.get('/conversations/:id/messages', getMessages);

export default messageRoutes;
