import express from 'express';

const app = express();

app.get('/hello', (req, res) => res.send('Hello! World'));

app.listen(8000, ()=> console.log('Backend Running on Port 8000'));