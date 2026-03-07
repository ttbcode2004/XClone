import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { ENV } from './config/env.js';
import { connectDB } from './config/db.js';

const app = express();
app.use(cors());
app.use(bodyParser.json());


connectDB(); // Connect to the database before starting the server

app.get('/', (req, res) => {
  res.send('Hello World!');
});

const PORT = process.env.PORT || 3000;

app.listen(ENV.PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});