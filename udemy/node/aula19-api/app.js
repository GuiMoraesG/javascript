import dotenv from 'dotenv';

dotenv.config();

import './src/database';
import express from 'express';
import homeRouter from './src/routes/home';
import userRouter from './src/routes/user';
import tokenRouter from './src/routes/token';
import alunoRouter from './src/routes/aluno';

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
  }

  routes() {
    this.app.use('/', homeRouter);
    this.app.use('/users/', userRouter);
    this.app.use('/tokens/', tokenRouter);
    this.app.use('/aluno/', alunoRouter);
  }
}

export default new App().app;
