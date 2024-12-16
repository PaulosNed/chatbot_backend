import swaggerJsDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import { Express } from 'express';

const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Chat App API',
      version: '1.0.0',
      description: 'API Documentation for the Chat Application',
    },
    servers: [
      {
        url: 'https://chatbot-backend-jc2k.onrender.com/api', // Deployed URL
        description: 'Production server',
      },
      {
        url: 'http://localhost:3000', // Localhost for development
        description: 'Development server',
      },
    ],
  },
  apis: ['./src/routes/*.ts'], // Adjust this path if your routes are in a different directory
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

export function setupSwagger(app: Express) {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
}
