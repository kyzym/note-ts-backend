import express, { NextFunction, Request, Response } from 'express';
import chalk from 'chalk';
import cors from 'cors';
import morgan from 'morgan';
import { AddressInfo } from 'net';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import router from './routes/notesRoutes.js';
import { connectDb } from './config/connectDB.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({
  path: path.join(__dirname, 'config', '.env'),
});
console.log(path.join(__dirname, 'config', '.env'));
const app = express();

const { PORT = 4000 } = process.env;

(async () => {
  await connectDb();
})();

app.use(morgan('short'));

app.use(cors());

app.use(express.json());

app.use(express.static('public'));

app.use(router);

app.use((_: Request, res: Response) => {
  res.status(404).json({ status: 'error', message: 'Invalid URL' });
});

app.use(
  (
    err: { status: number; message: string } & Error,
    _: Request,
    res: Response,
    _next: NextFunction
  ) => {
    const { status = 500 } = err;
    res.status(status).json({ message: err.message });
  }
);

const server = app.listen(PORT, () => {
  const address = server.address() as AddressInfo;
  console.log(
    chalk.green.italic(
      `Server is running. Use this API at http://localhost:${address.port}`
    )
  );
});
