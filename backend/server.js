import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from '../frontend/App';
import { Store } from '../frontend/Store';

const app = express()

app.use('/static', express.static('dist'));

app.get('*', async (req, res) => {
  res.send('express backend works');
});

app.listen(3000, () => console.log('Example app listening on port 3000!'));
