const express = require('express');
const path = require('path');

const indexRouter = require('./routes/index');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

module.exports = app;