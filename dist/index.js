import express from 'express';
import chalk from 'chalk';
import cors from 'cors';
import morgan from 'morgan';
import dotenv from 'dotenv';
import path from 'path';
import url from 'url';
import router from './routes/notesRoutes.js';
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({
    path: path.join(__dirname, 'config', '.env'),
});
const app = express();
const { PORT = 3000 } = process.env;
app.use(morgan('short'));
app.use(cors());
app.use(express.json());
app.use(express.static('public'));
app.use(router);
app.use((_, res) => {
    res.status(404).json({ status: 'error', message: 'Invalid URL' });
});
app.use((err, _, res, _next) => {
    const { status = 500 } = err;
    res.status(status).json({ message: err.message });
});
const server = app.listen(PORT, () => {
    const address = server.address();
    console.log(chalk.green.italic(`Server is running. Use this API at http://localhost:${address.port}`));
});
