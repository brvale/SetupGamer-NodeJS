const express = require('express');
const path = require('path');
const session = require('express-session');
const cookieParser = require('cookie-parser');

var indexRouter = require('./routes/index');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set("view engine", "ejs");

app.use(session({ 
    secret: "setup",
    resave: true,
    saveUninitialized: true
}));


app.use(cookieParser());
app.use(express.urlencoded({extended: false}));
app.use(express.json());


app.use(express.static(path.join(__dirname, 'public')));

app.use("/", indexRouter);

module.exports = app;