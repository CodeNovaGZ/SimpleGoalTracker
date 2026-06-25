import express from 'express';
import cors from 'cors';
import { goalRouter } from './routes.js';

export const app = express();
app.use(cors());

app.use('/goals', goalRouter)

app.use(express.json());

