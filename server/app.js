const express = require('express');
const path = require('path');

const indexRouter = require('./routes/index');
const apiRouter = require('./api/index');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '../client/build')));

app.use('/', indexRouter);
app.use('/api', apiRouter.router);

module.exports = app;
