const path = require('path');
const express = require('express')
const app = express();

const questionRouter = require('./routes/questionRouter');
const userRouter = require('./routes/userRouter');

const PORT = 3000;
app.use(express.json());
app.use(express.static(path.resolve(__dirname, '../src/assets')));

app.use('/api/question', questionRouter);
app.use('/api', userRouter);


app.use((err, req, res, next) => {
  return res.status(err.status).json(err.message);
});

// start server
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}...`);
});