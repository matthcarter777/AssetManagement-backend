import 'reflect-metadata';
import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors';
import router from './routes';
import cors from 'cors';
 
import './database';
import { AppError } from './Errors/AppError';

const app = express();

app.use(cors())
app.use(express.json());
app.use(router);

app.use((err: Error, request: Request, response: Response, _next: NextFunction) => {
  if(err instanceof AppError ) {
    return response.status(err.statusCode).json({
      message: err.message
    });
  }

  return response.status(500).json({
    status: "Error",
    message: `Internal server error ${err.message}`,
  });
});

app.listen(process.env.SERVER_PORT, () => {
  console.log(`API Ster on port ${process.env.SERVER_PORT}!`)
});
