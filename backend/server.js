import express from 'express';
import dotenv from 'dotenv';
import connectDatabase from './database.js';

dotenv.config(); // Load environment variables

const app = express();
connectDatabase();
app.get("/", (req, res) => {
    res.send("Welcome to the API!");
  });
  app.listen(3001, () => {
    console.log("Server is running on port 3001");
  });
  