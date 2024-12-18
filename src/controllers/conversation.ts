import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const createConversation = async (req: Request, res: Response) => {
  console.log('Received request to create a conversation');
  let { userId  } = req.body; // Provide a default user ID of 1
  userId = 1
  console.log('User ID:', userId);

  try {
    // Create the conversation with a temporary title
    const conversation = await prisma.conversation.create({
      data: { title: 'Temporary Title', userId },
    });

    // Generate the unique title using the conversation ID
    const title = `Conversation ${conversation.id}`;
    console.log('Generated title:', title);

    // Update the conversation with the unique title
    const updatedConversation = await prisma.conversation.update({
      where: { id: conversation.id },
      data: { title },
    });

    console.log('Created conversation:', updatedConversation);
    res.status(201).json(updatedConversation);
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
      orderBy: {
        createdAt: 'desc', // Order by creation date from oldest to newest
      },
    });
    res.status(200).json(conversations);
  } catch (error) {
    console.error('Error fetching conversations:', error);
    res.status(500).json({ error: 'Failed to fetch conversations' });
  }
};

export const getConversationById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const conversation = await prisma.conversation.findUnique({
      where: { id: Number(id) },
      include: {
        messages: {
          orderBy: {
            createdAt: 'asc', // Order messages by creation date from oldest to newest
          },
        },
      },
    });
    if (conversation) {
      res.status(200).json(conversation);
    } else {
      res.status(404).json({ error: 'Conversation not found' });
    }
  } catch (error) {
    console.error('Error fetching conversation:', error);
    res.status(500).json({ error: 'Failed to fetch conversation' });
  }
};

export const deleteConversation = async (req: Request, res: Response) => {
  const { id } = req.params;
  console.log('Received request to delete conversation with ID:', id);

  try {
    // Delete related messages first
    const deletedMessages = await prisma.message.deleteMany({
      where: { conversationId: Number(id) },
    });
    console.log('Deleted related messages:', deletedMessages);

    // Delete the conversation
    const deletedConversation = await prisma.conversation.delete({
      where: { id: Number(id) },
    });
    console.log('Deleted conversation:', deletedConversation);

    res.status(200).json({ message: 'Conversation and related messages deleted' });
  } catch (error) {
    console.error('Error deleting conversation:', error);
    res.status(500).json({ error: 'Failed to delete conversation' });
  }
};