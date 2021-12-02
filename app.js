const express = require('express');
const path = require('path');

<<<<<<< HEAD
var indexRouter = require('./routes/index');
var lancamentoRouter = require('./routes/index')
=======
const indexRouter = require('./routes/index');
>>>>>>> ce44e4a42842c5ebf740c00df3fc65d5f557595c

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/lancamento', lancamentoRouter);

module.exports = app;