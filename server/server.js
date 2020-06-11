'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const multer = require('multer');
const PORT = 5000;

const {} = require('./endpoints');

express()
  .use((req, res, next) => {
    res.header(
      'Access-Control-Allow-Methods',
      'OPTION, HEAD, GET, PUT, POST, DELETE'
    );
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
    );
    next();
  })
  .use(morgan('tiny'))

  // endpoints
  .get('/hello', (req, res) => res.status(200).json('hello world'))

  .listen(PORT, () => console.info(`Listening on port ${PORT}`));
