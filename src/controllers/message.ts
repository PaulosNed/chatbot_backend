import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const sendMessage = async (req: Request, res: Response) => {
  const { content, isUser, conversationId } = req.body;
  try {
    const message = await prisma.message.create({
      data: { content, isUser, conversationId },
    });
    res.status(201).json(message);
  } catch (error) {
    res.status(500).json({ error: 'Failed to send message' });
  }
};

export const getMessages = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const messages = await prisma.message.findMany({
      where: { conversationId: Number(id) },
      orderBy: { createdAt: 'asc' },
    });
    res.status(200).json(messages);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch messages' });
  }
};
