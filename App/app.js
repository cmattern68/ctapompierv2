const express = require('express');
const rootRouter = require('./routes/rootRouter')

const app = express();
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/../public'));

app.use('/', rootRouter);

module.exports = app;
