const path = require('path');
const express = require('express')
const app = express();

const PORT = 3000;

app.use(express.json());

// app.use(express.static(path.resolve(__dirname, './src/assets')));
// app.use(express.static(path.resolve(__dirname, './src/views')));

// app.get("/", )

app.use((err, req, res, next) => {
  return res.status(err.status).json(err.message);
});

// start server
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}...`);
});