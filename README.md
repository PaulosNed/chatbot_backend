
# Chat App Backend  

This is the backend for the Chat App project. It provides API endpoints to manage conversations and messages between users and a chatbot.  

---

## Features  

- Manage conversations (create, fetch, delete).  
- Send and fetch messages for specific conversations.  
- Chatbot functionality with delayed, auto-generated responses.  
- API documentation with Swagger.  
- Integration with PostgreSQL database using Prisma ORM.  
- Dockerized for easy deployment.  

---

## Tech Stack  

- **Backend Framework**: Express.js  
- **Database**: Supabase (PostgreSQL)  
- **ORM**: Prisma  
- **API Documentation**: Swagger  
- **Deployment**: Docker, Render  

---

## Setup Instructions  

### Prerequisites  

1. Node.js (v18 or higher)  
2. Docker (optional for local setup)  
3. Supabase/PostgreSQL database  

### Environment Variables  

Create a `.env` file in the project root with the following variables:  

```env
DATABASE_URL=<your_supabase_or_postgres_connection_string>
PORT=3000
```

### Installation  

1. Clone the repository:  
   ```bash
   git clone https://github.com/PaulosNed/chatbot_backend
   cd chatbot_backend
   ```  

2. Install dependencies:  
   ```bash
   npm install
   ```  

3. Set up the database:  
   ```bash
   npx prisma migrate deploy
   ```  

4. Start the development server:  
   ```bash
   npm run dev
   ```  

### Using Docker  

1. Build the Docker image:  
   ```bash
   docker build -t chat-app-backend .
   ```  

2. Run the container:  
   ```bash
   docker run -p 3000:3000 --env-file .env chat-app-backend
   ```  

---

## API Endpoints  

### Conversations  

- **Create Conversation**  
  `POST /api/conversations`  

- **Fetch All Conversations**  
  `GET /api/conversations`  

- **Delete Conversation**  
  `DELETE /api/conversations/:id`  

### Messages  

- **Send Message**  
  `POST /api/messages`  

- **Fetch Messages**  
  `GET /api/conversations/:id/messages`  

---

## Swagger Documentation  

The API is documented using Swagger. Once the server is running, access the Swagger documentation at:  

- Local: [http://localhost:3000/api-docs](http://localhost:3000/api-docs)  
- Production: [https://chatbot-backend-jc2k.onrender.com/api-docs](https://chatbot-backend-jc2k.onrender.com/api-docs)  

---

## Testing  

You can test the API using tools like Postman or cURL. Example:  

**Fetch all conversations:**  
```bash
curl -X GET https://chatbot-backend-jc2k.onrender.com/api/conversations
```  

---

## Deployment  

The backend is deployed on Render. The production URL is:  

- [https://chatbot-backend-jc2k.onrender.com](https://chatbot-backend-jc2k.onrender.com)  

---

## Project Structure  

```
├── src
│   ├── controllers      # Business logic for routes
│   ├── routes           # API route definitions
│   ├── prisma           # Prisma schema and migrations
│   ├── swagger          # Swagger setup
│   ├── index.ts         # Entry point of the application
├── Dockerfile           # Docker setup
├── .env.example         # Example environment variables
└── README.md            # Project documentation
```

---
 




