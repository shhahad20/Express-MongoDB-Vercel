import express, { Request, Response } from 'express';
import mongoose from 'mongoose';
import 'dotenv/config'

import homeRouter from '../src/routers/homeRouter.js'
import listRouter from '../src/routers/listRouter.js'

const app = express();
const port = process.env.PORT || 3000;
const db = process.env.MONGODB_URI

// You have to add this line or you will get an error
if (!db) {
  throw new Error('MONGODB_URI is not defined in environment variables');
}
 
const connectDB = async () => {
  try {
    await mongoose.connect(db);
    console.log('Database connected');
  } catch (error) {
    console.error('Database connection error:', error);
    process.exit(1); // Exit process with failure
  }
}

// Connect to the database once when the server starts
connectDB();

app.use(express.json());
// fLf4lkHV4SpwgAHm
// Serves static files from the public directory.
app.use('/public',express.static("public"))
// This middleware parses incoming requests with URL-encoded payloads.
app.use(express.urlencoded({ extended: true }))

// Not using mongoDB
app.use('/', homeRouter)
// Using mongoDB
app.use('/lists', listRouter)


app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
