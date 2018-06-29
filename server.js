'use strict';

const express = require('express');
const path = require('path');
const volleyball = require('volleyball');
const bodyParser = require('body-parser');

const app = express();
const PORT = 8023;

console.log('db synced');
app.listen(PORT, () =>
  console.log(`studiously serving silly sounds on port ${PORT}`));

// logging middleware
app.use(volleyball);

// body parsing middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, './public')));

app.use('*', (req, res) => {
  res.sendFile(path.join(__dirname, '.', 'public/index.html'));
});
app.use('/api/', require('./api.js')); // include our routes!

// error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal server error');
});
