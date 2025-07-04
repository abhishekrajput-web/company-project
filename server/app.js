// // backend/server.js
// import express from 'express';
// import dotenv from 'dotenv';
// import cors from 'cors';
// import connectDB from './config/db.js';
// import companyRoutes from './routes/companyRoute.js';

// dotenv.config();
// connectDB();

// const app = express();

// app.use(cors());
// app.use(express.json());

// app.get('/', (req, res) => {
//   res.send('API is running...');
// });

// app.use('/api/companies', companyRoutes);

// const PORT = process.env.PORT || 5001;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });



// // company

// // VNpTEcCxbLrHllXg


// backend/server.js

import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';
import companyRoutes from './routes/companyRoute.js'; // Corrected import path if your file is companyRoutes.js

// --- Step 1: Load Environment Variables ---
// dotenv.config() is called only once, at the very top.
dotenv.config();

const app = express();

// --- Step 2: Configure Middleware ---
app.use(cors());
app.use(express.json()); // To parse JSON request bodies

// --- Step 3: Define Routes ---
app.get('/', (req, res) => {
  res.send('API is running...');
});

// Mount the company-specific routes
app.use('/api/companies', companyRoutes);

const PORT = process.env.PORT || 5001;

// --- Step 4: Define the Server Startup Function ---
const startServer = async () => {
  try {
    // Await a successful database connection before starting the server
    await connectDB(process.env.MONGODB_URI); // Pass the URI as a parameter

    // If the database connection is successful, start the Express server
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    // This will catch any errors that might not be handled inside connectDB
    console.error('Failed to start server:', error);
  }
};

// --- Step 5: Execute the Startup Function ---
startServer();