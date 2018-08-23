import express from 'express';

const app = express()

app.use('/static', express.static('dist'));

app.get('*', async (req, res) => {
  res.send('express backend works');
});

app.listen(3000, () => console.log('Example app listening on port 3000!'));
