import express from 'express';
import path from 'path';

const app = express();

app.use(express.static(path.join(__dirname,'public'))) //unir el path con public para acceder a ese directorio

export default app;