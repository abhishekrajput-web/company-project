import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';
import companyRoutes from './routes/companyRoute.js'; 

dotenv.config();

const app = express();

const allowedOrigins = [
  'http://localhost:5173', 
  'http://localhost:5174',
  'https://company-assignment-7.netlify.app'
];

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin) return callback(null, true);
    if (allowedOrigins.indexOf(origin) === -1) {
      const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  }
};

app.use(cors(corsOptions)); 




app.use(express.json());

app.get('/', (req, res) => {
  res.send('API is running...');
});

app.use('/api/companies', companyRoutes);

const PORT = process.env.PORT || 5001;

const startServer = async () => {
  try {
    await connectDB(process.env.MONGODB_URI); 

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error('Failed to start server:', error);
  }
};

startServer();