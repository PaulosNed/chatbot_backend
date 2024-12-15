import app from './app';
import cors from 'cors';

app.use(
  cors({
    origin: '*', // Allow all origins (for dev only)
  })
);


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  console.log(`Swagger docs available at http://localhost:${PORT}/api-docs`);
});
