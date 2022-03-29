const express = require('express');
const rootRouter = require('./routes/rootRouter')
const stationsRouter = require('./routes/stationsRouter')
const equipementsRouter = require('./routes/equipementsRouter')


const app = express();
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/../public'));

app.use('/', rootRouter);
app.use('/stations', stationsRouter);
app.use('/equipements', equipementsRouter);

module.exports = app;
