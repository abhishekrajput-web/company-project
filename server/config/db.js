// import mongoose from 'mongoose';
// import dotenv from 'dotenv';
// dotenv.config();

// const connectDB = async () => {
//   try {
//     const conn = await mongoose.connect(process.env.MONGODB_URI);
//     console.log(`MongoDB Connected: ${conn.connection.host}`);
//   } catch (error) {
//     console.error(`Error connecting to MongoDB: ${error.message}`);
//     process.exit(1);
//   }
// };

// export default connectDB;


// backend/config/db.js

import mongoose from 'mongoose';

const connectDB = async (mongoURI) => {
  try {
    const conn = await mongoose.connect(mongoURI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error connecting to MongoDB: ${error.message}`);
    // Exit the process with a failure code if connection fails
    process.exit(1);
  }
};

export default connectDB;