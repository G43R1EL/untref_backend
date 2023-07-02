// Environment variables
const dotenv = require('dotenv');

dotenv.config();

// Server
const express = require('express');

const server = express();
const PORT = process.env.PORT || 8080;
const HOST = process.env.HOST || 'localhost';

// Middlewares
server.use(express.static('src/public'));
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

// Router import
const router = require('./routes/router');

// Use router
server.use('/api', router);

// 404 Page
server.get('*', (req, res) => {
  res.status(404).redirect('/404.html');
});

// Start server
server.listen(PORT, HOST, () => {
  console.log(`Server listening on http://${HOST}:${PORT}`);
});
