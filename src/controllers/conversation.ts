import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const createConversation = async (req: Request, res: Response) => {
  console.log('Request body:', req.body);
  const { title, userId = 1 } = req.body; // Provide a default user ID of 1
  console.log('Title:', title);
  console.log('User ID:', userId);

  try {
    const conversation = await prisma.conversation.create({
      data: { title, userId },
    });
    console.log('Created conversation:', conversation);
    res.status(201).json(conversation);
  } catch (error) {
    console.error('Error creating conversation:', error);
    res.status(500).json({ error: 'Failed to create conversation' });
  }
};

export const getConversations = async (req: Request, res: Response) => {
  try {
    const conversations = await prisma.conversation.findMany({
        include: {
          messages: false, // Include related messages
        },
      });
    res.status(200).json(conversations);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch conversations' });
  }
};

export const getConversationById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const conversation = await prisma.conversation.findUnique({
      where: { id: Number(id) },
      include: {
        messages: true, // Include related messages
      },
    });
    if (conversation) {
      res.status(200).json(conversation);
    } else {
      res.status(404).json({ error: 'Conversation not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch conversation' });
  }
};

export const deleteConversation = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await prisma.conversation.delete({ where: { id: Number(id) } });
    res.status(200).json({ message: 'Conversation deleted' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete conversation' });
  }
};