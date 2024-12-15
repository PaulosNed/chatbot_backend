import express from 'express';
import swaggerUi from 'swagger-ui-express';
import { setupSwagger } from './swagger';
import { PrismaClient } from '@prisma/client';
import conversationRoutes from './routes/conversationRoutes';
import  messageRoutes  from './routes/messageRoutes';

const app = express();
const prisma = new PrismaClient();

app.use(express.json());
app.use('/api', conversationRoutes);
app.use('/api', messageRoutes);

// Swagger setup (to be implemented later)
setupSwagger(app);

app.get('/', (req, res) => {
  res.send('Welcome to the Chat App API!');
});

export default app;
