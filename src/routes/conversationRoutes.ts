import { Router } from 'express';
import { createConversation, getConversations, getConversationById, deleteConversation } from '../controllers/conversation';

const conversationRoutes = Router();

/**
 * @swagger
 * /conversations:
 *   post:
 *     summary: Create a new conversation
 *     requestBody:
 *       required: false
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userId:
 *                 type: integer
 *                 description: ID of the user
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
 *                 userId:
 *                   type: integer
 *                   description: ID of the user
 *                 createdAt:
 *                   type: string
 *                   format: date-time
 *                   description: Creation date of the conversation
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
 *                   userId:
 *                     type: integer
 *                     description: ID of the user
 *                   createdAt:
 *                     type: string
 *                     format: date-time
 *                     description: Creation date of the conversation
 *                  
 */
conversationRoutes.get('/conversations', getConversations);

/**
 * @swagger
 * /conversations/{id}:
 *   get:
 *     summary: Get a conversation by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Unique ID of the conversation to retrieve
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Conversation retrieved successfully
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
 *                 userId:
 *                   type: integer
 *                   description: ID of the user
 *                 createdAt:
 *                   type: string
 *                   format: date-time
 *                   description: Creation date of the conversation
 *                 messages:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                         description: Unique ID of the message
 *                       content:
 *                         type: string
 *                         description: Content of the message
 *                       isUser:
 *                         type: boolean
 *                         description: Indicates if the message is from the user
 *                       conversationId:
 *                         type: integer
 *                         description: ID of the conversation
 *                       createdAt:
 *                         type: string
 *                         format: date-time
 *                         description: Creation date of the message
 *       404:
 *         description: Conversation not found
 */
conversationRoutes.get('/conversations/:id', getConversationById);

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
 *         description: Conversation deleted 
 *       404:
 *         description: Conversation not found
 */
conversationRoutes.delete('/conversations/:id', deleteConversation);

export default conversationRoutes;