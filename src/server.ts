import 'reflect-metadata';
import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors';
import router from './routes';
import cors from 'cors';
 
import './database';
import { AppError } from './Errors/AppErro';

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
});

app.listen(3333, () => {
  console.log('API Started On Port:3333!')
});
